import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  listaCurso: string[] = ['TypeScript', 'JavaScript', 'Java SE', 'C#', 'PHP'];

  mostrar: boolean = true;
  textoBoton: string = 'Ocultar';

  constructor() { }

  ngOnInit() {
  }

  mostrarOcultar(){
    this.mostrar = this.mostrar ? false : true;
    this.mostrar ? this.textoBoton = 'Ocultar' : this.textoBoton = 'Mostrar';
  }

}
