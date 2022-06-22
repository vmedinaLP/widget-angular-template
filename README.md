# WIDGET

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

# General documentation

- El proyecto utiliza Compodoc en la administración de documentacion, para generarla se ejecuta el comando `npm run compodoc` y crea una carpeta con el nombre `docs` a la vez que la abrira y servira por defecto en la url `http://localhost:8080/`, NOTA: allí podras registrar la documentacion de cada uno de los elementos de tu codigo la igual que la cobertura.

# Structure

- El widget consta de una coleccion de Tres proyectos :

  - my-lib => proyecto principal tipo library.
  - prod-packer => proyecto final tipo app empaquetador de la library (my-lib).
  - test-packer => proyecto (OPCIONAL) de pruebas tipo app empaquetador de la library (my-lib).

### Encased

- Coleccion de proyectos : Distribucion definida por angular-cli y atomic design.

```json
📦projects
┣ 📂my-lib => proyecto libreria
┃ ┣ 📂src
┃ ┃ ┣ 📂lib => library
┃ ┃ ┃ ┣ 📂components      => componentes de la libreria
┃ ┃ ┃ ┃ ┣ 📂myComponent
┃ ┃ ┃ ┃ ┗ 📂shared
┃ ┃ ┃ ┃ ┃ ┣ 📂atoms
┃ ┃ ┃ ┃ ┃ ┣ 📂molecules
┃ ┃ ┃ ┃ ┃ ┣ 📂organisms
┃ ┃ ┃ ┃ ┃ ┗ 📂templates
┃ ┃ ┃ ┣ 📂dictionaries
┃ ┃ ┃ ┃ ┗ 📂first-directory
┃ ┃ ┃ ┣ 📂models
┃ ┃ ┃ ┃ ┣ 📂entry
┃ ┃ ┃ ┃ ┣ 📂requests
┃ ┃ ┃ ┃ ┣ 📂response
┃ ┃ ┃ ┃ ┗ 📂transfers
┃ ┃ ┃ ┣ 📂services
┃ ┃ ┃ ┃ ┗ 📂my-service
┃ ┃ ┃ ┣ 📂utils
┣ 📂prod-packer  => proyecto empaquetador de produccion
┃ ┣ 📂src
┃ ┃ ┣ 📂app  => application
┃ ┃ ┃ ┣ 📂components
┃ ┃ ┃ ┣ 📂services
┃ ┃ ┃ ┃ ┣ 📂authentication
┃ ┃ ┣ 📂assets
┃ ┃ ┣ 📂environments
┗ 📂test-packer  => proyecto empaquetador de pruebas
┃ ┣ 📂src
┃ ┃ ┣ 📂app  => application
┃ ┃ ┃ ┣ 📂components
┃ ┃ ┃ ┣ 📂services
┃ ┃ ┃ ┃ ┣ 📂authentication
┃ ┃ ┣ 📂assets
┃ ┃ ┣ 📂environments
```

- builds and package : Distribucion por defecto angular.json.

```json
📦dist
┣ 📂my-lib      => se crea build y package solo de la libreria
┣ 📂prod-packer => se crea build final que importa libreria para su uso en produccion.
┗ 📂test-packer => se crea build de pruebas que importa libreria para uso en sandbox
```

- Documentacion : La distribución de las carpetas lo define compodoc.

```json
📦docs
┣ 📂fonts
┣ 📂graph
┣ 📂images
┣ 📂js
┃ ┣ 📂libs
┃ ┣ 📂search
┣ 📂styles
```

# Implementation Template

- clona el repositorio en tu maquina local.
- con el `Searsh` del VSCode reemplaza de forma global los nombres de los proyectos que desea cambiar. `test-packer` app de pruebas `prod-packer` app de produccion `my-lib` o la libreria.
- (Opcional) configure el nombre del selector con el que se invocara el WIDGET desde otra aplicacion, esta configuracion se ubica en el app.module.ts del proyecto de distribucion `prod-packer`:

```json
    export class AppModule {
      constructor(private injector: Injector) {
      const imagenEspacio = createCustomElement(AppComponent, { injector })
      customElements.define('selector-widget', imagenEspacio)
    }
  }
```

- (Opcional) configure nombre de la data entrante en el app.component.ts del proyecto final de produccion. por defecto message

```json
@Input()
  set message(message: any) {

  }
```

- configuere el nombre del fichero del widget final en el archivo raiz concat.js:

```json
    concat(
    files,
    path.resolve(__dirname, "./dist/prod-packer/NOMBRE-WIDGET.js"),
    function (err) {
      if (files) {
        files.forEach((file) => fs.unlinkSync(file));
      }
      if (err) throw err;
      console.log("done");
    }
    );
```

- instale dependencias.
- use uno de los modos de arranque y pruebe.

# Boot modes

- ## boot with build

  - Consideraciones importantes :

    - utiliza el proyecto de pruebas `test-packer`
    - si es la primera vez que corres el Widget en tu maquina debes ejecutas el comando `npm link` esto nos permite crear un enlace simbolico global al build de la libreria
    - antes de correr el servidor desarrollo debe ejecutar `npm run build:watch` que instala la biblioteca en el packege.json a la vez que corre un build observable de la libreria
    - en otra consola ejecuta cualquiera de los siguientes scripts de acuerdo al entorno que desea apuntar:

    ```json
      `start:test-dev`
      `start:test-qa`
      `start:test-stag`
      `start:test-prod`
    ```

    - NOTA: de esta forma no solo recargara automáticamente los cambios de la app tambien los de la libreria.

    "dependencies": {
    "my-lib": "file:dist/my-lib",
    },

  - ## boot with pack

    - se utiliza el comando `npm run start:lib` en un entorno local de desarrollo y por defecto se habilitará la url `http://localhost:9090/` y ejecutara el proyecto de pruebas `test-packer`.

    "dependencies": {
    "my-lib": "file:dist/my-lib/my-lib-0.0.1.tgz",
    },

    - NOTA-1: de esta forma solo recargara los cambios de la app y no los de la libreria para lo que tendria que ejecutar el comando cada vez que cambie algo en su desarrollo
    - NOTA-2: puede crear 4 scripts para cada entorno si asi lo desea.

# Library packaging generation (optional)

- Para generar la librería se ejecuta el comando `npm run pack:lib`, la cual generará el archivo `payment-methods-0.0.1.tgz` dentro de la carpeta `dist\my-lib`de la raiz del proyecto. Nota: package de la libreria sin publicar de forma local. [Documentacion](https://dev.azure.com/sistecredito/LuegopaGO/_git/lpg-ang-front-portal-lpg-credinet?path=/projects/payment-methods/README.md&_a=preview)

```json
📁dist/
  |
  ├─📁my-lib/
  |   ├─my-lib-0.0.1.tgz
```

# Buils

- ## Build Sandbox

  -Crea widget de pruebas en el directorio 📦dist/📂test-packer para usarlo en una aplicacion de pruebas en los diferentes entornos; estos son los comandos para cada entorno:

  ```json
  `sandbox:dev`, => reemplaza en environment por environment.ts
  `sandbox:qa`, => reemplaza en environment por environment.qa.ts
  `sandbox:stag`, => reemplaza en environment por environment.stag.ts
  `sandbox:prod`, => reemplaza en environment por environment.prod.ts
  ```

  usando como empaquetador final el proyecto de pruebas `test-packer` el cual importa el proyecto ('libreria') `payment-methods`.

- ## Build prod

  -Crea widget en el directorio 📦dist/📂prod-packer listo para distribución en los diferentes entornos; estos son los comandos para cada entorno:

  ```json
  `npm run build-dev`, => reemplaza en environment por environment.ts
  `npm run build-qa`, => reemplaza en environment por environment.qa.ts
  `npm run build-stag`, => reemplaza en environment por environment.stag.ts
  `npm run build-prod`, => reemplaza en environment por environment.prod.ts
  ```

  usando como empaquetador final el proyecto `prod-packer` el cual importa el proyecto ('libreria') `payment-methods`.

  - Consideración importante=>

    - build por defecto => se construye con la configuracion por defecto webpack de angular.

      angular.json =>

    ```json
    "builder": "@angular-devkit/build-angular:browser",
    ```

    a su vez se concatena con la dependencia `concat-files`, configuracion en el archivo raiz concat.js

    - build opcional => puedes crear la construccion manual de webpack usando =>

    angular.json =>

    ```json
    "builder": "@angular-builders/custom-webpack",
    "options": {
      "customWebpackConfig": {
        "path": "./webpack.config.js",
      },
    }
    ```

    construye y concatena el widget usando la configuracion del archivo raiz webpack.config.

# Services and interceptor

- el proyecto incluye un servicio inerceptor con el codigo necesario para autenticar y refrescar JWT. en los proyectos raiz puede dirigirse a las carpetas de servicios/authentication/interceptor.service.ts y configurar el header que requiera
- en la libreria `my-lib` encontrara un servicio de ejemplo el cual puede modificar a gusto de acuerdo a los requerimientos del codigo de la misma, al igual que agregar mas servicios si asi lo dispone.
- para generar nuevos servicios o componentes remitase a `Code scaffolding` alli encontraras los comandos necesarios para el CLI.

## Code scaffolding

- Genera Componente
  - `ng g c components/nombre-componente --project=nombre-proyecto`
- Genera Servicio
  - `ng g s services/nombre-servicio --project=nombre-proyecto`

## Running unit tests

- La herramienta de pruebas unitarias con las que cuenta angular estan basadas en el framework [Jasmine](https://jasmine.github.io/) y el Corredor de pruebas [Karma](https://karma-runner.github.io/latest/index.html). cada vez que se cree un elemento con el `ng generate` es posible que se genere un archivo sufijado con `*.spec.ts` de pruebas, Para correr una prueba unitaria se debe ejecutar el comando de `ng test` esto lanzara un navegador donde se mostrara el estado de las pruebas, para ver la covertura de codigo es necesario adiciónar a ese commando el argumento `--code-coverage`, ejemplo: `ng test --code-coverage`.
  - importante aclarar que con el comando anterior se correran pruebas solo en la libreria, si desea seleccionar un proyecto especifico `ng test --code-coverage --project=nombre-proyecto`

## Running end-to-end tests

- Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Tools

- requeridas:
  - Angular CLI v=> 14.0.2
  - npm v=> 16.13.1
- opcionales:
  - prettier
  - eslint
  - compodoc
- se recomienda IDE (Visual Studio Code)

# Create widget from scratch

- `Step by Step => Commands :`

  - ng new `name-app-empty` --no-create-application
  - cd `name-app-empty`
  - ng generate library `my-lib`
  - ng g application `name-app-prod`
  - ng g application `name-app-test` (optional)

  NOTA : debe importar app.module de la library en el app.module de los proyectos raiz para su integracion y comunicación

# JS import widget code example

- script

```json
    const newScript = document.createElement('script')
    newScript.setAttribute('src', 'url widget')
    document.head.appendChild(newScript)
```

- load

```json
    const newDiv = document.createElement('selector-widget') as any
    newDiv.addEventListener('data-recibida', { saludo: 'hola' });
    newDiv.message = 'data-enviada'
    document.getElementById('widget-container')?.appendChild(newDiv)
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
