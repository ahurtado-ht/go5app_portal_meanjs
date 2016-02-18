'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'public/lib/bootstrap/dist/css/bootstrap.min.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
        'public/lib/leaflet/dist/leaflet.css',
        'public/lib/leaflet.markercluster/dist/MarkerCluster.css',
        'public/lib/leaflet.markercluster/dist/MarkerCluster.Default.css',
        // #region [02] saiku-embed (css)
        '_s/js/saiku/plugins/CCC_Chart/tipsy.css',
        '_s/saiku.css'
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
        'public/lib/angular/angular.min.js',
        'public/lib/angular-resource/angular-resource.min.js',
        'public/lib/angular-animate/angular-animate.min.js',
        'public/lib/angular-messages/angular-messages.min.js',
        'public/lib/angular-ui-router/release/angular-ui-router.min.js',
        'public/lib/angular-ui-utils/ui-utils.min.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'public/lib/angular-file-upload/angular-file-upload.min.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
        'public/lib/leaflet/dist/leaflet.js',
        'public/lib/angular-leaflet-directive/dist/angular-leaflet-directive.min.js',
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
      ]
    },
    css: 'public/dist/application.min.css',
    js: 'public/dist/application.min.js'
  }
};
