# PokemonList

The PokemonList application displays a listing containing all Pokémon. It has the favorite feature of them and a display of the details of each Pokémon.

# Development

### Starting

* Preparing the environment - Prerequisites:

The prerequisites for the project are: node 6.9.0 or higher and npm 3 or higher

To prepare the environment, run:

```
npm install -g @angular/cli
```

To install the dependencies, run:

```
npm i
```

## Running the project in development mode:

To run in development mode, run:

```
ng serve
```

After the command is executed, access the browser at: http://localhost:4200 to access the application.

## Performing tests:

To perform tests, run:

```
ng test
```

## Building the project for production:

To build the project for production, run:

```
ng buid --prod
```

After the command finishes running the artifacts to deploy in the / dist directory.

## Tools used

* NodeJs - version 11.8.0
* Angular - version 7.3.0
* TypeScript - version 3.2.2
* [Angular CLI](https://github.com/angular/angular-cli) - Angular Command Line Interface - version 7.3.0
* [angular-2-local-storage](https://www.npmjs.com/package/angular-2-local-storage/) - Caching service - version 3.0.0
* Protractor, Karma and Jasmine - for tests
* [PokeApi](https://pokeapi.co/) - Api used to get pokemons

## Architecture

The application was based on the following programming principles: DRY, SOLID and Clean Code.
The visual part was made using CSS3 with SCSS preprocessor.

* Models:

Pokemon: class that has Pokemon.

Page: class that has the page of the page being displayed.

PokemonAbility: class that has the abilities of the Pokémon.

PokemonType: class that has the types of the Pokémon.

Page: class that has the page of the page being displayed.

* Components

Navbar: Creates the top of the application and menu.

AppComponent: Create an application and display your pages.

PokemonList: Creates the Pokémon listing.

PokemonDetail: Creates Pokémon detailing.

Pagination: Creates the page applied to the Pokémon listing.

* Pages:

PokemonList: This page lists all of the Pokémon containing pagination and detailing them.

* Services:

PokemonDataService: Query the API PokéAPI returning all the registered endpoints.

## TODO
* Transform an application into a PWA;
* E2E implant tests;
