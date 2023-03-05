import { Component, OnInit, ViewChild } from '@angular/core';
import axios from 'axios';
import { Formateur } from 'src/app/classes/formateur';
import { Formation } from 'src/app/classes/formation';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  displayedColumns: string[] = ['name', 'duration','date','formateur','action'];
  dataSource!: MatTableDataSource<Formateur>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  showFiller =false;
  constructor(private dialog:MatDialog) { }
  formations!:Formation[];
  formateurs!:Formateur[];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getFormateur()
  {
      axios.get(`http://localhost:5000/getFormateursDetails`).then((response)=>{
        this.formateurs=response.data;
       
      })
  }

  editFormation(row:any)
  {
    this.dialog.open(DialogComponent,{width:"50%",height:"80%",data:row}).afterClosed().subscribe(result =>
      {
        if(result=='update')
        {
          this.getFormation();
        }
      });
  }

  deleteFormation(id:number)
  {
    const dialogRef = this.dialog.open(ConfirmationComponent,{width:"400px",height:"auto"});
    dialogRef.afterClosed().subscribe(result=>{
      if(result == true)
      {
        axios.delete(`http://localhost:5000/deleteFormation/${id}`).then((response)=>{
      this.formations.filter((val)=>{
        return val.id == id;
      })
    })
      }
    })
    
  }
  getFormation()
  {
    axios.get("http://localhost:5000/getFormations").then((response)=>{
      this.formations=response.data; 
      this.dataSource = new MatTableDataSource(response.data),
      this.dataSource.paginator=this.paginator,
      this.dataSource.sort = this.sort
  });
  }


  ngOnInit(): void {
    this.getFormation();
    this.getFormateur();
  }

}
