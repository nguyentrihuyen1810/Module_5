import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../data/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  URL = 'http://localhost:3000/category';

  constructor(private http: HttpClient) {}

  getAllType(): Observable<Category[]>  {
    return this.http.get<Category[]>(this.URL);
  }

  findByName(nameSearch: string) {
    return this.http.get(this.URL + '?name_like=' + nameSearch );
  }
}
