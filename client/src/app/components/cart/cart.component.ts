import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Cart } from 'src/app/classes/cart';
import { CartService } from 'src/app/services/cart.service';
import { DialogCComponent } from '../dialog-c/dialog-c.component';
import { DialogTComponent } from '../dialog-t/dialog-t.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  grandTotal:number = 0;
  formations! : Cart[];
  constructor(private cartService:CartService,private router:Router,private dialog:MatDialog) { }


  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res =>{
      this.formations = res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }
  removeItem(item :Cart)
  {
    this.cartService.removeCartItem(item);
    this.grandTotal=this.grandTotal - item.duration*50;
  }
  emptycart()
  {
    this.cartService.removeAll();
  }

  

  checkout()
  {
    if(localStorage.getItem('userType')=='user')
    {
      /*const dialogRef=this.dialog.open(DialogTComponent,{width:"400px",height:"auto"});
      dialogRef.afterClosed().subscribe(result=>{
        if(result)
        {
          this.router.navigate(['cart/checkout']);
        }
      })
      this.emptycart();*/
      this.router.navigate(['cart/checkout']);
    }
    else
    {
    const dialogRef = this.dialog.open(DialogCComponent,{width:"400px",height:"auto"});
    dialogRef.afterClosed().subscribe(result=>{
      if(result == true)
      {
          this.router.navigate(['login']);
      }
      else
      {
        this.router.navigate(['/landing']);
      }
    })
      }  }

}
