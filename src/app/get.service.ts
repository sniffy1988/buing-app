import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';


@Injectable()
export class GetService {
  itemRef;
  db;

  constructor(db: AngularFireDatabase) {
    this.db = db.list('BuyItems');
  }

  getItems() {
    return this.db.valueChanges();
  }
  setItems(item) {
    return this.db.push(item);
  }
}
