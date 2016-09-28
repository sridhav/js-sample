module.exports = {
  bundle: {
    // main: {
    //   scripts: [
    //     './content/js/foo.js',
    //     './content/js/baz.js'
    //   ],
    //   styles: './content/**/*.css'
    // },
    vendor: {
      scripts: [
                './node_modules/@angular/common/bundles/common.umd.min.js', 
                './node_modules/@angular/core/bundles/core.umd.min.js',
                './node_modules/@angular/http/bundles/http.umd.min.js',
                './node_modules/@angular/testing/bundles/testing.umd.min.js',
                './node_modules/bootstrap/dist/js/bootstrap.min.js',
                './node_modules/jquery/dist/jquery.min.js'
              ]
     }
  }
};