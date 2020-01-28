import {Component,OnInit} from '@angular/core';
import {BodyService,circle} from '../../services/body.service';
import {CarruselService,carrusel} from '../../services/carrusel.service';
@Component({

selector: 'app-body',
templateUrl:'./body.component.html'
})


export class BodyComponent implements OnInit {

    circle:circle[] =[];
carrusel:carrusel[]=[];

constructor(private _circleSerivice:BodyService, private _carruselSerivice:CarruselService)
{}
ngOnInit() {
this.circle=this._circleSerivice.getCircles();
console.log(this.circle);

this.carrusel=this._carruselSerivice.getCarruseles();
console.log(this.carrusel);

}
}
