import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CreeTicketComponent } from './cree-ticket/cree-ticket.component';
import { BugComponent } from './cree-ticket/Bug/bug.component';
import { AmeliorationComponent } from './cree-ticket/amelioration/amelioration.component';
import { SupportComponent } from './cree-ticket/support/support.component';
import { TachtechniqueComponent } from './cree-ticket/tachtechnique/tachtechnique.component';
import { TestComponent } from './cree-ticket/test/test.component';
import { NavbarComponent } from './accueil/navbar/navbar.component';
import { JumbotronComponent } from './accueil/jumbotron/jumbotron.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CreeTicketComponent,
    BugComponent,
    AmeliorationComponent,
    SupportComponent,
    TachtechniqueComponent,
    TestComponent,
    NavbarComponent,
    JumbotronComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
