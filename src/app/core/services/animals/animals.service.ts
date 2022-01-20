import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Animal } from '../../models/animal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  private animals = new Subject<Animal>();

  private baseUrl = `${environment.baseUrl}/animal`;

  constructor(private http: HttpClient) { }

  getOne(id: number) {
    return this.http.get<Animal[]>(`${this.baseUrl}/${id}`)
  }

  all() {
    return this.http.get<Animal[]>(this.baseUrl);
  }

  upsert(animal: Animal) {
      if(animal.id){
        return this.http.patch(`${this.baseUrl}/${animal.id}`, animal);
      } else {
        return this.http.post<Animal>(this.baseUrl, animal);
      }
  }

  setAnimal(animal: Animal){
    this.animals.next(animal);
  }
}

