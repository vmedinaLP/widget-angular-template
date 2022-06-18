# General documentation

El proyecto utiliza Compodoc en la administración de documentacion, para generarla se ejecuta el comando `npm run compodoc` y crea una carpeta con el nombre `docs` a la vez que la abrira y servira por defecto en la url `http://localhost:8080/`, NOTA: allí podras registrar la documentacion de cada uno de los elementos de tu codigo la igual que la cobertura.

# Widget structure

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
┃ ┃ ┃ ┃ ┗ 📂interceptors
┃ ┃ ┣ 📂assets
┃ ┃ ┣ 📂environments
┗ 📂test-packer  => proyecto empaquetador de pruebas
┃ ┣ 📂src
┃ ┃ ┣ 📂app  => application
┃ ┃ ┃ ┣ 📂components
┃ ┃ ┃ ┣ 📂services
┃ ┃ ┃ ┃ ┣ 📂authentication
┃ ┃ ┃ ┃ ┗ 📂interceptors
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

# MyLibApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build Sandbox

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Tools

- Angular v=> CLI 14.0.2
- npm v=> 16.13.1

# Implementation Template

# Create widget from scratch

- `Step by Step => Commands :`

  - ng new `name-app-empty` --no-create-application
  - cd `name-app-empty`
  - ng generate library `my-lib`
  - ng g application `name-app-prod`
  - ng g application `name-app-test` (optional)

  NOTA : debe importar app.module de la library en el app.module de los proyectos raiz para su integracion y comunicación

# JS import widget code example

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
