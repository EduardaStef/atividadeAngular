import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/core/models/character';
import { CharactersService } from 'src/app/core/services/characters/characters.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  character: Character[] = [];
  headers: string[] = ['Id', 'Name', 'Health', 'Attack', "Defense", "Sprite", "Level", "Xp", "MaxHealth", "User", "Actions"];


      constructor(private characterService: CharactersService) { }

      ngOnInit(): void {}

      deleteCharacter(event): void {
        this.characterService.delete(event.id).subscribe(() => {
          this.characterService.all().subscribe(event.callback);
      });
    }

    }
