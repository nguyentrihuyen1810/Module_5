import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../model/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  API_URL = 'http://localhost:3000/student';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.API_URL);
  }

  create(student: Student) {
    return this.http.post<Student>(this.API_URL, student);
  }

  findById(id: number): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.API_URL}/${id}`);
  }

  delete(id: number) {
    return this.http.delete(this.API_URL + '/' + id);
  }

  update(id: number, student: Student) {
    return this.http.put(`${this.API_URL}/${id}`, student);
  }

  findByName(nameSearch: string) {
    return this.http.get(this.API_URL + '?name_like=' + nameSearch);
  }
}
