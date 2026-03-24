import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

export interface Card {
  id: string;
  name: string;
  image_uris?: {normal: string};
  mana_cost?: string;
  type_line?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  cards = signal<Card[]>([]);

  private api = 'https://api.scryfall.com/cards/search';

  constructor(private http: HttpClient) {}

  searchCards(query: string): void {
    this.http.get<{data: Card[]}>(`${this.api}?q=${query}`)
      .subscribe(res => this.cards.set(res.data));
  }
}
