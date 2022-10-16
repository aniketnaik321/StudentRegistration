import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  items: MenuItem[]=[];
  constructor(private _router:Router) { }

  ngOnInit(): void {
    this.items = [{
      label: 'My Profile',
    },
      {
          label: 'Log out',
          routerLink:['neetdata/login']
         }
  ];
  }

}
