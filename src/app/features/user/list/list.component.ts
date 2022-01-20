import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  user: User[] = [];
  headers: string[] = ['Id', 'Username', 'UserPassword', 'Bio', "ImageUrl", "Coins", "Actions"];


      constructor(private usersService: UsersService) { }

      ngOnInit(): void {}

      deleteUser(event): void {
        this.usersService.delete(event.id).subscribe(() => {
          this.usersService.all().subscribe(event.callback);
      });
    }

    }
