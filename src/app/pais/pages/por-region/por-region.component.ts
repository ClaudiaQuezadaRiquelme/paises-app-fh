import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = [ 'EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC' ];
  regionesName: string[] = [ 
    'EU (European Union)',
    'EFTA (European Free Trade Association)',
    'CARICOM (Caribbean Community)',
    'PA (Pacific Alliance)',
    'AU (African Union)',
    'USAN (Union of South American Nations)',
    'EEU (Eurasian Economic Union)',
    'AL (Arab League)',
    'ASEAN (Association of Southeast Asian Nations)',
    'CAIS (Central American Integration System)',
    'CEFTA (Central European Free Trade Agreement)',
    'NAFTA (North American Free Trade Agreement)',
    'SAARC (South Asian Association for Regional Cooperation)'
  ];
  regionActiva: string = '';
  paises: Country[] = [];
  hayError: boolean = false;

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  getClaseCSS ( region: string ): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion( region: string ) {

    if ( region === this.regionActiva ) return;

    this.regionActiva = region;
    this.regionesName.forEach(reg => {
      if (reg.includes(region)) this.regionActiva = reg;
    });
    
    this.paisService.buscarRegion( region )
      .subscribe((paises) => {
        this.hayError = false;
        console.log('buscar paises', paises);
        this.paises = paises;
        
      }, (err) => {
        this.hayError = true;
        this.paises = [];
        console.log('buscar err', err);
        
      });
  }

}
