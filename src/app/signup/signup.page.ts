import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../services/annonces.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private annoncesService: AnnoncesService,private router: Router) { }

  ngOnInit() {
  }
  register(f:any){
    let data=f.value
    
    this.annoncesService.register(data).subscribe({
     next: (data) =>{  this.router.navigateByUrl('/login');
      
      console.log(data)
    },
    error: (err) => {
 console.log(err);
  },
  });






  }
}
