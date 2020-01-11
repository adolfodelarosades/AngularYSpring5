import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    // Retorno Estático.
    // return of(CLIENTES);

    // "Castear" directamente
    return this.http.get<Cliente[]>(this.urlEndPoint);
    /* Usando operador map()
    return this.http.get(this.urlEndPoint).pipe(
      map( response => response as Cliente[] )
    );
    */
  }
}
