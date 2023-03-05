import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Formateur } from 'src/app/classes/formateur';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private dialog:MatDialog,private router:Router) { }
  openDialog()
  {
    const dialogRef=this.dialog.open(DialogComponent,{width:"50%",height:"80%"});
    dialogRef.afterClosed().subscribe();
  }
  ngOnInit(): void 
  {
    this.route();
  }
  logout()
  {
    localStorage.clear();
    this.router.navigate(['landing']);
  }


  route()
  {
    this.router.navigate(['admin/dash']);
  }
}
