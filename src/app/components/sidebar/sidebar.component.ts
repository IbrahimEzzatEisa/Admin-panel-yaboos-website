import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}





export const ROUTES: RouteInfo[] = [
   { path: 'users', title: 'المستخدمين ',  icon:' supervisor_account', class: ' '   },
  { path: 'album', title: 'الألبوم ',  icon:' emoji_symbols', class: '' },
  { path: 'albumcategory', title: 'نوع الألبوم ',  icon:' emoji_symbols', class: '' },

  { path: 'annonce', title: 'أعلان ',  icon:' library_books', class: '' },
  { path: 'language', title: ' اللغة ',  icon:' language', class: '' },
  { path: 'stars', title: '   الفنان ',  icon:' settings_voice    ', class: '' },
  { path: 'musics', title: ' الأغنية ',  icon:' library_music    ', class: '' },
  { path: 'settings', title: 'الأعدادات  ',  icon:' settings', class: '' },

];




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];


  constructor( private router: Router) { }

  ngOnInit() {

    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);  }


  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
