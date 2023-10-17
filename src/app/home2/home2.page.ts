import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../services/annonces.service';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  public categories = [];
  public featuredProducts = [];
  public bestSellProducts = [];

  constructor(
    private annoncesService: AnnoncesService
  ) { }

  ngOnInit() {}
   
}
