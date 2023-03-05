import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Formateur } from 'src/app/classes/formateur';
import { Formation } from 'src/app/classes/formation';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  formations!:Formation[];
  constructor(private cartService:CartService) { }
  formateurs!:Formateur[];
  searchKey:string="";
  searchTerm:string="";
  search(event:any)
  {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.searchKey=this.searchTerm;
  }
  getFormations()
  {
    axios.get("http://localhost:5000/getFormations").then((response)=>{
      this.formations=response.data;

    });
  }
  getFormateur()
  {
      axios.get(`http://localhost:5000/getFormateursDetails`).then((response)=>{
        this.formateurs=response.data;
        
      })
  }
  ngOnInit(): void {
    this.getFormations();
    this.getFormateur();
  }
  addtocart(item:any)
    {
      this.cartService.addtoCart(item);
      alert('Product Added To Cart');
    }
    
  pageUp()
  {
    window.scroll(0,0);
  }
}
