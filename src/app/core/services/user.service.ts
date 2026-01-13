import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // constructor() { }

  // public score: BehaviorSubject<number> = new BehaviorSubject(0);
  // public scoreSignal = signal(0);

  // nextScore(): void {
  //   const currentScore = this.score.getValue();
  //   this.score.next(currentScore + 1);
  //   this.scoreSignal.update((value) => value + 1);
  // }
  /**
   * Checks if a user is logged in.
   * @returns true if a user is logged in, false otherwise.
   */
  userLoggedIn(): boolean {
    return !!localStorage.getItem('userData');
  }


  /**
   * Gets the current user's name.
   * @returns The current user's name, or null if not logged in.
   */
  currentUserName(): string | null {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData).name : null;
  }
}
