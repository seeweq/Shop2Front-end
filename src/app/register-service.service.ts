import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  private url = 'http://localhost:8080/api/registering';
  constructor(private http: HttpClient) { }




 RegisterTheUser(user:any):Observable<any> {
   if (user != null) {
      this.http.get(this.url);
   }else {
     console.log("can't add null user on database")
   }
   return user;
 }
}
