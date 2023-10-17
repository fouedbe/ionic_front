import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../services/annonces.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  datatoken:any
  constructor(private annoncesService: AnnoncesService,private router: Router) { }
  isAdmin=Boolean;
  ngOnInit() {
  }
  login(f:any){
    let data=f.value
    
    this.annoncesService.login(data).subscribe({
      next:(data)=>{
        this.datatoken=data
      this.annoncesService.saveToken(this.datatoken.token)
      if(this.datatoken.isAdmin==true){
        this.router.navigateByUrl('/admin');
       } else{this.router.navigateByUrl('/home');
        console.log(data);}
     },
     error: (err) => {
  console.log(err);
   },
   });
 
     



    }

}
