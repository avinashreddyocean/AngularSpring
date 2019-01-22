import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/app/users';
  constructor(private http: Http) {
   }
  findAll(): Promise<Array<User>> {
   return this.http.get(this.apiUrl)
   .toPromise()
   .then(response => response.json() as User[])
   .catch(this.handleError);
   }
  createUser(user: User): Promise<Array<User>> {
   let userHeaders = new Headers({ 'Content-Type': 'application/json' });
   console.log(user);
   return this.http.post(this.apiUrl, JSON.stringify(user), { headers: userHeaders })
   .toPromise()
   .then(response => response.json() as User[])
   .catch(this.handleError);
   }
  deleteUserById(id: string): Promise<Array<User>> {
   const url = `${this.apiUrl}/${id}`;
   return this.http.delete(url)
   .toPromise()
   .then(response => response.json() as User[])
   .catch(this.handleError);
   }
  private handleError(error: any): Promise<Array<any>> {
   console.error('An error occurred', error);
   return Promise.reject(error.message || error);
   }
}
