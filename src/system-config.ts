"use strict";

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material'
};

/** User packages configuration. */
const packages: any = {
    
};

// put the names of any of your Material components here
const materialPkgs:string[] = [
  'core',
  'checkbox',
  'button',
  'input',
  'icon',
  'tabs',
  'toolbar',
  'sidenav',
  'progress-circle'
];

const angularPackages:string[] = [
  'core',
  'common',
  'compiler',
  'forms',
  'http',
  'platform-browser',
  'platform-browser-dynamic',
  'router'
];

//angular bundles
angularPackages.forEach((pkg) => {
  packages['@angular/' + pkg] = {
    main: "bundles/" + pkg + '.umd.js'
  }
});

//angular testing bundles
angularPackages.forEach((pkg) => {
  packages['@angular/' + pkg + '/testing'] = {
    main: "bundles/" + pkg + '-testing.umd.js'
  }
});

materialPkgs.forEach((pkg) => {
  packages['@angular2-material/' + pkg] = {
    format: 'cjs',
    defaultExtension: 'js',
    main: pkg + '.js'
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/products',
  'app/user',
  'app/user-hot-deals',
  'app/user-login',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
