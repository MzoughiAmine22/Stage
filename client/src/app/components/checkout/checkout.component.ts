import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogTComponent } from '../dialog-t/dialog-t.component';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  form!:FormGroup;
  constructor(private router:Router,private dialog:MatDialog,private fb:FormBuilder) { }
  checkout()
  {
    const dialogRef=this.dialog.open(DialogTComponent,{width:"400px",height:"auto"});
      dialogRef.afterClosed().subscribe(result=>{
        if(result)
        {
          this.router.navigate(['landing']);
        }
      })
  }
  ngOnInit(): void 
  {
    this.form=this.fb.nonNullable.group({
      cardHolderName:['',[Validators.required,Validators.pattern("^[A-Z][a-z]+( *([A-Z][a-z]+))*$")]],
      cardNumber:['',[Validators.required,Validators.pattern("[0-9]{16}")]],
      expiration:['',[Validators.required,Validators.pattern("[0-1][0-2]/202[3-9]")]],
      cvv:['',[Validators.required,Validators.pattern("[0-9][0-9][0-9]")]]
    })
  }

  get cardHolderName()
  {
    return this.form.get('cardHolderName');
  }

  get cardName()
  {
    return this.form.get('cardNumber');
  }

  get expiration()
  {
    return this.form.get('expiration');
  }

  get cvv()
  {
    return this.form.get('cvv');
  }

  isValidExp(){
    return this.form.get('expiration')?.errors?.['pattern']
    && this.form.controls['expiration'].touched;
    }

  isValidCvv()
  {
    return this.form.get('cvv')?.errors?.['pattern']
    && this.form.controls['cvv'].touched;
  }

  isValidCardNumber()
  {
    return this.form.get('cardNumber')?.errors?.['pattern']
    && this.form.controls['cardNumber'].touched;
  }
  isValidName()
  {
    return this.form.get('cardHolderName')?.errors?.['pattern']
    && this.form.controls['cardHolderName'].touched;
  }
}
