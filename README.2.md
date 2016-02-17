-------------------
integracion app con leaflet
-------------------

 bower install leaflet --save
 bower install angular-leaflet-directive --save
 bower install leaflet.markercluster --save
 #
 
editar config/assets/{default|production}.js con la ubicacion de la css y js de leaflet,plugin y directiva
editar .jshintrc para adicionar "L" como variable global
editar modules/core/client/app/config.js para adicionar la directiva

editar express.js para adicionar mapeo de recursos de saiku
los recursos de saiku-ui se copian al directorio "_s"



tambien adiconar el mapeo CORS
  -> CORS header 'Access-Control-Allow-Origin'
  -> ip vm: 10.0.2.15




El instalador de saiku se descarga de

  http://www.meteorite.bi/downloads/saiku-latest.zip
  subdirectorio tomcat\webapps\ROOT

  cp /.tools/saiku-latest.zip .
  unzip saiku-latest.zip  (crea el directorio saiku-server)

o tambien dentro del subproyecto saiku-ui del repositorio git

  https://github.com/OSBI/saiku.git
  subdirectorio saiku-ui


Los partials apra cargar los scripts de saiku no se unen completamente
queda entonces por deciddir
- si se cargan desde mean directamtente, resolviendo todas las librerias *
- si se usa ocLazyLoad

---------------------------------
PRERREQUISITOS

oracle database xe 11gR2
  192.168.0.12:1521:xe
  user:anlyt
  pass:anlyt

saiku server: instalado y corriendo
  192.168.0.12:8080
  user:admin
  pass:admin


- configurar saiku (dataset y cubo)
- configurar saiku (folder)

  /ROOT/MISPESOS

- configurar saiku (reportes)

  Q002_BonosRedimidos










-----------------------------
REFERENCIAS
-----------------------------
- mean y leaflet (articulo para incluir directiva)
  http://petermcmillan.com/articles/mean-stack-and-leaflet-my-notes
- saiku embed y personalizaciones
  http://sauce-dallas.blogspot.com.co/2014/05/saiku-analytics-ui-customization-and.html
