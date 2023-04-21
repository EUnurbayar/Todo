import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  signin(data: IUser){
    return this.http.post<{success: true, data: string}>(environment.HTTP_SERVER + '/users/signin', data);
  };

  signup(user: IUser){
    return this.http.post<{success: true, data: IUser}>(environment.HTTP_SERVER + 'users/signup', user);
  };

  signout(){

  }
}


export interface IUser{
  _id: string,
  fullname: string,
  email: string,
  password: string
}
