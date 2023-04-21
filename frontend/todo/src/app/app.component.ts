import { Component, inject } from '@angular/core';
import { IState, StateService, initial_state } from './state.service';
import { Subscription, Subscribable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <p>Welcome {{ state.fullName }}!</p>
    <button *ngIf="!state._id; signOut" (click)="signOut()">sign out</button>
    <ng-template #showsignbuttons>
      <button (click)="goToSignUp()">Sign Up</button>
      <button (click)="goToSignin()">sign in</button>
    </ng-template>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  state!: IState;

  private subscription!: Subscription;
  private stateService = inject(StateService);
  private router = inject(Router);

  constructor() {
    
    // this.subscription = this.stateService.getState().subscribe(state => {
    //   this.state = state
    // })
  }

  goToSignUp() {
    this.router.navigate(['', 'signup']);
  }
  goToSignin() {
    this.router.navigate(['', 'signin']);
  }

  signOut() {
    this.stateService.setState(initial_state);
    this.router.navigate(['', 'signin']);
  }
}
