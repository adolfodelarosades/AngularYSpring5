# Primeros pasos en Angular 01:30:50

## Instalaciones y herramientas necesarias 11:37

## Una mirada al editor Atom e instalando algunos plugins 06:25

Uso Visual Studio Code

## Creando nuestra aplicación Angular 13:00

Crear Aplicación: `ng new clientes-app`

Ejecutar Aplicación: `ng serve` o `ng serve -o`

## Estructura de directorio del proyecto angular 10:57

TO-DO: ESTUDIAR A FONDO

## Estructura de directorio del proyecto angular: Parte 2 el directorio src 06:47

TO-DO: ESTUDIAR A FONDO

## Integrar Bootstrap con Angular 06:54

* La integración se hizo manualmente en el archivo `index.html`.
* Se ingreso una NavBar en `app.component.html`.

## Creando nuevo componente HeaderComponent (MANUAL) 10:37

Se crea en componente `header.component` **MANUALMENTE!!!**

* Crear carpeta `header` dentro de la carpeta `app`
* Crear el archivo `header.component.ts` y meter su contenido el **HTML VA CONTENIDO AQUÍ MISMO!!!**
* Incluir el selector de `header.component.ts` dentro de `app.component.html`
* Añadirlo en `app.module.ts`

## Separando el template del componente con TemplateUrl 02:31

* Dentro de `header` crear el archivo `header.component.html`
* Mover el contenido del templeate del archivo `header.component.ts` al archivo `header.component.html`
* En `header.component.ts`cambiar `template` por `templateUrl` y hacer referencia a la plantilla `./header.component.html`

## Creando nuevo componente FooterComponent (SEMI-MANUAL) 10:07

* Creaar clase con comando: `ng generate class /footer/footer.component`
* La clase generada contiene un error basta quitarle el punto (Por que es la notación de archivo no de clase)
* Completar la clase con sus decoradores, selector, platilla HTML, etc.
* Crear archivo `footer.component.html` y crear su contenido.
* Incluir el selector de `footer.component.ts` en `app.component.html`
* Incluir `FooterComponent` en `app.module.ts`
* Crear el archivo `footer.component.css` y crear su contenido.
* Registrar el `css` dentro del archivo `footer.component.ts` con `styleUrls` que será un array.

## Directiva estructural *ngFor [CREAR COMPONENTE Directiva (AUTOMATICAMENTE)] 07:07

* Crear componente con comando: `ng generate component directiva` o `ng g c directiva` Crea TODO.
* Definir el array de cursos `listaCurso` en `directiva.component.ts`.
* Iterar la `listaCurso` en `directiva.component.html` usando la directiva `*ngFor` (usar ngFor en el editor para que pinte toda la estructura).
* Colocar el selector `app-directiva` en `app.commponent.html`.

## Directiva estructural *ngIf 04:48

* Usamos la directiva `*ngIf` para que se muestre algo según valor de la variable booleana que usa: `<ul class="list-group" *ngIf="mostrar">`
* `mostrar` es un atributo declarado en `directiva.component.ts`: `mostrar: boolean = true;`
* Para cambiar el valor de `mostrar` usamos un botón para que ejecute un evento cada que se pulse para Ocultar o Mostrar usando el operador ternario `?`: 
`<button type="button" (click)="mostrar = mostrar ? false: true" class="btn btn-primary my-3">{{ mostrar ? 'Ocultar' : 'Mostrar' }}</button>`
* Podemos usar un método para no tener todo el código en el HTML:
```js
mostrar: boolean = true;
textoBoton: string = 'Ocultar';

mostrarOcultar(){
  this.mostrar = this.mostrar ? false : true;
  this.mostrar ? this.textoBoton = 'Ocultar' : this.textoBoton = 'Mostrar';
}
```
Nótese que para hacer referencia a las propiedades dentro del método se usa `this`. La llamada en el HTML se hace así:
```html
<button type="button" (click)="mostrarOcultar()" class="btn btn-primary my-3">{{ textoBoton }}</button>
```