import { Component, OnInit } from '@angular/core';
import { Album } from 'app/shared/models';
import { AlbumService } from 'app/shared/services/api';
import { SwalService } from 'app/shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
// main object
artist:Album;

//array list 
artistList: Album[]=[];


isEdit : boolean = false;
index : number
editObj :Album = new Album();
formSubmitted: boolean= false;
data=[];
pagenumber=0;
pageTitle=1;
  constructor( private AlbumServices: AlbumService ,
    private swalService: SwalService,
    private route: Router,) { }

  ngOnInit(): void {
    this.getAllData();
  }

 // get all data of annonce
   getAllData(){
  this.AlbumServices.getAll(String(this.pagenumber),'100').subscribe(res =>{
      this.data = []
      let a  = (res.result.length /100)+1;
      
      for (let index = 1; index <= a; index++) {
         this.data.push(index)  }

      this.artistList = res.result.map(item =>{
      item.image = 'http://188.225.184.108:9091/'+item.image
      return item
    })
    
  })

}
navigate(item){
  this.pagenumber= item -1
  this.pageTitle = item;
  this.getAllData();
}

delete(  index: number ) {
  this.editObj = {...this.artistList[index]}
  this.index = index;
  this.swalService.showRemoveConfirmation(index).then(
    result => {
      if (result.value) {
        this.AlbumServices.delete(this.editObj.id).subscribe(
          res => {
            this.swalService.Notifier('تم حذف البيانات ');
            this.getAllData();

          },
          err => {
            let errorMessage = err.message || ' خطأ اثناء الحذف  ';
            this.swalService.NotifierError(errorMessage)
          }
        )
      }
    }
  );
}



navigateToEdit(id: number) {
  this.route.navigate([`./pages/album/edit/${id}`], { queryParams: { isAdd: false } })
}
navigateToAdd() {
  this.route.navigate([`./pages/album/edit/false`], { queryParams: { isAdd: true } })
}
}
