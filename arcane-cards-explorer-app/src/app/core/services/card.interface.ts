export interface Card {
  id: string;
  name: string;
  image_uris?: {normal: string};
  mana_cost?: string;
  type_line?: string;
  // has_more: true;
  // next_page: "https://api.scryfall.com/..."
}