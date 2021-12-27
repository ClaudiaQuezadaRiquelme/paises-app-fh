import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar() {
    console.log('termino', this.termino);
    this.paisService.buscarPais(this.termino)
      .subscribe( (paises) => {
        this.hayError = false;
        console.log('buscar paises', paises);

        
      }, (err) => {
        this.hayError = true;
        console.log('buscar err', err);
        
      })
  }

}
