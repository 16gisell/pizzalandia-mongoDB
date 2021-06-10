import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//service
import {DataApiService} from './service/data-api.service';
import { AuthService } from './service/auth.service';

import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { ProfileComponent } from './componentes/auth/profile/profile.component';
import { Page404Component } from './componentes/page404/page404.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { OrdencomboComponent } from './componentes/ordenCombo/ordenCombo.component';
import { OrdenpizzaComponent } from './componentes/ordenPizza/ordenPizza.component';
import { MenusCombosComponent } from './componentes/menusCombos/menusCombos.component';
import { MenusPizzasComponent } from './componentes/menusPizzas/menusPizzas.component';
import { MenusBebidasComponent } from './componentes/menusBebidas/menusBebidas.component';
import { OrdenBebidasComponent } from './componentes/ordenBebidas/ordenBebidas.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { FacturaComponent } from './componentes/factura/factura.component';

import { WebComponent } from './componentes/web/web.component';
import { AlertComponent } from './componentes/alert/alert.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component,
    NavbarComponent,
    HeroComponent,
    OrdencomboComponent,
    OrdenpizzaComponent,
    MenusCombosComponent,
    MenusPizzasComponent,
    MenusBebidasComponent,
    OrdenBebidasComponent,
    PedidosComponent,
    FacturaComponent,
    WebComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataApiService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
