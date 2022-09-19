import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../model/Student';
import {Teacher} from '../model/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  URL = 'http://localhost:3000/teacher';

  constructor(private http: HttpClient) { }

  getAllType(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.URL);
  }
}
