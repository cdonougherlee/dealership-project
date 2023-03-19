import { Accessory } from './Accessory';

export interface Car {
  brand: string;
  model: string;
  colour: string;
  trim: string;
  options: Accessory[];
}
