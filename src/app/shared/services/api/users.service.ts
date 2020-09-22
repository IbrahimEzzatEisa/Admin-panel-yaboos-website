import { Injectable } from '@angular/core';
import { END_POINTS } from './globals/global-config';
import { HttpClient } from '@angular/common/http';
import { Songs, DataWithRanking, User } from 'app/shared/models';
import { Observable } from 'rxjs';

const API_URL = END_POINTS.users;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  create(model: User): Observable<User[]> {
    return this.http.post<User[]>(API_URL, model);
  }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(API_URL);
  }

  
  get(id: number): Observable<User[]> {
    return this.http.get<User[]>(API_URL + `/${id}`);
  }

  update( id: number ,model: User): Observable<DataWithRanking<User>> {
    return this.http.put<DataWithRanking<User>>(API_URL +`/${id}`, model);
  }
  delete(id): Observable<User>{
    return this.http.delete<User>(API_URL + `/${id}`);
  }
}
