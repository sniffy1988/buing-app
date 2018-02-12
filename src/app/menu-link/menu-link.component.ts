import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-link',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.scss']
})
export class MenuLinkComponent implements OnInit {
  @Input() link;

  constructor() {
  }

  ngOnInit() {
  }

}
