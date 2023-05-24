export interface IVehicle {
  id: string;
  type: number;
  name: string;
  price: number;
  shopLink: string;
  inStock: true;
  avatar: string;
  engine: string;
  performanceUpgrades: string;
  interior: string;
  exterior: string;
  dimensions: string;
  gallery: string[];
  description: string;
  videoLink: string;
  videoTitle: string;
  videoDescription: string;
}

export class Vehicle {
  id: string;
  type: number;
  name: string;
  price: number;
  shopLink: string;
  inStock: true;
  avatar: string;

  gallery: string[];
  description: string;
  videoLink: string;
  videoTitle: string;
  videoDescription: string;
  specifications: {
    dimensions: string;
    interior: string;
    exterior: string;
    performanceUpgrades: string;
    engine: string;
  } = {
    dimensions: '',
    interior: '',
    exterior: '',
    performanceUpgrades: '',
    engine: '',
  };

  constructor(vehicle: IVehicle) {
    this.id = vehicle.id;
    this.type = vehicle.type;
    this.name = vehicle.name;
    this.price = vehicle.price;
    this.shopLink = vehicle.shopLink;
    this.inStock = vehicle.inStock;
    this.avatar = vehicle.avatar;
    if (vehicle?.engine) this.specifications.engine = vehicle.engine;
    if (vehicle?.performanceUpgrades)
      this.specifications.performanceUpgrades = vehicle.performanceUpgrades;
    if (vehicle?.interior) this.specifications.interior = vehicle.interior;
    if (vehicle?.exterior) this.specifications.exterior = vehicle.exterior;
    if (vehicle?.dimensions)
      this.specifications.dimensions = vehicle.dimensions;
    this.gallery = vehicle.gallery;
    this.description = vehicle.description;
    this.videoLink = vehicle.videoLink;
    this.videoTitle = vehicle.videoTitle;
    this.videoDescription = vehicle.videoDescription;
  }
}
