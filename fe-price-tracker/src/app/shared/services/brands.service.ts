import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/core/models/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  private http = inject(HttpClient);

  constructor() { }

  getAllBrands(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(environment.beHost + '/brands');
  }

  createBrand(data: { name: string }): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(environment.beHost + '/brands', data);
  }
}
