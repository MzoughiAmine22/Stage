import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  id:number=0;
  hide()
  {
    if(localStorage.getItem('userType')=='user')
    {
      return false;
    }
    return true;
  }
  hide2()
  {
    if(localStorage.getItem('userType')=='user')
    {
      return true;
    }
    return false;
  }
  hided()
  {
    localStorage.clear();
    return false;
  }
  set()
  {
    localStorage.clear();
  }
  ngOnInit(): void {
    this.id=Number(localStorage.getItem('id'));
  }
  
}
