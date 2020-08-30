import { Component, OnInit } from '@angular/core';

import {FormsModule} from '@angular/forms'; 
import {BrowserModule}from '@angular/platform-browser'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { GuardsCheckEnd } from '@angular/router';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
//Creamos variables  variables
cliente=[];
dui = [];
visita = [];
guardar = [];
prueba:any;
Cliente:string;
DUI:string;
MASCOTA:string;
SERVICIO:string;
MEDICAMENTO:string;
COSTO:number;
Visita:number;
i:number;
x:number;
total:number;
descuento:number;
sumador:number;
index:number;
bandera:boolean;
DUI2:string;
  constructor() { }

  ngOnInit() {
    //inicializamos variables
    this.Cliente="";this.Visita=0;this.i=0;this.DUI2="";this.sumador=1;this.descuento=0;this.COSTO=0;this.total=0;
  }
  ingresar()
  { 
    this.sumador=1;
    this.bandera=false;
    this.dui.push(this.i);
    this.guardar.push(this.i);
    this.guardar[this.i]=[1];
    this.dui[this.i] = [this.DUI];
        for(this.x=0;this.x<this.cliente.length;this.x++)
        {
          
            if(this.DUI==this.dui[this.x])  
          {
            this.bandera=true;
            this.sumador=this.guardar[this.x]+1;
            this.index=this.x;
          }          
        }
        this.i++;
        if(this.bandera=true)
         {
          this.guardar[this.x] =this.sumador;
          this.Visita=this.sumador;
          if(this.Visita>=4)
          {
            this.descuento=(this.COSTO*0.10);
            this.total=this.COSTO-this.descuento;
            this.prueba={"Cliente":this.Cliente,"DUI":this.DUI,"SERVICIO":this.SERVICIO,"MASCOTA":this.MASCOTA,"MEDICAMENTO":this.MEDICAMENTO,"COSTO":this.COSTO,"VISITA":this.Visita,"DESCUENTO":this.descuento,"TOTAL":this.total};
            this.cliente.push(this.prueba);
          }
          
          if(this.Visita==2 ||this.Visita==3)
          {
            this.descuento=(this.COSTO*0.05);
            this.total=this.COSTO-this.descuento;
            this.prueba={"Cliente":this.Cliente,"DUI":this.DUI,"SERVICIO":this.SERVICIO,"MASCOTA":this.MASCOTA,"MEDICAMENTO":this.MEDICAMENTO,"COSTO":this.COSTO,"VISITA":this.Visita,"DESCUENTO":this.descuento,"TOTAL":this.total};
            this.cliente.push(this.prueba);
          }
          if(this.Visita==1)
          {
            this.descuento=(this.COSTO*0);
            this.total=this.COSTO-this.descuento;
            this.prueba={"Cliente":this.Cliente,"DUI":this.DUI,"SERVICIO":this.SERVICIO,"MASCOTA":this.MASCOTA,"MEDICAMENTO":this.MEDICAMENTO,"COSTO":this.COSTO,"VISITA":this.Visita,"DESCUENTO":this.descuento,"TOTAL":this.total};
            this.cliente.push(this.prueba);
          }
         }
         else{
           this.sumador=1;
          this.Visita=1;
          this.prueba={"Cliente":this.Cliente,"DUI":this.DUI,"SERVICIO":this.SERVICIO,"MASCOTA":this.MASCOTA,"MEDICAMENTO":this.MEDICAMENTO,"COSTO":this.COSTO,"VISITA":this.Visita};
          this.cliente.push(this.prueba);
          }
         
        
        
  }

}
