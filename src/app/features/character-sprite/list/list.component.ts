import { Component, OnInit } from '@angular/core';
import { CharacterSprite } from 'src/app/core/models/character-sprite';
import { CharacterSpritesService } from 'src/app/core/services/character-sprites/character-sprites.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  characterSprite: CharacterSprite[] = [];
  headers: string[] = ['Id', 'WalkSideUrl', 'WalkFrontUrl', 'WalkBackUrl', "StaySideUrl", "StayFrontUrl", "StayBackUrl", "Actions"];


      constructor(private characterSpriteService: CharacterSpritesService) { }

      ngOnInit(): void {}

      deleteCharacterSprite(event): void {
        this.characterSpriteService.delete(event.id).subscribe(() => {
          this.characterSpriteService.all().subscribe(event.callback);
      });
    }

    }
