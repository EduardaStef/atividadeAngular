import { Component, OnInit } from '@angular/core';
import { Enemy } from 'src/app/core/models/enemy';
import { EnemiesService } from 'src/app/core/services/enemies/enemies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  enemy: Enemy[] = [];
  headers: string[] = ['Id', 'Health', 'Attack', 'Defense', "Name", "Description", "XpWhenKilled", "Level", "Sprite", "MaxHealth", "Actions"];


      constructor(private enemiesService: EnemiesService) { }

      ngOnInit(): void {}

      deleteEnemy(event): void {
        this.enemiesService.delete(event.id).subscribe(() => {
          this.enemiesService.all().subscribe(event.callback);
      });
    }

    }
