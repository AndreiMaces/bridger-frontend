import { VehicleType } from '../enums/VehicleTypes';

export type CreateVehicleDTO = {
  type: VehicleType;
  name: string;
  price: number;
  inStock: boolean;
  shopLink: string;
  avatar: string;
  description: string;
  videoLink: string;
  videoTitle: string;
  videoDescription: string;
  engine: string;
  performanceUpgrades: string;
  interior: string;
  exterior: string;
  dimensions: string;
  gallery: string[];
  specifications: {
    id: string;
    name: string;
    description: string;
  }[];
};
