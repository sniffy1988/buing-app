import {Component, OnInit} from '@angular/core';
import {GetService} from '../get.service';

@Component({
  selector: 'app-buing-links',
  templateUrl: './buing-links.component.html',
  styleUrls: ['./buing-links.component.scss'],
  providers: [GetService]
})
export class BuingLinksComponent implements OnInit {
  buingItems = [];
  addItem = '';
  db;
  database;

  addingItem() {
    console.log(this.addItem);
    console.log(this.buingItems[this.buingItems.length - 1]);
    this.database.setItems({
      'name': this.addItem
    }).then(() => {
      this.addItem = '';
    }).catch((err) => {
      console.log(err);
    });
  }

  constructor(db: GetService) {
    this.db = db.getItems();
    this.database = db;
    this.db.subscribe(res => {
      this.buingItems = res;
    });
  }

  ngOnInit() {
  }

}
