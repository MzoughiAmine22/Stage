import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { UserDetails } from 'src/app/classes/user-details';
@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }
  id:number = 0;
  creds!:UserDetails[];
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.getUserId();
  }
  logoutuser()
  {
    localStorage.clear();
    this.router.navigate(['/landing']);
    this.id=0;
  }
  getUserId()
  {
    axios.post("http://localhost:5000/userID",{id:this.id}).then((response)=>{
      this.creds=response.data;
    })
  }
}
