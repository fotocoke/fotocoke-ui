import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(userId: number): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
