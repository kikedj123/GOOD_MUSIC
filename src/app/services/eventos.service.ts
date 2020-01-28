
import { Injectable } from '@angular/core';

@Injectable()
export class EventoService {

  private body:evento[] =[
    {
nombre:"BARRANQUILLA",
bio:"BARRANQUILLA PREPÁRATE 4/5 de Mayo en @elektraclub La Potencia !! Para vivir una experiencia única y inolvidable con el gran lanzamiento de GOOD MUSIC COLOMBIA. Con los DJ más destacado en la escena electrónica a nivel nacional e internacional. Ven y disfruta de nuestro LineUp de Lujo que traemos para ti...",
img:"assets/img/Barranquilla.jpeg"
},
{
nombre:"CARTAGENA",
bio:"GOOD MUSIC COLOMBIA PRESENTA... Este sábado 13 de julio #Lacasadepapelparty Edition @nexusnightclub Cartagena Ven y disfruta de esta nueva experiencia , única y totalmente diferente , un Line Up con los DJ mas allá destacados y representativos en la escena electrónica de las diferentes ciudades del país...",
img:"assets/img/Cartagena.jpeg"
},
{
nombre:"BUCARAMANGA",
bio:"BUCARAMANGA PREPÁRATE PARA EL GRAN LANZAMIENTO DE GOOD MUSIC COLOMBIA Este sábado 3 de agosto en @majestic_ladiscoteca !! Vive esta gran experiencia única e inolvidable que traemos para todos ustedes . Ven y disfruta de nuestro LineUp de Lujo...",

img:"assets/img/Bucaramanga.jpeg"
},


];



  constructor() {
console.log("servicio ready");

   }

   getEventos():evento[]{
     return this.body;
   }
}

export interface evento{
  nombre:string;
  bio:string;
  img:string;
}
