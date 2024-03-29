// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	title: 'Dv Environment Heading',
	apiURL: 'https://apiexample.com',
	APP_OAUTH_CLIENT_ID:'WLRqjxzEQ7Zd9D7jCwiYjs28',
	API_KEY: '1234_API_KEY_5678',
	APP_BASE_URL:'http://web.regionancash.gob.pe',
	// deploy local
  // APP_BASE_URL:'http://localhost:8000',
  // deploy web y local
  BASE_HREF: '/admin/complaint',
  // android
  // BASE_HREF:'/',
  APP_OAUTH_URL: 'https://web.regionancash.gob.pe/api/oauth',

};

/*
 var client_id = process.env.REACT_APP_OAUTH_CLIENT_ID;
      var oauth_url = process.env.REACT_APP_OAUTH_URL;
      window.location.href = `${oauth_url}/authorize?response_type=code&client_id=${client_id}&scope=profile`;

 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
