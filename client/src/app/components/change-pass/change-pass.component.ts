import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { Admin } from 'src/app/classes/admin';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router) { }
  form!:FormGroup;
  creds!:Admin[];
  getAdmin()
  {
    axios.get("http://localhost:5000/getAdmin").then((response)=>{
      this.creds=response.data;
    });
        
  }
  changePass()
  {
    this.getAdmin();
    if(this.creds[0].password===this.form.value.oldpass)
    {
      axios.put("http://localhost:5000/updateAdminPassword",{
        id:this.creds[0].id,
        password:this.form.value.newpass
      }).then((response)=>{
        console.log(response);
      })
      alert("Password Changed");
        this.form.reset(); 
        this.router.navigate(['adminLog']);
    }
    else
    {
      alert("Invalid Old Password");
      this.form.reset();
    }
  }
  ngOnInit(): void 
  {
    this.form=this.fb.nonNullable.group({
      oldpass:['',Validators.required],
      newpass:['',Validators.required]   
    });
    
  }
}
