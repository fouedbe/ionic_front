import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddannoncePageRoutingModule } from './addannonce-routing.module';

import { AddannoncePage } from './addannonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddannoncePageRoutingModule
  ],
  declarations: [AddannoncePage]
})
export class AddannoncePageModule {}
