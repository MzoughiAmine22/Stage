import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import * as bcrypt from 'bcryptjs';
import { Users } from 'src/app/classes/users';
@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router) { }
  loginForm!:FormGroup;
  login()
  {
    var mail =this.loginForm.value.mail;
    var password=this.loginForm.value.password;
    let creds:Users[];
    axios.post("http://localhost:5000/userLogIn",{
      mail:mail
    }).then(async (response)=>{
      creds=response.data;
      const ValidPass = await bcrypt.compare(password,creds[0].password);
      if(ValidPass)
      {
        alert("Login Success");
        localStorage.setItem('userType','user');
        localStorage.setItem("id",creds[0].id);
        this.loginForm.reset(); 
        this.router.navigate(['/landing']);
      }
      else
      {
        alert("Login Failed");
        this.loginForm.reset();
      }
        
    });
  }
  ngOnInit(): void 
  {
    this.loginForm=this.fb.nonNullable.group({
      mail:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:['',Validators.required]   
    });
  }

  get mail()
  {
    return this.loginForm.get('mail');
  }

  get password()
  {
    return this.loginForm.get('password');
  }
  isValidPattern(){
    return this.loginForm.get('mail')?.errors?.['pattern']
    && this.loginForm.controls['mail'].touched;
    }
  

}
