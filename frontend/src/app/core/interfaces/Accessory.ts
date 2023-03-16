import { AccessoryValue } from './AccessoryValue';

export interface Accessory {
  name: string;
  value: string;
  description?: string;
  base?: string;
  values?: AccessoryValue[];
}
