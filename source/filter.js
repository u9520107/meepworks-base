import RequireFilter from 'meepworks/require-filter';

/**
 *  es6 hoists imports. To ensure the filter is active before importing more code,
 *  we make the filter into a separate module.
 */
let requireFilter = new RequireFilter({
  fileRoot: __dirname,
  urlRoot: '/build'
});
requireFilter.filter('.css!');
