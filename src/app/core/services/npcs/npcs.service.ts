import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Npc } from '../../models/npc';

@Injectable({
  providedIn: 'root'
})
export class NpcsService {
  private npcs = new Subject<Npc>()

  private baseUrl = `${environment.baseUrl}/npc`;

    constructor(private http: HttpClient) { }

    all() {
      return this.http.get<Npc[]>(this.baseUrl);
    }

    getOne(id: number) {
      return this.http.get<Npc>(`${this.baseUrl}/${id}`);
    }

    upsert(npc: Npc) {
      if(npc.id){
        return this.http.patch(`${this.baseUrl}/${npc.id}`, npc);
      } else {
        return this.http.post<Npc>(this.baseUrl, npc);
      }
    }

    setNpc(npc: Npc) {
      this.npcs.next(npc);
    }

    delete(id: number): Observable<unknown> {
      return this.http.delete(`${this.baseUrl}/${id}`);
    }
  }
