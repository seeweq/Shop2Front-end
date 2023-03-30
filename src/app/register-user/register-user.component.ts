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
    firstname: new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(15)]),
    lastname: new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(15)]),
    password: new FormControl('', [Validators.required,Validators.maxLength(10), Validators.maxLength(15)])

  });


  // called when submit button is clicked
  onSubmit() {
    if (this.form.valid) {
      const user = this.form.value;
      this.registerServiceService.registerTheUser(user).subscribe((response: any) => {
        console.log(response)
      });
    }else{
      console.warn("invalid form data");
    }
  }
}
