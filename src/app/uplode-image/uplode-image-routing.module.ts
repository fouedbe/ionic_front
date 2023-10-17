import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UplodeImagePage } from './uplode-image.page';

const routes: Routes = [
  {
    path: '',
    component: UplodeImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UplodeImagePageRoutingModule {}
