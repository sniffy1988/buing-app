import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';


import {AppComponent} from './app.component';
import {StaticComponent} from './static/static.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MainLogoComponent } from './main-logo/main-logo.component';
import { MenuLinkComponent } from './menu-link/menu-link.component';
import { BuingLinksComponent } from './buing-links/buing-links.component';


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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
