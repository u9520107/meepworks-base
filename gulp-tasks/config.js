import gulp from 'gulp';


export const paths =  {
  source: 'source',
  build: 'build',
  bundle: 'bundle'
};

export const babelOptions = {
  modules: 'common',
  optional: ['runtime']
};


export const bundles = {
  // 'base': [
  //   'react',
  //   'co',
  //   'meepworks/client-app-driver',
  //   'meepworks/dispatcher',
  //   'meepworks/store-base',
  //   'meepworks/action-base',
  //   'meepworks/locale',
  //   'meepworks/stores/router-store',
  //   'meepworks/stores/route-table',
  //   'meepworks/stores/locale-store',
  //   'meepworks/actions/detect-intl',
  //   'meepworks/actions/load-locales',
  //   'meepworks/actions/navigate',
  //   'meepworks/actions/set-approot',
  //   'meepworks/actions/set-components',
  //   'meepworks/actions/set-locale',
  //   'meepworks/actions/set-routes',
  //   'meepworks/uuid',
  //   'meepworks/tmpl',
  //   'meepworks/styles',
  //   'greasebox',
  //   'css'
  // ]
};

gulp.task('config', ()=>{
  console.log(JSON.stringify({
    paths,
    babelOptions,
    bundles
  }, null, 2));
});
