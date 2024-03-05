import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: User[] = [
    {lastName: "Banik", firstName: "Sohini", password: "1234"}
  ];
  showForm = false;

  toggleForm(){
    this.showForm = !this.showForm;
  }

  addUsers(newUser: User){
    this.users.push(newUser);
    this.toggleForm();
  }

  maskPassword(password: string): string {
    return '*'.repeat(password.length);
  }
}
