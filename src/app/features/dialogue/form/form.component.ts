import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dialogue } from 'src/app/core/models/dialogue';
import { DialoguesService } from 'src/app/core/services/dialogues/dialogues.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formDialogue: FormGroup;
  formTypeLabel: string;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private dialogueService: DialoguesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.formDialogue = this.formBuilder.group({
      id: '',
      idEnemy: '',
      idNpc: '',
      dialogue: ''
    });

    const hasId = Boolean(this.activatedRoute.snapshot.params.id)

    this.formTypeLabel = hasId ? 'Atualizar' : 'Cancelar';
    }

    submit(event: Dialogue): void{
      this.dialogueService.upsert(event).subscribe(() => {
        this.router.navigate(['..'], { relativeTo: this.activatedRoute });
      });
    }

}
