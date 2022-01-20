import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users = new Subject<User>();

  private baseUrl = `${environment.baseUrl}/user`

  constructor(private http: HttpClient) { }


  setUser(user: User) {
    this.users.next(user);
  }

  all(){
    return this.http.get<User[]>(this.baseUrl);
  }

  getOne(id: number) {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  upsert(user: User) {
    if(user.id) {
      return this.http.patch(`${this.baseUrl}/${user.id}`, user);
    } else {
      return this.http.post<User>(this.baseUrl, user);
    }
  }

  delete(id: number): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

