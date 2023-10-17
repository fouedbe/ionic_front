import { Component } from '@angular/core';
import { AnnoncesService } from '../services/annonces.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dataArray:any=[]
  searchText:any;
  imagedata:any
  public categories = [];
  public featuredProducts = [];
  public bestSellProducts = [];


  constructor(private annoncesService: AnnoncesService,private http:HttpClient) {
    this.annoncesService.getAnnonces().subscribe({
      next:(data)=>{
      console.log(data)
      this.dataArray=data
     /* const apiurl="http://localhost:3000/api/getImage/annonca.jpg";
      this.http.get(apiurl).subscribe((data:any)=>{
      this.imagedata=data.imagedata;
      });*/
    },
    error: (err) => {
  console.log(err);
  },
  });
  }

  ngOnInit() {
  
  }

}
