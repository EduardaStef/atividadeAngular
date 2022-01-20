import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private characters = new Subject<Character>();

  private baseUrl = `${environment.baseUrl}/character`;

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get<Character[]>(this.baseUrl);
  }

  getOne(id: number) {
    return this.http.get<Character>(`${this.baseUrl}/${id}`);
  }

  upsert(character: Character) {
    if (character.id) {
      return this.http.patch<Character>(`${this.baseUrl}/${character.id}`, character);
    } else {
      return this.http.post<Character>(this.baseUrl, character);
    }
  }

  setCharacter(character: Character) {
    this.characters.next(character);
  }

  delete(id: number): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
