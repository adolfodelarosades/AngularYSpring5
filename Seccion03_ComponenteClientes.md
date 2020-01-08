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

## Implementando Observable en nuestra clase Servicio ClienteService 08:18

## Implementando Rutas en Angular y navegación 05:14

## Actualización: sobre el archivo angular.cli.json vs angular.json 00:41

## Configurando e integrando Bootstrap de forma local en nuestra app 05:32

## Actualización: configurando los styles y scripts en archivo angular.json 00:19

## Instalando Bootstrap utilizando el comando npm desde el terminal 03:55