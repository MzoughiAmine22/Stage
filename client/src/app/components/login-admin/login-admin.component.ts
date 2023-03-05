import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { Admin } from 'src/app/classes/admin';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router) { }
  loginForm!:FormGroup;
  creds!:Admin[];
  tentative:number=0;
  getAdmin()
  {
    axios.get("http://localhost:5000/getAdmin").then((response)=>{
      this.creds=response.data;
    });
        
  }
  login()
  {
    this.getAdmin();
    if(this.creds[0].mail===this.loginForm.value.mail && this.creds[0].password===this.loginForm.value.password)
    {
      alert("Login Success");
        localStorage.setItem('userType','admin');
        this.loginForm.reset(); 
        this.router.navigate(['admin']);
        this.tentative=0;
    }
    else
    {
      alert("Login Invalid")
      this.loginForm.reset();
      this.tentative++;
    }
    if(this.tentative==3)
    {
      this.router.navigate(['landing']);
    }
  }
  ngOnInit(): void 
  {
    this.loginForm=this.fb.nonNullable.group({
      mail:['',Validators.required],
      password:['',Validators.required]   
    });
    
  }

}
