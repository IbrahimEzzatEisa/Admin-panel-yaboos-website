import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';

import { MusicsComponent } from './musics.component';
import { MusicsListComponent } from './musics/musics-list.component';
import { MusicsRoutingModule } from './musics-routing.module';



@NgModule({
  declarations: [
MusicsComponent,
MusicsListComponent

  
],
  imports: [
    CommonModule,
    MusicsRoutingModule,
   FormsModule,
    SharedModule,


  ]
})
export class MusicsModule { }
