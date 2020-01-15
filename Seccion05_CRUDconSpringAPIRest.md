## CRUD con Spring API Rest 01:16:01

### Descargar Código Fuente 00:03

:+1+

### Escribiendo los métodos del CRUD en la clase ClienteService del Backend 03:44

:+1: Spring5

### Escribiendo los métodos show y create en el Controlador Backend API Rest 05:26

:+1: Spring5

### Escribiendo los métodos update y delete en el Controlador Backend API Rest 05:37

:+1: Spring5

### Probando nuestro Backend API Rest con Postman 06:41

:+1: Postman

### Creando el componente form.component y la vista del formulario 10:46

Vamos a crear el formulario en nuestra aplicación.

* Crear el componente `form` dentro de la carpeta `clientes`:

`ng g c clientes/form --flat`

La bandera `flat` sirva para indicar que no se debe crear la carpeta `form` dentro de `clientes` y va a crear el componente directamente en `clientes`.

* Importar el modulo `FormsModule` en el archivo `app.module.ts`:
```js
...
import { FormsModule } from '@angular/forms';
...
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],

```
* Crear el atributo `cliente` en el archivo `form.component.ts`:
```js
...
import { Cliente } from './cliente';
...
private cliente: Cliente = new Cliente();
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente();

  constructor() { }

  ngOnInit() {
  }

}
```

* Implementar la vista en `form.component.html`:
```html
<div class="card bg-dart text-white">
    <div class="card-header">{{ titulo }}</div>
    <div class="card-body">
        <form>
            <div class="form-group row">
                <label for="nombre" class="col-form-label col-sm-2">Nombre</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" [(ngModel)]="cliente.nombre" name="nombre">
                </div>
            </div>

            <div class="form-group row">
                <label for="apellido" class="col-form-label col-sm-2">Apellido</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" [(ngModel)]="cliente.apellido" name="apellido">
                </div>
            </div>

            <div class="form-group row">
                <label for="email" class="col-form-label col-sm-2">Email</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" [(ngModel)]="cliente.email" name="email">
                </div>
            </div>
        </form>
    </div>
</div>
```

`[(ngModel)]` Es una directiva que  va a *Poblar* con los datos del formulario al objeto (atributo) `cliente`  y a sus atributos. Es decir en `cliente.nombre` se almacenara lo que escribamos en el campo `nombre`, en `cliente.apellido` se almacenara lo que escribamos en el campo `apellido` y en `cliente.email` se almacenara lo que escribamos en el campo `email`. En otras palabras lo que hace es un **BINDING  ( = Poblar / Enlazar ) en AMBAS DIRECCIONES**. Por ejemplo si vamos a buscar un cliente a través del servicio y nos conectamos a un Backend mediante un API Rest y obtenemos un `cliente` por su `id`, los datos recuperados se mostraran en el formulario. 

**Por lo tanto **el formulario está mapeado está asignado a un objeto, este objeto es un atributo en la clase componente**.

Entonces básicamente el `[(ngModel)]` sirve para mapear el formulario a un objeto del modelo.

* El siguiente paso sería crear el botón Crear:
```html
<div class="form-group row">
    <div class="col-sm-6">
        <button class="btn btn-primary" role="button">Crear</button>
    </div>
</div>
```
* Incluir en `<form>` la directiva `ngSubmit`:
```html
<form (ngSubmit) = "create()">
```
Lo que significa esto es que cuando se realice el `Submit` se invocara al método `create()` que debe estar definido en la clase componente.
* Definir el método `create()`:
```js
public create(): void{
  console.log('Clicked');
  console.log(this.cliente);
}
```
Después este método se debe conectar al API REST y va a persistir el objeto `cliente` que se introduzca en el formulario.

* Definir el atributo `titulo`:
```js
private titulo: string = 'Crear Cliente':
```

Estamos listo ya tenemos implementado nuestro componente formulario con lo básico, con todos sus campos. Tenemos mapeado cada campo del formulario con un atributo del objeto `cliente` que a su vez el objeto `cliente` es un atributo del componente `FormComponent`.

Por lo tanto de forma automática cuando se envíe el formulario, va a invocar al método `create()` a través de la directiva `(ngSubmit)`, va a hacer un **BIND** de los valores de los campos y va a guardar esos valores en los atributos del objeto `cliente` y cuando se invoca el método `create()` vamos a obtener el `cliente` listo para que después se pueda guardar con todos sus datos.

Aun no podemos probar este componente por que hay que crear la ruta del componente.

### Configurando la ruta y navegación del formulario 04:55

Continuamos creando las rutas de nuestro formulario.

* Ir a `app.module.ts` donde tenemos el array de las rutas.
* Incluir en el array de las rutas una nueva entrada:
`{path: 'clientes/form', component: FormComponent}`
Con esto tenemos mapeada nuestra ruta, nuestra URL (`'clientes/form'`) a nuestrio componente `FormComponent`. Por lo tanto ahora podemos crear el link.

* Ir a `clientes.component.html` sobre la `table` introducimos el siguiente código:
```html
 <div class="my-2 text-left">
    <button class="btn btn-rounded btn-primary" type="button" [routerLink] = "['/clientes/form']">Crear Cliente</button>
</div>
```
Lo que hace la directiva `[routerLink]` (un *View Helper*) nos permite crear Links hacia nuestras rutas internas de nuestro proyecto, es decir rutas mapeaddas a nuestros componente y que estan registradas en `routes`.

Si probamos nuestra aplicación justo arriba del listado de clientes nos aparece el botón `Crear Cliente` que si lo pulsamos hace que aparezca nuestro formulario donde debemos introducir nuestros datos `Nombre Apellido e Email`, al hacerlo y pulsar el botón `Crear` en la consola se nos muestra:

```
Clicked
Cliente {nombre: "Adolfo", apellido: "De la Rosa", email: "adolfo@gmail.com"}
nombre: "Adolfo"
apellido: "De la Rosa"
email: "adolfo@gmail.com"
__proto__: Object
````

Imprimimos el objeto cliente que contiene la representación de sus datos en estructura JSON, está funcionando perfecto.

Vamos a ver la bidireccionalidad ya vimos cómo enviar desde el formulario a los campos al componente. Pero también podría ser todo a la inversa es decir del Backend a Angular. Para simular por el momento este trabajo:

* Ir al archivo `cliente.ys`
* Iniciar los campos:
```js
export class Cliente {
    id: number;
    nombre: string = 'Pepe';
    apellido: string = 'El Toro';
    createAt: string ;
    email: string = 'pepeeltoro@gmail.com';
}
```

Al probar la aplicación e ir a Crear Cliente los datos aparecerán en los campos del formulario.

Por lo tanto el objeto `cliente` que es un atributo del componente `FormComponent` está mapeado al formulario y es bidireccional.

### Escribiendo implementación crear en el cliente.service.ts y en form.component.ts 06:00

:+1: Angular

### Actualización: nueva versión de SweetAlert2 8.0.1 o superior 00:39

:+1: Angular

### Instalar SweetAlert2 para enviar mensajes de alerta en el cliente 05:06

:+1: Angular

### Cargando los datos en el formulario para actualizar 06:28

:+1: Angular

### Escribiendo el update en el cliente.service.ts y en form.component.ts 07:02

:+1: Angular

### Escribiendo el delete en la clase service y en el componente clientes 07:37

:+1: Angular

### Overflow en listado de clientes, ajustando layout 03:16

:+1: Angular

### Validando los clientes en la tabla HTML con directiva ngIf 02:41

:+1: Angular


### Creando el componente form.component y la vista del formulario 10:46

:+1: Angular

### Configurando la ruta y navegación del formulario 04:55

:+1: Angular

### Escribiendo implementación crear en el cliente.service.ts y en form.component.ts 06:00

:+1: Angular

### Actualización: nueva versión de SweetAlert2 8.0.1 o superior 00:39

:+1: Angular

### Instalar SweetAlert2 para enviar mensajes de alerta en el cliente 05:06

:+1: Angular

### Cargando los datos en el formulario para actualizar 06:28

:+1: Angular

### Escribiendo el update en el cliente.service.ts y en form.component.ts 07:02

:+1: Angular

### Escribiendo el delete en la clase service y en el componente clientes 07:37

:+1: Angular

### Overflow en listado de clientes, ajustando layout 03:16

:+1: Angular

### Validando los clientes en la tabla HTML con directiva ngIf 02:41

:+1: Angular