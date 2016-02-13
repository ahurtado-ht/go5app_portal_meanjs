---------------------------
INTEGRACION SAIKU-APP
---------------------------
integracion por un lado de saiku para elementos geograficos
y 2: de saiku para embeber en aplicacion


------------------------------
SAIKU CHART PLUS
------------------------------
Es la priemra alternativa: es un plugin para incuri en saiku que
tiene elementos geograficos de google

para incluirlo en saiku:

  <!-- buscar el siguente ref en el archivo C:\.work\saiku-server\tomcat\webapps\ROOT\index.html -->
  <link type="text/css" href="js/saiku/plugins/CCC_Chart/tipsy.css" rel="stylesheet"/>
  <!-- adicionar esto debajo de ese renglon -->

  <!--start js SaikuChartPlus-->
  <script type="text/javascript" src="js/saiku/plugins/saiku-chart-plus/plugin.js" ></script>
  <!--end js SaikuChartPlus-->

hacer un clone del plugin:
git clone https://github.com/it4biz/SaikuChartPlus.git

luego copiar
de: SaikuChartPlus\saiku-server\saiku-chart-plus
a: C:\.work\saiku-server\tomcat\webapps\ROOT\js\saiku\plugins



REFERENCIAS
(sauku con mapas)
- http://www.redopenbi.com/group/saiku/forum/topics/tutorial-01-saiku-chart-plus-geomap-y-geochart
- http://www.sigte.udg.edu/jornadassiglibre2013/uploads/articulos_13/a26.pdf
- http://www.sigte.udg.edu/jornadassiglibre2013/uploads/presentaciones_13/p26.pdf
------------------------------
SAIKU ADICIONES
------------------------------

(saiku trucos)
http://localhost:8080/?plugin=true
http://demo.analytical-labs.com/embed/embed.html

(bolierplate para eld esarrollo de plugins)
- https://github.com/brenopolanski/saiku-plugin-boilerplate
