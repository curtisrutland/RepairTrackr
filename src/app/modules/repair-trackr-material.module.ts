import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';

const m = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule
];

@NgModule({
  imports: [...m],
  exports: [...m],
})
export class RepairTrackrMaterialModule { }