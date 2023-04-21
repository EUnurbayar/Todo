import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-signup',
  template: `
    
    <form [formGroup]="form" (ngSubmit)="signup()">
      <input placeholder="email">
      <input placeholder="fullname">
      <input placeholder="password">
      <button type="submit" [disabled]="!form.valid"]>sign up</button>
    </form>
  `,
  styles: [
  ]
})
export class SignupComponent {
  private userService = inject(UserService);

 form = inject(FormBuilder).nonNullable.group({
  email: ['', Validators.required],
  fullname: ['',Validators.required],
  password: ['', Validators.required]
 });

signup(){
  this.userService.signup
}
}
