import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser'
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  registro=[];
  cliente:any;
  nombrecliente:string;
  DUI:string;
  nombremascota:string;
  tratamiento:string;
  medicamento:string;
  costo:number;
  contador:number;
  visita:number;
  contadorvisita:number;
  x:string;
  constructor() { }

  ngOnInit() {
    this.nombrecliente="";
    this.DUI="";
    this.nombremascota="";
    this.tratamiento="";
    this.medicamento="";
    this.costo=0;
    this.contador=0;
    this.visita=0;
    this.contadorvisita=0;
    this.x="";
  }

  ingresar(){
    /*if(this.nombrecliente==) ESTO ES LO QUE ESTABAS HACIENDO PERO LO PUSE COMO COMENTARIO PORQUE ME DABA ERROR
    {

    }*/
    this.cliente={"nombrecliente":this.nombrecliente, "DUI":this.DUI, "nombremascota":this.nombremascota, "tratamiento":this.tratamiento, "medicamento":this.medicamento, "visita":this.visita, "costo":this.costo};
    this.registro.push(this.cliente);
    this.contador++;
    this.x=this.registro[0];
}

}
