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

## Creando la clase de Servicio ClienteService y la Inyección de Dependencia 07:51

## Implementando Observable en nuestra clase Servicio ClienteService 08:18

## Implementando Rutas en Angular y navegación 05:14

## Actualización: sobre el archivo angular.cli.json vs angular.json 00:41

## Configurando e integrando Bootstrap de forma local en nuestra app 05:32

## Actualización: configurando los styles y scripts en archivo angular.json 00:19

## Instalando Bootstrap utilizando el comando npm desde el terminal 03:55