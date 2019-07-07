import { NgxUiLoaderConfig } from 'ngx-ui-loader';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ngxUiConfig: {
    bgsColor: '#2ef700',
    bgsOpacity: 0.5,
    bgsPosition: 'bottom-right',
    bgsSize: 60,
    bgsType: 'rectangle-bounce',
    blur: 7,
    fgsColor: '#FFAA00',
    fgsPosition: 'center-center',
    fgsSize: 60,
    fgsType: 'rectangle-bounce',
    gap: 24,
    logoPosition: 'center-center',
    logoSize: 120,
    // logoUrl: 'assets/images/logo.jpg',
    masterLoaderId: 'master',
    overlayBorderRadius: '0',
    overlayColor: 'rgba(255,254,254,0.87)',
    pbColor: '#00ACC1',
    pbDirection: 'ltr',
    pbThickness: 5,
    hasProgressBar: true,
    text: '',
    textColor: '#000000',
    textPosition: 'center-center',
    // threshold: 500
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
