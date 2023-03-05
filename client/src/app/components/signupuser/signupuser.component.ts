import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-signupuser',
  templateUrl: './signupuser.component.html',
  styleUrls: ['./signupuser.component.css']
})
export class SignupuserComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router) { }
  signForm!:FormGroup;
  signup()
  {
    if(this.signForm.valid)
    {
    axios.post("http://localhost:5000/userSignUp",{
      fullname:this.signForm.value.fullname,
      age:this.signForm.value.age,
      mail:this.signForm.value.mail,
      password:this.signForm.value.password,
      }).then((response)=>{});
      alert("Sign Up Success");
        this.signForm.reset(); 
        this.router.navigate(['login']);
    }
    else
    {
      alert("Sign Up Invalid")
      this.signForm.reset();
    }
  }
  ngOnInit(): void 
  {
    this.signForm=this.fb.nonNullable.group({
      fullname:['',Validators.required],
      age:['',Validators.required],
      mail:['',Validators.required],
      password:['',Validators.required]   
    });
    
  }

}
