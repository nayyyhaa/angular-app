import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {map,filter} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor() { 
      this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(8)])
    });
  }

  ngOnInit(): void {
  }

  signup(){
    console.log("uo");
  }
  login(){
    //observable throwing email & password 

    // //map - part of object
    // const mapObserver = this.loginForm.valueChanges.pipe(map(data => {
    //   return data.email;
    // }));

    //filter -fire only if condition is satisfied
    const mapObserver = this.loginForm.valueChanges.pipe(filter(data => {
      return data.email=="neha@gmail";
    }));
    mapObserver.subscribe(data => {
      console.log(data);
    })
  }
}
