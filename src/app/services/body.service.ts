import { Injectable } from '@angular/core';

@Injectable()
export class BodyService {

  private body:circle[] =[
    {

img:"assets/img/EventosR.jpeg"
},
{
    img:"assets/img/Disk.jpeg"
},
{

img:"assets/img/Proximo.jpeg"
},


];

  constructor() {
console.log("servicio ready");

   }

   getCircles():circle[]{
     return this.body;
   }
}

export interface circle{
  
  img:string;
}
