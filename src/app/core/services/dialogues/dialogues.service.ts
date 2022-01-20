import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dialogue } from '../../models/dialogue';

@Injectable({
  providedIn: 'root'
})
export class DialoguesService {
  private dialogues = new Subject<Dialogue>();

  private baseUrl = `${environment.baseUrl}/dialogue`;

  constructor(private http: HttpClient) { }

  setDialogue(dialogue: Dialogue) {
    this.dialogues.next(dialogue);
  }

  all(){
    return this.http.get<Dialogue[]>(this.baseUrl);
  }

  getOne(id: number) {
    return this.http.get<Dialogue>(`${this.baseUrl}/${id}`);
  }

  upsert(dialogue: Dialogue) {
    if(dialogue.id) {
      return this.http.patch(`${this.baseUrl}/${dialogue.id}`, dialogue);
    } else {
      return this.http.post<Dialogue>(this.baseUrl, dialogue);
    }
  }

  delete(id: number): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
