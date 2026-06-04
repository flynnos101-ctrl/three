export interface Product {
  id: string;
  step: 1 | 2 | 3;
  name: string; // e.g. "CLEANSE", "EXFOLIATE", "MOISTURISE"
  tagline: string;
  volume: string; // e.g. "150ml", "100ml", "75ml"
  price: number;
  description: string;
  benefits: string[];
  howToUse: string;
}

export interface CartItem {
  id: string; // can be "bundle" or product id "cleanse", "exfoliate", "moisturise"
  name: string;
  price: number;
  quantity: number;
  step?: 1 | 2 | 3 | "bundle";
  volume?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  age: number;
  text: string;
  stars: number;
  verified: boolean;
  avatarUrl?: string;
  lifestyleUrl?: string; // high-quality CANDID photo placeholder or seed
}
