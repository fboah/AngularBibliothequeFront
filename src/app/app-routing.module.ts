import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VilleComponent } from './ville/ville.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuteursComponent } from './auteurs/auteurs.component';
import { CategoriesComponent } from './categories/categories.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { LivresComponent } from './livres/livres.component';
import { SitesComponent } from './sites/sites.component';
import { StockComponent } from './stock/stock.component';
import { VentesComponent } from './ventes/ventes.component';
import { AchatfournisseurComponent } from './achatfournisseur/achatfournisseur.component';
import { CreateComponent } from './ville/create/create.component';
import { EditComponent } from './ville/edit/edit.component';


const routes: Routes = [
  {path:'ville',component:VilleComponent},
  { path: 'ville/create', component: CreateComponent },
  { path: 'ville/:postId/edit', component: EditComponent } ,
  {path:'dashboard',component:DashboardComponent},
  //{path:'/',component:DashboardComponent},
  {path:'',component:DashboardComponent},
  {path:'auteurs',component:AuteursComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'fournisseurs',component:FournisseursComponent},
  {path:'livres',component:LivresComponent},
  {path:'sites',component:SitesComponent},
  {path:'stock',component:StockComponent},
  {path:'ventes',component:VentesComponent},
  {path:'achatfournisseur',component:AchatfournisseurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
