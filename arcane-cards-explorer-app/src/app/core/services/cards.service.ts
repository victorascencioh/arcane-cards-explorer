import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Card } from './card.interface';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  cards = signal<Card[]>([]);
  nextPage = signal<string | null>(null);
  loading = signal(false);

  private api = 'https://api.scryfall.com/cards/search';

  constructor(private http: HttpClient) {}

  searchCards(query: string): void {
    this.http.get<any>(`${this.api}?q=${query}`)
      .subscribe(res => {
        this.cards.set(res.data);
        this.nextPage.set(res.has_more ? res.next_page : null);
        this.loading.set(false);
      });
  }

  loadMore(): void {
    const next = this.nextPage();

    if (!next) return;

    this.loading.set(true);

    this.http.get<any>(next)
      .subscribe(res => {
        this.cards.update(cards => [...cards, ...res.data]);
        this.nextPage.set(res.has_more ? res.next_page : null);
        this.loading.set(false);
      });
  }
}
