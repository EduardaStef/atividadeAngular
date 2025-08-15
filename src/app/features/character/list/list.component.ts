import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/core/models/character';
import { CharactersService } from 'src/app/core/services/characters/characters.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  character: Character[] = [];
  headers: string[] = ['Id', 'Name', 'Health', 'Attack', "Defense", "Level", "Xp", "Actions"];


      constructor(private characterService: CharactersService, private router: Router, private activatedRoute: ActivatedRoute) { }

      ngOnInit(): void {}

      deleteCharacter(event): void {
        this.characterService.delete(event.id).subscribe(() => {
          this.characterService.all().subscribe(event.callback);
      });
    }


    }
