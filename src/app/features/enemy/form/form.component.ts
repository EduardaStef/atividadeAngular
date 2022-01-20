import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Enemy } from 'src/app/core/models/enemy';
import { EnemiesService } from 'src/app/core/services/enemies/enemies.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formEnemy: FormGroup;
  formTypeLabel: string;

  constructor(private router: Router,
     private formBuilder: FormBuilder,
     private enemiesService: EnemiesService,
     private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.formEnemy = this.formBuilder.group({
      id: '',
      health: '',
      attack: '',
      defense: '',
      name: '',
      description: '',
      xpWhenKilled: '',
      level: '',
      maxHealth: ''
    });

    const hasId = Boolean(this.activatedRoute.snapshot.params.id)

    this.formTypeLabel = hasId ? 'Atualizar' : 'Cancelar';
  }

  submit(event: Enemy): void {
    this.enemiesService.upsert(event).subscribe(() => {
      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    });
  }

}
