import {Component,OnInit} from '@angular/core';
import {EventoService,evento} from '../../services/eventos.service';



@Component({

selector: 'app-evento',
templateUrl:'./evento.component.html'
})


export class EventoComponent implements OnInit {

evento:evento[] =[];

constructor(private _eventosSerivice:EventoService)
{}
ngOnInit() {
this.evento=this._eventosSerivice.getEventos();
console.log(this.evento);


}
}
