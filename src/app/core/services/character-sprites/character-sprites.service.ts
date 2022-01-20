import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CharacterSprite } from '../../models/character-sprite';

@Injectable({
  providedIn: 'root'
})
export class CharacterSpritesService {
  private sprite = new Subject<CharacterSprite>();

  private baseUrl = `${environment.baseUrl}/characterSprite`;

  constructor(private http: HttpClient) { }

  upsert(characterSprite: CharacterSprite) {
    if(characterSprite.id) {
      return this.http.patch(`${this.baseUrl}/${characterSprite.id}`, characterSprite);
    } else {
      return this.http.post<CharacterSprite>(this.baseUrl, characterSprite);
    }
  }

  all() {
    return this.http.get<CharacterSprite[]>(`${this.baseUrl}`);
  }

  getOne(id: number){
    return this.http.get<CharacterSprite>(`${this.baseUrl}/${id}`);
  }

  setCharacterSprite(characterSprite: CharacterSprite) {
    this.sprite.next(characterSprite);
  }

  delete(id: number): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
