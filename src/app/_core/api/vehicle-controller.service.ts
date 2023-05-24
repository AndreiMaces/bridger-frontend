import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { IVehicle } from '../models/vehicle';
import { CreateVehicleDTO } from '../DTOs/CreateVehicleDTO';

@Injectable({
  providedIn: 'root',
})
export class VehicleControllerService {
  private readonly _resourceApi = '/Vehicle';

  constructor(private apiService: ApiService) {}

  getFeatured(count: number): Observable<IVehicle[]> {
    return this.apiService.get(`${this._resourceApi}/featured/${count}`);
  }

  getVehicleById(id: string): Observable<IVehicle> {
    return this.apiService.get(`${this._resourceApi}/${id}`);
  }

  getAllVehicles(): Observable<IVehicle[]> {
    return this.apiService.get(`${this._resourceApi}/get-all`);
  }

  createVehicle(newVehicle: CreateVehicleDTO): Observable<IVehicle> {
    return this.apiService.post(`${this._resourceApi}`, newVehicle);
  }
}
