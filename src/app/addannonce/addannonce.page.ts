import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../services/annonces.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addannonce',
  templateUrl: './addannonce.page.html',
  styleUrls: ['./addannonce.page.scss'],
})
export class AddannoncePage implements OnInit {
 
  
 
  onFileSelected(event: any){
    /* console.log(event.target?.files[0])
     this.imageFile = event.target.files[0];*/
     if(event.target.files){
       var reader= new FileReader();
       reader.readAsDataURL(event.target.files[0])
       reader.onload=(event:any)=>{
       
       }
     }
   }

  constructor(private annoncesService: AnnoncesService,private router: Router) {}

  ngOnInit() {
  /*  this.form = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),
      prix: new FormControl(null),
      image: new FormControl(null),
    });*/
  }
  /*
  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }*/
 
  add(f:any){
    let data=f.value
    // console.log(data)
    this.annoncesService.addannonce(data).subscribe({
      next: (data) => {
        console.log(data);
      this.router.navigateByUrl('/admin');
    
 
     },
     error: (err) => {
  console.log(err);
   },
   });

  
}
}
