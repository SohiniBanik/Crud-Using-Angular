import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Output() userSubmitted = new EventEmitter<any>();
  @Output() formCancelled = new EventEmitter<any>();

  newUser: any = {};

  submitForm(){
    this.userSubmitted.emit({ ...this.newUser });
    this.clearForm();
  }

  cancelForm(){
    this.clearForm();
    this.formCancelled.emit();
  }

  clearForm(){
    this.newUser = {};
  }

}
