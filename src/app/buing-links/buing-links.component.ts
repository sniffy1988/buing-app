import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-buing-links',
  templateUrl: './buing-links.component.html',
  styleUrls: ['./buing-links.component.scss']
})
export class BuingLinksComponent implements OnInit {
  buingItems = [
    'Хлеб', 'Масло', 'Сыр'
  ];
  addItem = '';

  addingItem() {
    this.buingItems.push(this.addItem);
    this.addItem = '';
  }

  constructor() {
  }

  ngOnInit() {
  }

}
