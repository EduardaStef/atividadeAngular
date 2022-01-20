import { Component, OnInit } from '@angular/core';
import { Npc } from 'src/app/core/models/npc';
import { NpcsService } from 'src/app/core/services/npcs/npcs.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  npc: Npc[] = [];
  headers: string[] = ['Id', 'Name', 'Description', 'Sprite', 'Actions'];


      constructor(private npcsService: NpcsService) { }

      ngOnInit(): void {}

      deleteNpc(event): void {
        this.npcsService.delete(event.id).subscribe(() => {
          this.npcsService.all().subscribe(event.callback);
      });
    }

    }
