import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UplodeImagePageRoutingModule } from './uplode-image-routing.module';

import { UplodeImagePage } from './uplode-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UplodeImagePageRoutingModule
  ],
  declarations: [UplodeImagePage]
})
export class UplodeImagePageModule {}
