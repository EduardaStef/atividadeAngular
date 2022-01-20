import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterSprite } from 'src/app/core/models/character-sprite';
import { CharacterSpritesService } from 'src/app/core/services/character-sprites/character-sprites.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formCharacterSprite: FormGroup;
  formTypeLabel: string;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private characterSpriteService: CharacterSpritesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.formCharacterSprite = this.formBuilder.group({
      id: '',
      walkSideUrl: '',
      walkFrontUrl: '',
      walkBackUrl: '',
      staySideUrl: '',
      stayFrontUrl: '',
      stayBackUrl: ''
    });

    const hasId = Boolean(this.activatedRoute.snapshot.params.id)

    this.formTypeLabel = hasId ? 'Atualizar' : 'Cancelar';
  }

  submit(event: CharacterSprite): void {
    this.characterSpriteService.upsert(event).subscribe(() => {
      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    });
  }

}
