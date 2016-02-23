=================================
APLICACION (ACCESOS CON MEAN.JS)
=================================
- para el caso, el portal esta hecho con meanjs
- mejor en linux para no tener problemas de dependencias

-----------------
HERRAMIENTAS BASE
-----------------

# instalar node.js (5.6.0)
cd /.tools
wget https://nodejs.org/dist/v5.6.0/node-v5.6.0-linux-x64.tar.xz
cp node-v5.6.0-linux-x64.tar.xz /.work
cd /.work
tar -xvf node-v5.6.0-linux-x64.tar.xz
rm node-v5.6.0-linux-x64.tar.xz

# editar variables entorno
sudo vi /etc/profile
## region [01] add env vars
export PATH=/.work/node-v5.6.0-linux-x64/bin:$PATH:
## endregion [01]

source /etc/profile

probar
	node --version
	npm --version

# instalar librerias desarrollo

npm install -g bower
npm install -g grunt-cli
npm install -g yo
npm install -g gulp
# instalar generator de mean
npm install -g generator-meanjs
#

# instalar atom (bajar el rpm e instalarlo)



# instalar db mongo
  [ubuntu] (http://docs.mongodb.org/master/tutorial/install-mongodb-on-ubuntu/)
	[redhat] (https://docs.mongodb.org/manual/tutorial/install-mongodb-on-red-hat/)

	### crear repo
	# crear el archivo de config

	sudo vi /etc/yum.repos.d/mongodb-org-3.2.repo

	# con el siguiente contenido

	[mongodb-org-3.2]
	name=MongoDB Repository
	baseurl=https://repo.mongodb.org/yum/redhat/7/mongodb-org/3.2/x86_64/
	gpgcheck=0
	enabled=1

  # instalar
	sudo dnf install -y mongodb-org

# subir mongo como servicio /con el sistema (root)

sudo service mongod start
sudo chkconfig mongod on

# dependencias linux

sudo dnf -y install  gcc-c++ gcc python
sudo dnf -y install  make
sudo dnf -y install  git

# se requiere ruby&sass


-----------------
DESCARGAR PROYECTO
-----------------
# clonar proeycto
cd /.apps
git clone https://github.com/ahurtado-ht/go5app_portal_meanjs.git

# configurar librerias del scaffold
cd go5app_portal_meanjs
npm install
bower install

confgrar archivo config/env/development con el nombre de la db (go5portal-dev)

# subir la app
grunt --force

# crear un usuario
admin
Welcoome10@



-----------------
SCAFFOLD
-----------------

cd /.apps
git clone https://github.com/meanjs/mean.git mean
#
hacer un fork de meanjs y descargar ese fork
git clone https://github.com/ahurtado-ht/go5app_portal_meanjs.git



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

-----------------------------
REFERENCIAS
-----------------------------
- proxies de cliente rest: restler
