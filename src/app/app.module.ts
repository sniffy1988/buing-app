import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {StaticComponent} from './static/static.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {MainLogoComponent} from './main-logo/main-logo.component';
import {MenuLinkComponent} from './menu-link/menu-link.component';
import {BuingLinksComponent} from './buing-links/buing-links.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

export const firebaseConf = {
  apiKey: 'AIzaSyCbEfuXPLBtZAHh_72WiCWT0KxnYiHhZD0',
  authDomain: 'buying-app-9da1a.firebaseapp.com',
  databaseURL: 'https://buying-app-9da1a.firebaseio.com',
  projectId: 'buying-app-9da1a',
  storageBucket: 'buying-app-9da1a.appspot.com',
  messagingSenderId: '139745094655'
};

@NgModule({
  declarations: [
    AppComponent,
    StaticComponent,
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    MainLogoComponent,
    MenuLinkComponent,
    BuingLinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConf),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
