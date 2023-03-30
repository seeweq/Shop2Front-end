import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  private url = 'http://localhost:8080/api/registering';
  constructor(private http: HttpClient) { }


 registerTheUser(user:any):Observable<any> {
   if (user != null) {
      return this.http.post(this.url,user);

   }else {
     console.log("can't add null user on database")
   }
   return user
 }
}
