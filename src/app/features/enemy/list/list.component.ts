import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enemy } from 'src/app/core/models/enemy';
import { EnemiesService } from 'src/app/core/services/enemies/enemies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  enemy: Enemy[] = [];
  headers: string[] = ['Id', 'Health', 'Attack', 'Defense', "Name", "Description", "XpWhenKilled", "Level", "Actions"];


      constructor(private enemiesService: EnemiesService, private router: Router, private activatedRoute: ActivatedRoute) { }

      ngOnInit(): void {}

      deleteEnemy(event): void {
        this.enemiesService.delete(event.id).subscribe(() => {
          this.enemiesService.all().subscribe(event.callback);
      });
    }

    editEnemy(id: number) {
      this.router.navigate([id], { relativeTo: this.activatedRoute });
    }

    }
