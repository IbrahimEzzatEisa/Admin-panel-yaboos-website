import { Injectable } from '@angular/core';
import { END_POINTS } from './globals/global-config';
import { HttpClient } from '@angular/common/http';
import { Songs, DataWithRanking } from 'app/shared/models';
import { Observable } from 'rxjs';

const API_URL = END_POINTS.songs;

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private http: HttpClient) { }

  create(model: Songs): Observable<Songs[]> {
    return this.http.post<Songs[]>(API_URL, model);
  }
  getAll(): Observable<Songs[]> {
    return this.http.get<Songs[]>(API_URL);
  }

  
  get(id: number): Observable<Songs[]> {
    return this.http.get<Songs[]>(API_URL + `/${id}`);
  }

  update( id: number ,model: Songs): Observable<DataWithRanking<Songs>> {
    return this.http.put<DataWithRanking<Songs>>(API_URL +`/${id}`, model);
  }
  delete(id): Observable<Songs>{
    return this.http.delete<Songs>(API_URL + `/${id}`);
  }

}
