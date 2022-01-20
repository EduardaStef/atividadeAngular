import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Npc } from 'src/app/core/models/npc';
import { NpcsService } from 'src/app/core/services/npcs/npcs.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formNpc: FormGroup;
  formTypeLabel: string;

  constructor(private router: Router,
     private formBuilder: FormBuilder,
     private npcService: NpcsService,
     private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.formNpc = this.formBuilder.group({
      id: '',
      name: '',
      description: ''
    });

    const hasId = Boolean(this.activatedRoute.snapshot.params.id)

    this.formTypeLabel = hasId ? 'Atualizar' : 'Cancelar';
  }

  submit(event: Npc): void {
    this.npcService.upsert(event).subscribe(() => {
      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    });
  }

}
