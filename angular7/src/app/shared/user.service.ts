import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootURL ="http://localhost:3000/"
  constructor(private http: HttpClient) { }
  postUser(user){
    return this.http.post(this.rootURL+'register',user);
     
   }
   getalluser(){
     
    return this.http.get(this.rootURL+'allusers');
   }

   getUsersearch(id){
    return this.http.get(this.rootURL+ 'singleuser/'+id);
   }
   userUpdate(user){
    return this.http.post(this.rootURL+'update',user);
   }
  // postUser(user){
  //   // console.log("*****");
  //   // console.log(user);
  //   return this.http.post(environment.apiBaseUrl+`register`, user);
  //   // return this.http.post(environment.apiBaseUrl+'register',user);
  // }
  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + 'userProfile');
  }

  getProfileById(id) {
    return this.http.get(environment.apiBaseUrl + 'getProfile'+id);
    // let h = this.setHeader();
    // return this.http.get(this.serviceUrl + "getCompanyDetails/" + id, { headers: h })
    //   .map(res => res.json());
  }
}
