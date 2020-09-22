import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { AlbumListComponent } from './album/album-list.component';
import { AlbumAddEditComponent } from './album-add-edit/album-add-edit.component';


@NgModule({
  declarations: [
AlbumComponent,
AlbumListComponent,
AlbumAddEditComponent
 
],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    FormsModule,
    SharedModule,
 


  ]
})
export class AlbumModule { }
