import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  
  private apiUrl: string = 'https://restcountries.com';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/v3.1/name/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/v3.1/capital/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  getPaisPorCodigo( id: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/v3.1/alpha?codes=${ id }`;
    return this.http.get<Country[]>( url );
  }

  buscarRegion( region: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/v2/regionalbloc/${ region }`;
    return this.http.get<Country[]>( url );
  }
}
