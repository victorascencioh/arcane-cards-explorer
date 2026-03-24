import { Component, effect } from '@angular/core';
import { CardsService } from '../../../../core/services/cards.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-search',
  imports: [FormsModule],
  templateUrl: './card-search.html',
  styleUrl: './card-search.css',
})
export class CardSearch {
  query = '';
  constructor(public cardsService: CardsService) {}

  search() {
    if (this.query.trim()) {
      this.cardsService.searchCards(this.query.trim());
    }
  }

  loadMore() {
    this.cardsService.loadMore();
  }
}
