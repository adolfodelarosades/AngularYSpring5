# 4. Backend: Spring API REST 01:28:02

### Implementando Servicio Angular con HttpClient 09:28

Vamos a conectar nuestras dos aplicaciones Frond-End con Angular y Back-End con Spring.

<img src="ConectarAngular-Spring.png">

* Ir a `app.module.ts` 
* Importar la clase `HttpClientModule`: `import { HttpClientModule } from '@angular/common/http';`
* Añadir el modulo en el array de los imports:
```js
imports: [
  BrowserModule,
  HttpClientModule,
  RouterModule.forRoot(routes)
]
```
`HttpClientModule` Nos permite en nuestra clase Service poder conectarnos con el servidor a través de peticiones HTTP usando los diferentes verbos GET, POST, PUT, DELETE , etc. 

Tenemos que modificar la clase `cliente.service.ts` para que en vez de entregar o retornar un lista de objetos cliente de forma estática lo haga a través de forma remota en el servidor.

* Ir a `cliente.service.ts` 
* Importar la clase `HttpClient`: `import { HttpClient } from '@angular/common/http';`
* Inyectar el `HttpClient` vía constructor: `constructor(private http: HttpClient) { }`
* Definir la URL del servicio o End Point que vamos a llamar: `private urlendPoint: string = 'http://localhost:8080/api/clientes';`
* Hacer la petición get mediante HTTP para obtener la lista de Clientes: `return this.http.get<Cliente[]>(this.urlEndPoint);`

Como se nos retorna un observable de tipo `any` hay que hacer el cast para que se nos regrese un observable de tipo Cliente por medio de `<Cliente[]>`.
Por lo tanto dentro de la promesa en el cuerpo de respuesta se va a devolver un objeto de tipo JSON por defecto sin tipo un tipo `any` entonces justamente por eso hacemos un cast.

Esta es una forma existe otra forma a través del operador `Map() que también nos permite convertir el tipo JSON dentro de la promesa y se convierte o se Castea al tipo del objeto Cliente. Vamos a ver como sería:

* Ir a `cliente.service.ts`
* importar el operador `map`: `import { map } from 'rxjs/operators';`
* Hacer el cast al tipo `Cliente[]` mediante `map`: 
```js
return this.http.get(this.urlEndPoint).pipe(
  map( response => response as Cliente[] )
);
```

Usamos el operador `pipe()` que nos permite agregar más operadores, `response` es la respuesta en formato JSON, que la convertimos a un listado de Clientes mediante el operador `as`.

Recordemos que `map( response => response as Cliente[] )` es equivalente a `map( function(response) { return response as Cliente[] } )`.
