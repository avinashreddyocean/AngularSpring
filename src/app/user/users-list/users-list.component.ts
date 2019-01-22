import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [UserService]
})
export class UsersListComponent implements OnInit {
  private users: User[];
  constructor(private router: Router,
   private UserService: UserService) { }
  ngOnInit() {
   this.getAllUsers();
   }
  getAllUsers() {
   this.UserService.findAll().then(
   users => {
   this.users = users;
   },
   err => {
   console.log(err);
   }
  );
   }
  createUser() {
   let firstName = (<HTMLInputElement>document.getElementById('firstName')).value;
   let phoneNo = (<HTMLInputElement>document.getElementById('phonenumber')).value;
   console.log(phoneNo);
   let email = (<HTMLInputElement>document.getElementById('emailAddress')).value;
   let lastName = (<HTMLInputElement>document.getElementById('lastName')).value;
   let role = (<HTMLInputElement>document.getElementById('role')).value;

   let user = new User("0", firstName,lastName,email,phoneNo,role);
   this.UserService.createUser(user).then(
   users => {
   this.users = users;
   },
   err => {
   console.log(err);
   }
   );
   }
  deleteUser(user: User) {
   this.UserService.deleteUserById(user.id).then(
   users => {
   this.users = users;
   },
   err => {
   console.log(err);
   }
   );
   }
}
