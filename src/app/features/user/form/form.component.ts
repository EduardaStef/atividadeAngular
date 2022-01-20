import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formUser: FormGroup;
  formTypeLabel: string;

  constructor(private router: Router,
     private formBuilder: FormBuilder,
     private usersService: UsersService,
     private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.formUser = this.formBuilder.group({
      id: '',
      username: '',
      userPassword: '',
      bio: '',
      imageUrl: '',
      coins: ''
    });

    const hasId = Boolean(this.activatedRoute.snapshot.params.id)

    this.formTypeLabel = hasId ? 'Atualizar' : 'Cancelar';
  }

  submit(event: User): void {
    this.usersService.upsert(event).subscribe(() => {
      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    });
  }

}
