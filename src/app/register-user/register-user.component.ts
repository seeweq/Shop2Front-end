import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {RegisterServiceService} from "../register-service.service";

@Component(
  {
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit{


  constructor(private registerServiceService :RegisterServiceService) {
  }
  // capture user data from the form
  ngOnInit(){}
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstname: new FormControl('', [Validators.minLength(3), Validators.maxLength(15)]),
    lastname: new FormControl('', [Validators.minLength(3), Validators.maxLength(15)]),
    password: new FormControl('', [Validators.maxLength(10), Validators.maxLength(15)])

  });

  // });
  // get Firstname(): any {
  //   return this.form.get('firstname')?.value;
  // }
  // get Lastname(): any {
  //   return this.form.get('lastname')?.value;;
  // }
  //
  // get Password():any {
  //   return this.form.get('password')?.value;;
  // }
  // get Email(): any{
  //   return this.form.get('email')?.value;;
  // }



  // called when submit button is clicked
  onSubmit() {
   const user= this.form.value;
   console.log(user);
    this.registerServiceService.RegisterTheUser(user).subscribe((response:any) =>{
      console.log(response)
    });
  }
}
