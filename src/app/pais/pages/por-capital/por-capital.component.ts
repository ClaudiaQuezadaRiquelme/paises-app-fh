import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar( termino: string ) {
    this.termino = termino;
    console.log('termino', this.termino);
    this.paisService.buscarCapital(this.termino)
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
