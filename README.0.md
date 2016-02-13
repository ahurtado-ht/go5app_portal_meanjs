--------------------------------
APLICACION (ACCESOS CON MEAN.JS)
--------------------------------
- para el caso, el portal esta hecho con meanjs
- mejor en linux para no tener problemas de dependencias

instalar node.js (5.6.0)
cd /.tools
wget https://nodejs.org/dist/v5.6.0/node-v5.6.0-linux-x64.tar.xz
cp node-v5.6.0-linux-x64.tar.xz /.work
cd /.work
tar -xvf node-v5.6.0-linux-x64.tar.xz
rm node-v5.6.0-linux-x64.tar.xz

luego editar variables entorno
sudo vi /etc/profile
export PATH=/.work/node-v5.6.0-linux-x64/bin:$PATH:

source /etc/profile

despues instalar atom (bajar el rpm e instalarlo)
luego

npm install -g bower
npm install -g grunt-cli
npm install -g yo
npm install -g gulp
#
npm install -g generator-meanjs
#
cd /.apps
git clone https://github.com/meanjs/mean.git mean
#
hacer un fork de meanjs y descargar ese fork
git clone https://github.com/ahurtado-ht/go5app_portal_meanjs.git

# se requiere una db mongo instalada

# se requiere ruby&sass

# configurar librerias del scaffold
cd go5app_portal_meanjs
npm install
bower install

confgrar archivo config/env/development con el nombre de la db (go5portal-dev)


# subir la app
grunt

# crear un usuario
admin
Welcoome10@


-------------------
proxies de cliente rest: restler






-----------------------------
OTROS OBSERVADOS - METEOR
-----------------------------
APLICACION (ACCESOS CON METEOR-ADMIN)
--------------------------------
se puede conseguir informacion en
- https://atmospherejs.com/yogiben/admin
- http://learn.meteorfactory.io/the-story-of-meteor-admin/
existe otra que se llama houston
- https://github.com/gterrono/houston
y otra que se llama orion
- http://orionjs.org/
otra para iniciar sin la parte administrativa
- http://learn.meteorfactory.io/meteor-starter/ (meteor starter)
uno con consejos para la parte administrativa
- https://themeteorchef.com/recipes/building-a-user-admin/

el scaffold inicial contiene lo siguiente:
	meteor add iron:router
	meteor add dburles:collection-helpers
	meteor add aldeed:collection2
	meteor add accounts-base accounts-password
	meteor add alanning:roles
	meteor add twbs:bootstrap
	meteor add fortawesome:fontawesome
	meteor add yogiben:admin
para descargar una app basica con administracion:
	C:\.apps\e.Hitech\01_ProyectoBonos\03_construccion
	git clone https://github.com/yogiben/meteor-starter.git go5anlyt_geo_meteor2
	cd go5anlyt_geo_meteor2
	meteor
usa coffeescript. tambien tienen algo con docker
