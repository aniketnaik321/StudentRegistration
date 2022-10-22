import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _router:Router) { }

  items: MenuItem[]=[];
  logoutmenu: MenuItem[]=[];

  ngOnInit(): void {
    this.items = [
      {
          label: 'Possibilities',
          // icon: 'fa fa-home text-light',
          routerLink: 'neetdata/possibilities'          
      },
      {
          label: 'Preferences',
          // icon: 'fa fa-shopping-cart text-light',
          routerLink: 'neetdata/preferences'    
      },
      {
        label: 'Status',
        routerLink: 'neetdata/status'  
        // icon: 'fa fa-wrench text-light'        
    },
    {
      label: 'What if',
      routerLink: 'neetdata/status'
      // icon: 'fa fa-wrench text-light'        
  }
  ];


  this.logoutmenu = [
    {
        label: 'Logout',
        icon: 'pi-user',        
    }
];

  }

}
