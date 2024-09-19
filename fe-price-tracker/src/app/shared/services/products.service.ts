import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/core/models/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http = inject(HttpClient);

  constructor() { }

  getAllProducts (): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(environment.beHost + '/products');
  }

  getProduct(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(environment.beHost + '/products/product/' + id);
  }
}
