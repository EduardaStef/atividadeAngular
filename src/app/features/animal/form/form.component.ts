import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/core/models/animal';
import { AnimalsService } from 'src/app/core/services/animals/animals.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formAnimal: FormGroup;
  formTypeLabel: string;

  constructor(private router: Router,
     private formBuilder: FormBuilder,
     private animalsService: AnimalsService,
     private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.formAnimal = this.formBuilder.group({
      id: '',
      specie: '',
      level: '',
      xpWhenKilled: '',
      attack: '',
      defense: '',
      health: '',
      paceful: '',
      maxHealth: ''
    });

    const hasId = Boolean(this.activatedRoute.snapshot.params.id)

    this.formTypeLabel = hasId ? 'Atualizar' : 'Cancelar';
  }

  submit(event: Animal): void {
    this.animalsService.upsert(event).subscribe(() => {
      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    });
  }

}
