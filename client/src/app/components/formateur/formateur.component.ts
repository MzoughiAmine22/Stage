import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import axios from 'axios';
import { Formateur } from 'src/app/classes/formateur';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DialogFComponent } from '../dialog-f/dialog-f.component';
@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age','surName','adr','mail','phoneNum','action'];
  dataSource!: MatTableDataSource<Formateur>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  formateurs!:Formateur[];
  showFiller =false;
  constructor(private dialog:MatDialog) { }
  getFormateurs()
  {
    axios.get("http://localhost:5000/getFormateurs").then((response)=>{
        this.formateurs=response.data; 
        this.dataSource = new MatTableDataSource(response.data),
      this.dataSource.paginator=this.paginator,
      this.dataSource.sort = this.sort
    });
    
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editFormateur(row:any)
  {
    this.dialog.open(DialogFComponent,{width:"50%",height:"80%",data:row}).afterClosed().subscribe(result =>
      {
        if(result=='update')
        {
          this.getFormateurs();
        }
      });
  }
  deleteFormateur(id:number)
  {
    const dialogRef = this.dialog.open(ConfirmationComponent,{width:"400px",height:"auto"});
    dialogRef.afterClosed().subscribe(result=>{
      if(result == true)
      {
        axios.delete(`http://localhost:5000/deleteFormateur/${id}`).then((response)=>{
      this.formateurs.filter((val)=>{
        return val.id == id;
      })
    })
      }
    })
    
  }
  ngOnInit(): void {
    this.getFormateurs();
  }

}
