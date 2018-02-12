import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  links = [
    {
      name: 'Home',
      link : ''
    },
    {
      name : 'Dashboard',
      link : '/dashboard'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }


}
