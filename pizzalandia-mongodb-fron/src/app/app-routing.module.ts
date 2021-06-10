import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { ProfileComponent } from './componentes/auth/profile/profile.component';
import { Page404Component } from './componentes/page404/page404.component';
import { OrdencomboComponent } from './componentes/ordenCombo/ordenCombo.component';
import { OrdenpizzaComponent } from './componentes/ordenPizza/ordenPizza.component';
import { MenusCombosComponent } from './componentes/menusCombos/menusCombos.component';
import { MenusPizzasComponent } from './componentes/menusPizzas/menusPizzas.component';
import { MenusBebidasComponent } from './componentes/menusBebidas/menusBebidas.component';
import { OrdenBebidasComponent } from './componentes/ordenBebidas/ordenBebidas.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { FacturaComponent } from './componentes/factura/factura.component';
import { WebComponent } from './componentes/web/web.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '',component: HomeComponent, canActivate: [AuthGuard]},  
  {path: 'menusCombos', component: MenusCombosComponent, canActivate: [AuthGuard]},
  {path: 'menusPizzas', component: MenusPizzasComponent, canActivate: [AuthGuard]},
  {path: 'menusBebidas', component: MenusBebidasComponent, canActivate: [AuthGuard]},
  {path: 'ordenCombo/:id', component:OrdencomboComponent, canActivate: [AuthGuard]},
  {path: 'ordenPizza/:id', component: OrdenpizzaComponent, canActivate: [AuthGuard]},
  {path: 'ordenBebida/:id', component: OrdenBebidasComponent, canActivate: [AuthGuard]},
  {path: 'pedidos', component:PedidosComponent, canActivate: [AuthGuard]},
  {path: 'pedidos/:id', component:FacturaComponent, canActivate: [AuthGuard]},
  {path: 'factura', component:FacturaComponent, canActivate: [AuthGuard]},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegisterComponent},
  {path: 'auth/profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'PizzalandiaWeb', component: WebComponent},
  {path:  '**', component:Page404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
