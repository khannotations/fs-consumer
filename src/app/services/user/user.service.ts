import { User } from './../../models/user/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser: User;

  constructor() { }

  login(email: string, password: string): User {
    let user = this.getAllUsers().filter(user => user.email == email)[0];
    console.log(email, user, this.getAllUsers());
    if(user && user.password == password) {
      this.currentUser = user;
    }
    return user;
  }

  getAllUsers() {
    return [
      new User(
        "Rafi",
        "Khan",
        "rafi@ixperience.co.za",
        "rafi"
      ),
      new User(
        "Dani",
        "Ohanyon",
        "dani@ixperience.co.za",
        "dani"
      )
    ]
  }
}
