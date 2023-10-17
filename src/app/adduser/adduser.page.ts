import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../services/annonces.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.page.html',
  styleUrls: ['./adduser.page.scss'],
})
export class AdduserPage implements OnInit {

  constructor(private annoncesService: AnnoncesService,private router: Router) { }

  ngOnInit() {
  }
  register(f:any){
    let data=f.value
    
    this.annoncesService.register(data).subscribe({
     next: (data) =>{  this.router.navigateByUrl('/admin');
      
      console.log(data)
    },
    error: (err) => {
 console.log(err);
  },
  });






  }

}
