import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../services/annonces.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  afficherDetails: boolean = false;
  dataArray:any=[]
  datauser:any=[]
  isAlertOpen = false;
  selectedFile: File | null = null;
  imgSrc:any
  dataannonce={
    title:'',
    description:'',
    image:'',
    prix:'',
    id:'',
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  public alertButtons = ['OK'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete(dataArray._id)',
      },
    },
    {
      text: 'update',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  constructor(private annoncesService: AnnoncesService,private router: Router) { 
    this.annoncesService.getalluser().subscribe({
      next:(data)=>{
      console.log(data)
      this.datauser=data
    },
    error: (err) => {
 console.log(err);
  },
  });
  this.annoncesService.getAnnonces().subscribe({
    next:(data)=>{
    console.log(data)
    this.dataArray=data
    this.imgSrc=this.dataArray.image
  },
  error: (err) => {
console.log(err);
},
});
    

  }

  ngOnInit() {
  }
  affich(){
    this.afficherDetails = !this.afficherDetails;
  }


  delete(id:any){
    this.annoncesService.deleteProduct(id).subscribe(
      res=>{
        console.log(res);
        this.ngOnInit();
      },
      err=>{
        console.log(err);
      }
    )
  }
  
  getdata(title:string,description:string,prix:string,image:string,id:any){
    
    this.dataannonce.title=title
    this.dataannonce.description=description
    this.dataannonce.prix=prix
    this.dataannonce.image=image
    this.dataannonce.id=id
    console.log(this.dataannonce)

  }
  updatenews(f:any){
   let data=f.value
    this.annoncesService.updateannonce(this.dataannonce.id,data).subscribe({
      next:(res)=>
      {
     
     console.log(res)


      },
      error: (err) => {
    console.log(err);
    },
    });
   
  }
}
