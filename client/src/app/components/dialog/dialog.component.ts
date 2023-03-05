import { Component, Inject, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import axios from 'axios';
import { Formateur } from 'src/app/classes/formateur';
import { Formation } from 'src/app/classes/formation';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  formationForm!:FormGroup;
  buttonAction:string = "Save";
  titleName:string='ADD'
  formateur!:Formateur[];
  formation!:Formation;
  ddd!:Formateur;
  constructor(private fb:FormBuilder,private dialogRef: MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) private editData :any) { }
  

  updateFormation()
  {
      this.formation=this.formationForm.value;
      axios.put("http://localhost:5000/updateFormation",{
        name:this.formationForm.value.name,
        duration:this.formationForm.value.duration,
        date:this.formationForm.value.date,
        formateur:this.formationForm.value.formateur,
        id:this.editData.id}).then((response)=>{
        this.dialogRef.close('update');
      })
  }


  getFormateur()
  {
    axios.get("http://localhost:5000/getFormateursDetails").then((response)=>{
      this.formateur=response.data; 
  });
  }

  addFormation()
  {
    if(!this.editData)
    {
    axios.post("http://localhost:5000/createFormation",
    {
      name:this.formationForm.value.name,
      date:this.formationForm.value.date,
      duration:this.formationForm.value.duration,
      formateur:this.formationForm.value.formateur,
    }).then((response)=>{
      console.log(response);
      this.formateur.push(response.data);
    })
    }
    else
    {
      this.updateFormation();
    }
  }
  ngOnInit(): void {
    this.formationForm=this.fb.nonNullable.group({
      name:[],
      date:[],
      duration:[],
      formateur:[], 
    });
    this.getFormateur();

    if(this.editData)
    {
      this.titleName="MODIFY";
      this.buttonAction="Update";
      this.formationForm.controls['name'].setValue(this.editData.name);
      this.formationForm.controls['duration'].setValue(this.editData.duration);
      this.formationForm.controls['date'].setValue(this.editData.date);
      this.formationForm.controls['formateur'].setValue(this.editData.formateur);
    }
  }
  
}
