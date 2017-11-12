// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBbhShIwBB7R_jmmw2Au35YOCHRFB7jtXc",
    authDomain: "repairtrackr.firebaseapp.com",
    databaseURL: "https://repairtrackr.firebaseio.com",
    projectId: "repairtrackr",
    storageBucket: "repairtrackr.appspot.com",
    messagingSenderId: "213948391371"
  }
};
