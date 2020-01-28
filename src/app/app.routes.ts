

import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from './components/body/body.component';
import {ServiciosComponent} from './components/servicios/servicios.component';
import { EventoComponent } from './components/evento/evento.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'servicios', component: ServiciosComponent },
    { path: 'evento/:id', component: EventoComponent },
    

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

    export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true} );
