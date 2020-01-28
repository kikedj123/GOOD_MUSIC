import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//component
import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {BodyComponent} from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import {ServiciosComponent} from './components/servicios/servicios.component';
import {EventoComponent} from './components/evento/evento.component';

//rutas
import {APP_ROUTING} from './app.routes';

//servicio
import {EventoService} from './services/eventos.service';
import {BodyService} from './services/body.service';
import {CarruselService} from './services/carrusel.service';


@NgModule({
  declarations: [
    AppComponent,
HeaderComponent,
BodyComponent,
FooterComponent,
ServiciosComponent,
EventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
EventoService,
CarruselService,
BodyService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
