import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-c',
  templateUrl: './dialog-c.component.html',
  styleUrls: ['./dialog-c.component.css']
})
export class DialogCComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogCComponent>) { }

  ngOnInit(): void {
  }
  confirm(){
  
   this.dialogRef.close(true);
  }
  close(){
    this.dialogRef.close();
  }
}
