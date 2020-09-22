import { Component, OnInit  } from '@angular/core';
import { SwalService } from 'app/shared/services';
import { User } from 'app/shared/models';
import { UsersService } from 'app/shared/services/api';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

user: User;
UserList: User[]=[]
  constructor(private swalService: SwalService,
    private userServices: UsersService


  ) {


  }


  ngOnInit(): void {
 this.user = new User()

 

  }
  // open modal
  openAddModal(){


  }
  // getuser
  GetUser(){
    this.userServices.getAll().subscribe(
      res=>{
        this.UserList = res
      }
    )
  }

}






