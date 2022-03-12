import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarLibComponent } from './avatar-lib.component';



@NgModule({
  declarations: [
    AvatarLibComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AvatarLibComponent
  ]
})
export class AvatarLibModule { }
