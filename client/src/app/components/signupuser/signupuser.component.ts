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
      }).then(()=>{});
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
      age:['',[Validators.required,Validators.pattern("[1-9][0-9]")]],
      mail:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:['',[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]]   
    }); 
  }

  get fullname()
  {
    return this.signForm.get('fullname');
  }

  get age()
  {
    return this.signForm.get('age');
  }

  get mail()
  {
    return this.signForm.get('mail');
  }

  get password()
  {
    return this.signForm.get('password');
  }
  isValidPattern(){
    return this.signForm.get('mail')?.errors?.['pattern']
    && this.signForm.controls['mail'].touched;
    }
  isValidLenth()
  {
    return this.signForm.get('age')?.errors?.['pattern'] 
    && this.signForm.controls['age'].touched;
  }

  isValidPass()
  {
    return this.signForm.get('password')?.errors?.['pattern']
    && this.signForm.controls['password'].touched;
  }
}
