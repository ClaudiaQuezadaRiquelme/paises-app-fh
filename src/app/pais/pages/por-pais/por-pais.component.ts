import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar( termino: string ) {
    this.termino = termino;
    console.log('termino', this.termino);
    this.paisService.buscarPais(this.termino)
      .subscribe( (paises) => {
        this.hayError = false;
        console.log('buscar paises', paises);
        this.paises = paises;
        
      }, (err) => {
        this.hayError = true;
        this.paises = [];
        console.log('buscar err', err);
        
      });
  }

  sugerencias( termino: string ) {
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais( this.termino )
      .subscribe( 
        paises => { this.paisesSugeridos = paises.splice(0,5) },
        err => this.paisesSugeridos = [] 
      );
  }

  buscarSugerido( termino: string ) {
    this.buscar( termino );
    this.mostrarSugerencias = false;
  }

}
