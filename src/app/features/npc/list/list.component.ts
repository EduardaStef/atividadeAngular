import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Npc } from 'src/app/core/models/npc';
import { NpcsService } from 'src/app/core/services/npcs/npcs.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  npc: Npc[] = [];
  headers: string[] = ['Id', 'Name', 'Description', 'Actions'];


      constructor(private npcsService: NpcsService, private router: Router, private activatedRoute: ActivatedRoute) { }

      ngOnInit(): void {}

      deleteNpc(event): void {
        this.npcsService.delete(event.id).subscribe(() => {
          this.npcsService.all().subscribe(event.callback);
      });
    }

    editNpc(id: number) {
      this.router.navigate([id], { relativeTo: this.activatedRoute });
    }

    }
