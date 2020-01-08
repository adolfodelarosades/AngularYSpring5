–
# Angular: Componente clientes 45:26

## Creando el componente clientes.component 03:28

* Crear el componente Clientes con el comando: `ng g c clientes`
* Crear la clase Cliente con el comando: `ng g class /clientes/cliente` que representara el modelo.
* Insertamos los siguientes atributos en la clase `Cliente`:
```js
export class Cliente {
    id: number;
    nombre: string;
    apellido: string;
    createAt: string;
    email: string;
}
```

## Listando los objetos del tipo Cliente 07:17

* Crear en `clientes.component.ts` el atributo clientes, que es un array de Clientes:
```js
clientes: Cliente[] = [
    {id: 1,  nombre: 'Andrés', apellido: 'Guzmán', email: 'profesor@bolsadeideas.com', createAt: '2018-01-01'},
    ...
    {id: 12, nombre: 'Jade', apellido: 'Doe', email: 'jane.doe@gmail.com', createAt: '2018-03-06'}
];
```
* Implementar la lista en `clientes.component.html` para ver la lista de clientes.
```js
<div class="card border-primary mb-3">
    <div class="card-header">Clientes</div>
    <div class="card-body text-primary">
        <h5 class="card-title">Listado de Clientes</h5>
        <table class="table table-border table-sprited">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Nombre</td>
                    <td>Apellido</td>
                    <td>Email</td>
                    <td>Fecha</td>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let cliente of clientes">
                    <td> {{ cliente.id }}</td>
                    <td> {{ cliente.nombre }}</td>
                    <td> {{ cliente.apellido }}</td>
                    <td> {{ cliente.email }}</td>
                    <td> {{ cliente.createAt }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
```
* Poner el selector `app-clientes` en `app.component.html`

El resultado es:

<img src="/images/ListaClientes.png">

## Creando archivo clientes.json.ts con la lista de objetos 02:51

Vamos a desacoplar el listado de los clientes del componente Clientes ya que estamos mezclando datos con lógica.

* En la carpeta `clientes` creamos el archivo `clientes.json.ts` y movemos el listado de clientes aquí, lo declaramos como una constante y le ponemos el calificador `export` para poderlo exportar (importar desde otras clases):
```js
import { Cliente } from './cliente';

export const CLIENTES : Cliente[] = [
    {id: 1,  nombre: 'Andrés', apellido: 'Guzmán', email: 'profesor@bolsadeideas.com', createAt: '2018-01-01'},
    {id: 2,  nombre: 'Mr. John', apellido: 'Doe', email: 'john.doe@gmail.com', createAt: '2018-01-02'},
    {id: 3,  nombre: 'Linus', apellido: 'Torvalds', email: 'linus.torvalds@gmail.com', createAt: '2018-01-03'},
    {id: 4,  nombre: 'Rasmus', apellido: 'Lerdorf', email: 'rasmus.lerdorf@gmail.com', createAt: '2018-01-04'},
    {id: 5,  nombre: 'Erich', apellido: 'Gamma', email: 'erich.gamma@gmail.com', createAt: '2018-02-01'},
    {id: 6,  nombre: 'Richard', apellido: 'Helm', email: 'richard.helm@gmail.com', createAt: '2018-02-10'},
    {id: 7,  nombre: 'Ralph', apellido: 'Johnson', email: 'ralph.johnson@gmail.com', createAt: '2018-02-18'},
    {id: 8,  nombre: 'John', apellido: 'Vlissides', email: 'john.vlissides@gmail.com', createAt: '2018-02-28'},
    {id: 9,  nombre: 'Dr. James', apellido: 'Gosling', email: 'james.gosling@gmail.com', createAt: '2018-03-03'},
    {id: 10, nombre: 'Magma', apellido: 'Lee', email: 'magma.lee@gmail.com', createAt: '2018-03-04'},
    {id: 11, nombre: 'Tornado', apellido: 'Roe', email: 'tornado.roe@gmail.com', createAt: '2018-03-05'},
    {id: 12, nombre: 'Jade', apellido: 'Doe', email: 'jane.doe@gmail.com', createAt: '2018-03-06'}
  ];
```

* En `clientes.component.ts` declaramos el Array vacío: `clientes: Cliente[];`
* En `clientes.component.ts` importaremos la constante CLIENTES por eso la definimos con `export`: 
`import { CLIENTES } from './clientes.json';`
* En el método `ngOnItit()` que es cuando se inicia el componente asignaremos `CLIENTES` a nuestra propiedad `clientes`.
```js
ngOnInit() {
  this.clientes = CLIENTES;
}
```

Este es todo el cambio, todo sigue funcionando igual, pero queda más limpio, los datos quedan en un archivo separado **SIMULANDO COMO SI FUERA UN JSON QUE OBTENEMOS DE UN API REST O DE UNA BD**

## Creando la clase de Servicio ClienteService y la Inyección de Dependencia 07:51

Aun que sacamos los datos del componente, aun quedan rastros de los datos dentro del componente, como la importación del archivo `clientes.json` y el uso de la constante `CLIENTES`, **la idea es DESACOPLAR COMPLETAMENTE TODO LO REFERENTE A LOS DATOS, MODELO O LÓGICA DE NEGOCIOS DE LA CLASE Component** por lo que tenemos que **mover `CLIENTES` a una clase especializada en la Lógica de Negocios** que sería **nuestra clase ClienteService**

* Dentro de la carpeta `clientes` crear el **servicio** cliente con el comando: `ng g service /clientes/cliente` se crea una clase de tipo `service`:
```js
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }
}
```
El decorador `@Injectable` representa lógica de negocios por lo que las clases de servicio llevaran este decorador, lo que nos permite **INYECTAR EN OTRO COMPONENTE VÍA INYECCION DE DEPENDENCIAS**.
Otra cosa muy importante es que dentro de `@Injectable` tenemos el atributo `providedIn: 'root'` lo que permite usar el servicio en cualquier componente, **ANTES TENIAMOS QUE DECLARAR EL SERVICIO EN EL `app.module.ts` DENTRO DEL APARTADO `providers: []`.

* Mover el import de CLIENTES del `clientes.component.ts` y lo llevamos a `cliente.service.ts`
* Crear el método `getClientes()` de tipo array de clientes, que va a retornar los clientes.
```js
getClientes(): Cliente[] {
    return CLIENTES;
}
```
* Inyectar la clase service `cliente.service.ts` en `cliente.component.ts` esto se hace en el constructo:
`constructor(private clienteService: ClienteService) { }`
* Y en el método `ngOnInit()` le asignamos a nuestro atributo `clientes` el método `getClientes()`:
```js
ngOnInit() {
  this.clientes = this.clienteService.getClientes();
}
```

**YA TENEMOS SEPARADOS LOS DIFERENTES ROLES:**

* La clase `component` representa a nuestro **CONTROLADOR**
* La clase `service` representa a nuestra al **MODELO** o Lógica de Negocio
* El archivo `html` representa a la **VISTA**

## Implementando Observable en nuestra clase Servicio ClienteService 08:18

Vamos a modificar la clase `cliente.service` para que las peticiones sean más **REACTIVAS** y **ASINCRONAS** para cuando trabajemos con el API REST. El método `getCliente()` actual es un método **SINCRONO** por lo que no podría trabajar correntamente con un API REST, ya que se necesita trabajar con peticiones Asincronas que no bloquen nuestra aplicación mientras espera la respuesta del servidor. Además la idea es que se puedan realizar varias peticiones al servidor al mismo tiempo, que no esten sincronizadas entre si, y que se puedan manejar de forma paralela al mismo tiempo y en tiempo real. 

**REACTIVO**

El concepto **REACTIVO** es que reaccione en Tiempo Real y a travéz de flujos de datos con **Streams**, flujos de datos de entrada y salida.

Por lo que tenemos que tenemos que modificar nuestro método `getClientes(): Clientes[]` para que nuestro tipo `Clientes[]` lo transformemos a un **Stream** y para eso utilizamos el **API Observable**.

* Importar la clase Observable: `import { Observable } from 'rxjs';`.
* Lo que retorna el método `getClientes()` debe ser un **Stream** es decir un **Observable** de clientes: 
`getClientes(): Observable<Cliente[]> {`
* Por lo que que retorna `return CLIENTES;` tambien debe ser un observable para que sea del mismo tipo de lo que regresamos:
`return of(CLIENTES);`
* Importar el operador `of` de `rxjs`: `import { Observable, of } from 'rxjs';`.

**Hemos convertido nuestro listado de clientes en un Observable en un Stream, en un flujo de datos**

## Concepto Observable y patrón de diseño Observador

El Observable esta basado en el **patrón de diseño Observador**, donde tenemos un **Sujeto que es Observable**, en este caso nuestro Cliente y tenemos también **Observadores**, que estan atentos escuchando un posible cambio en el sujeto, estos observadores se suscriben al sujeto (el `Observable`) y cuando cambia su estado se notifica a los observadores para que lleven a cabo algún proceso o tarea según las necesidades.

Esto debería hacer que cuando cambia algún dato en el servidor(Spring) automáticamente notifique al cliente y se actualicen en tiempo real los datos en el cliente, sin necesidad de recargar la página. 

* En `cliente.component.ts` tenemos que **registrar o suscribir el observador** a nuestros clientes(el `Observable` que es `getClientes() el cual va a ser Observado por Observadores`) por lo que vamos a cambiar:
```js
ngOnInit() {
  this.clientes = this.clienteService.getClientes();
}
```
Por:
```js
ngOnInit() {
  this.clienteService.getClientes().subscribe( 
    clientes => this.clientes = clientes
  );
}
```
Desde el observador nos estamos **Suscribiendo** para escuchar al Observable y este nos regresa un resultado que estamos recibiendo en `clientes` y este valor se lo asignamos a nuestro atributo `clientes`, todo ello usando una función anónima, podríamos haber puesto:
```js
ngOnInit() {
  this.clienteService.getClientes().subscribe( 
    function(clientes) {
      this.clientes = clientes
    } 
  );
}
```
Pero usaremos la función anónima.

La aplicación se sigue viendo igual pero ya esta trabajando de forma REACTIVA y ASINCRONA.

<img src="/images/ListaClientes.png">

## Implementando Rutas en Angular y navegación 05:14

## Actualización: sobre el archivo angular.cli.json vs angular.json 00:41

## Configurando e integrando Bootstrap de forma local en nuestra app 05:32

## Actualización: configurando los styles y scripts en archivo angular.json 00:19

## Instalando Bootstrap utilizando el comando npm desde el terminal 03:55