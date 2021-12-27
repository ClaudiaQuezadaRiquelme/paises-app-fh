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
    this.hayError = false;
    // TODO: crear sugerencias
  }

}
