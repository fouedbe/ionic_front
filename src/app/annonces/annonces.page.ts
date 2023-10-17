import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../services/annonces.service';
import { Annonce } from '../models/annonce';
import { Router } from '@angular/router';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.page.html',
  styleUrls: ['./annonces.page.scss'],
})
export class AnnoncesPage implements OnInit {
  annonces: Annonce[] = [];
  dataannonce={
    title:'',
   
    description:'',
    image:File,
    prix:0,
    id:'',
  }
  url:any
  imageFile: any;
  onFileSelected(event: any){
   /* console.log(event.target?.files[0])
    this.imageFile = event.target.files[0];*/
    if(event.target.files){
      var reader= new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }
  myForm=new FormGroup({
   
    title:new FormControl(),

    description:new FormControl(),

    prix:new FormControl(),

    image:new FormControl(File),

  })
  constructor(private annoncesService: AnnoncesService,private router: Router) {}

  ngOnInit() {
   
  }
 
 
  add(f:any){
    let data=f.value
    // console.log(data)
    this.annoncesService.addannonce(data).subscribe({
      next: (data) => {
        console.log(data);
      this.router.navigateByUrl('/home');
  
 
     },
     error: (err) => {
  console.log(err);
   },
   });

  
}
/*
sendData(){


   let formData=new FormData();
  
  formData.append("title" ,this.myForm.value.title)
  
  formData.append("description" ,this.myForm.value.description)
    formData.append("prix" ,this.myForm.value.prix)
    formData.append("image" ,this.imageFile)
   

 this.annoncesService.addannonce(formData).subscribe({
  next:(data:any)=>{
  console.log(data);
  this.router.navigateByUrl('/home');
 },
 error: (err) => {
console.log(err);
},
});
}
*/
}



