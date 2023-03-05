import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import axios from 'axios';
import { Formateur } from 'src/app/classes/formateur';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-dialog-f',
  templateUrl: './dialog-f.component.html',
  styleUrls: ['./dialog-f.component.css']
})
export class DialogFComponent implements OnInit {

  fomateurForm!:FormGroup;
  buttonAction:string = "Save";
  formateur!:Formateur[];
  constructor(private fb:FormBuilder,private dialogRef: MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) private editData :any) { }
  getFormateur()
  {
    axios.get("http://localhost:5000/getFormateurs").then((response)=>{
      this.formateur=response.data; 
  });
  }
  addFormateur()
  {
    if(!this.editData){
    axios.post("http://localhost:5000/create",
    {
      name:this.fomateurForm.value.name,
      age:this.fomateurForm.value.age,
      surName:this.fomateurForm.value.surName,
      adr:this.fomateurForm.value.adr,
      mail:this.fomateurForm.value.mail,
      phoneNum:this.fomateurForm.value.phoneNum
    }).then()}
    else
    {
      this.updateFormateur();
      
    }
  }
  updateFormateur()
  {
  axios.put("http://localhost:5000/updateFormateur",
  {
    name:this.fomateurForm.value.name,
    age:this.fomateurForm.value.age,
    surName:this.fomateurForm.value.surName,
    adr:this.fomateurForm.value.adr,
    mail:this.fomateurForm.value.mail,
    phoneNum:this.fomateurForm.value.phoneNum,
    id:this.editData.id}).then((response)=>{
    this.dialogRef.close('update');
  })
  }
  ngOnInit(): void {
    this.fomateurForm=this.fb.nonNullable.group({
      name:[''],
      age:[],
      surName:[''],
      adr:[''],
      mail:[''],
      phoneNum:[]
    });
    if(this.editData)
    {
      this.buttonAction="Update";
      this.fomateurForm.controls['name'].setValue(this.editData.name);
      this.fomateurForm.controls['age'].setValue(this.editData.age);
      this.fomateurForm.controls['surName'].setValue(this.editData.surName);
      this.fomateurForm.controls['adr'].setValue(this.editData.adr);
      this.fomateurForm.controls['mail'].setValue(this.editData.mail);
      this.fomateurForm.controls['phoneNum'].setValue(this.editData.phoneNum);
  }

}
}