export interface IMerch {
  id: string;
  name: string;
  price: number;
  shopLink: string;
  avatar: string;
  inStock: boolean;
}

export class Merch {
  id: string;
  name: string;
  price: number;
  shopLink: string;
  avatar: string;
  inStock: boolean;

  constructor(merch: IMerch) {
    this.id = merch.id;
    this.name = merch.name;
    this.price = merch.price;
    this.shopLink = merch.shopLink;
    this.avatar = merch.avatar;
    this.inStock = merch.inStock;
  }
}
