import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss']
})
export class SettingsListComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

home(){
  this.router.navigate(['/pages/home']);

}


}
