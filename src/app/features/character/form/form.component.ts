import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/core/models/character';
import { CharactersService } from 'src/app/core/services/characters/characters.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
formCharacter: FormGroup;
formTypeLabel: string;

  constructor(private router: Router,
    private characterService: CharactersService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formCharacter = this.formBuilder.group({
      id: '',
      name: '',
      health: '',
      attack: '',
      defense: '',
      level: '',
      xp: ''
    });

    const hasId = Boolean(this.activatedRoute.snapshot.params.id)

    this.formTypeLabel = hasId ? 'Atualizar' : 'Cancelar';

  }

  submit(event: Character): void{
    this.characterService.upsert(event).subscribe(() => {
      this.router.navigate(['..'], { relativeTo: this.activatedRoute })
    })
  }

}
