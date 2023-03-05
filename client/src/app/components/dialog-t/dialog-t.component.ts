import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-t',
  templateUrl: './dialog-t.component.html',
  styleUrls: ['./dialog-t.component.css']
})
export class DialogTComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogTComponent>) { }
  confirm(){
    this.dialogRef.close(true);
   }
  ngOnInit(): void {
  }

}
