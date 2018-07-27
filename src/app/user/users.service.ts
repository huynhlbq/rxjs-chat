import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';


/**
 * UserService manages our current user
 */
@Injectable()
export class UsersService {
  // `currentUser` contains the current user
  // You can think of a Subject as a “read/write” stream
  // messages are published immediately, a new subscriber risks missing the latest value of the stream.
  // BehaviourSubject stores the last value. Meaning that any subscriber to the stream will receive the latest value.
  // This is great for us because it means that any part of our application can subscribe to the
  // UsersService.currentUser stream and immediately know who the current user is
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }
}

export const userServiceInjectables: Array<any> = [
  UsersService
];
