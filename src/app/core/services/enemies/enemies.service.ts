import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Enemy } from '../../models/enemy';

@Injectable({
  providedIn: 'root'
})
export class EnemiesService {
private enemies = new Subject<Enemy>()

private baseUrl = `${environment.baseUrl}/enemy`;

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get<Enemy[]>(this.baseUrl);
  }

  getOne(id: number) {
    return this.http.get<Enemy>(`${this.baseUrl}/${id}`);
  }

  upsert(enemy: Enemy) {
    if(enemy.id){
      return this.http.patch(`${this.baseUrl}/${enemy.id}`, enemy);
    } else {
      return this.http.post<Enemy>(this.baseUrl, enemy);
    }
  }

  setEnemy(enemy: Enemy) {
    this.enemies.next(enemy);
  }

  delete(id: number): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
