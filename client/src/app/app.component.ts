import { Component,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){}
  hide4()
  {
    if(localStorage.getItem('userType')=='admin')
    {
      return false;
    }
    else if(this.router.url==='/adminLog' || this.router.url==='/adminPasschange' || this.router.url==='/signup' || this.router.url==='/login')
    {
      return false;
    }
    return true;
  }
  ngOnInit(): void 
  {
    localStorage.clear();
  }
  title = 'sujetStage';
}
