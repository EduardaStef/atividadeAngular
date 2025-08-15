import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/core/models/animal';
import { AnimalsService } from 'src/app/core/services/animals/animals.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  animals: Animal[] = [];
  headers: string[] = ['Id', 'Specie', 'Level', 'XpWhenKilled', "Attack", "Defense", "Health", "Actions"];


    constructor(private animalsService: AnimalsService, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {}

    deleteAnimal(event): void {
      this.animalsService.delete(event.id).subscribe(() => {
        this.animalsService.all().subscribe(event.callback);
    });
  }


  }
