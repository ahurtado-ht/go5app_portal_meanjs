'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'public/lib/bootstrap/dist/css/bootstrap.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.css',
        'public/lib/leaflet/dist/leaflet.css',
        'public/lib/leaflet.markercluster/dist/MarkerCluster.css',
        'public/lib/leaflet.markercluster/dist/MarkerCluster.Default.css',
        // #region [02] saiku-embed (css)
        '_s/js/saiku/plugins/CCC_Chart/tipsy.css',
        '_s/saiku.css',
        // #endregion [02]
        // #region [03] saiku-adds / jquery (css)
        '_s/css/jquery/spectrum.css',
        '_s/css/jquery/jquery-ui.css',
        '_s/css/saiku/src/giveitsomestyle.css',
        '_s/js/fancybox/jquery.fancybox.css',
        '_s/js/jquery/jquery.contextMenu.css',
        // #endregion [03]
        // #region [04] saiku-adds / saiku (css)
        '_s/css/saiku/src/styles.css',
        '_s/css/saiku/src/saiku.table.css',
        '_s/css/saiku/src/saiku.dropzone.css'
        // #endregion [04]
      ],
      js: [
        'public/lib/angular/angular.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/angular-ui-utils/ui-utils.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/angular-file-upload/angular-file-upload.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
        'public/lib/leaflet/dist/leaflet.js',
        'public/lib/angular-leaflet-directive/dist/angular-leaflet-directive.js',
        'public/lib/leaflet.markercluster/dist/leaflet.markercluster.js',
        // #region [01] saiku-embed (js)
        // //  jQuery 1.7.2 , jQuery UI 1.8.14
        '_s/js/jquery/jquery.min.js',
        '_s/js/jquery/jquery-ui.min.js',
        // //  BACKBONE
        '_s/js/backbone/underscore.js',
        '_s/js/backbone/json2.js',
        '_s/js/backbone/backbone.js',
        // //  CCC2
        '_s/js/saiku/plugins/CCC_Chart/def.js',
        '_s/js/saiku/plugins/CCC_Chart/protovis.js',
        '_s/js/saiku/plugins/CCC_Chart/protovis-msie.js',
        '_s/js/saiku/plugins/CCC_Chart/cdo.js',
        '_s/js/saiku/plugins/CCC_Chart/pvc.js',
        '_s/js/saiku/plugins/CCC_Chart/jquery.tipsy.js',
        '_s/js/saiku/plugins/CCC_Chart/tipsy.js',
        // //  SAIKU EMBEDDED LIBRARIES
        '_s/js/saiku/render/SaikuRenderer.js',
        '_s/js/saiku/render/SaikuTableRenderer.js',
        '_s/js/saiku/render/SaikuChartRenderer.js',
        '_s/js/saiku/embed/SaikuEmbed.js'
        // #endregion [01]

      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/css/*.css'
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ],
    img: [
      'modules/**/*/img/**/*.jpg',
      'modules/**/*/img/**/*.png',
      'modules/**/*/img/**/*.gif',
      'modules/**/*/img/**/*.svg'
    ],
    views: ['modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: ['gruntfile.js'],
    gulpConfig: ['gulpfile.js'],
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    sockets: 'modules/*/server/sockets/**/*.js',
    config: ['modules/*/server/config/*.js'],
    policies: 'modules/*/server/policies/*.js',
    views: ['modules/*/server/views/*.html']
  }
};
