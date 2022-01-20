import { Component, OnInit } from '@angular/core';
import { Dialogue } from 'src/app/core/models/dialogue';
import { DialoguesService } from 'src/app/core/services/dialogues/dialogues.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  dialogue: Dialogue[] = [];
  headers: string[] = ['Id', 'Npc', 'Enemy', 'Dialogue', "Actions"];


      constructor(private dialogueService: DialoguesService) { }

      ngOnInit(): void {}

      deleteDialogue(event): void {
        this.dialogueService.delete(event.id).subscribe(() => {
          this.dialogueService.all().subscribe(event.callback);
      });
    }

    }
