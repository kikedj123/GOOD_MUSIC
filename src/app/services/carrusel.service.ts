
import { Injectable } from '@angular/core';

@Injectable()
export class CarruselService {

  private body:carrusel[] =[
    {

img:"assets/img/5.jpg"
},
{
img:"assets/img/2.jpg"
},
{

img:"assets/img/4.jpg"
}

];
  constructor() {
console.log("servicio carussel");

   }

   getCarruseles():carrusel[]{
     return this.body;
   }
}

export interface carrusel{
  img:string;
}
