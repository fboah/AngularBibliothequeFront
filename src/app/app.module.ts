import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VilleComponent } from './ville/ville.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { CategoriesComponent } from './categories/categories.component';
import { LivresComponent } from './livres/livres.component';
import { AuteursComponent } from './auteurs/auteurs.component';
import { SitesComponent } from './sites/sites.component';
import { StockComponent } from './stock/stock.component';
import { VentesComponent } from './ventes/ventes.component';
import { AchatfournisseurComponent } from './achatfournisseur/achatfournisseur.component';
import { CreateComponent } from './ville/create/create.component';
import { EditComponent } from './ville/edit/edit.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    VilleComponent,
    DashboardComponent,
    FournisseursComponent,
    CategoriesComponent,
    LivresComponent,
    AuteursComponent,
    SitesComponent,
    StockComponent,
    VentesComponent,
    AchatfournisseurComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
