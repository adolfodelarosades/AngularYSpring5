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

## Creando archivo clientes.json.ts con la lista de objetos 02:51

## Creando la clase de Servicio ClienteService y la Inyección de Dependencia 07:51

## Implementando Observable en nuestra clase Servicio ClienteService 08:18

## Implementando Rutas en Angular y navegación 05:14

## Actualización: sobre el archivo angular.cli.json vs angular.json 00:41

## Configurando e integrando Bootstrap de forma local en nuestra app 05:32

## Actualización: configurando los styles y scripts en archivo angular.json 00:19

## Instalando Bootstrap utilizando el comando npm desde el terminal 03:55