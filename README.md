1. En la carpeta data_base se encuentra el archivo de exportacion de la base de datos usada
 "dump-coytexdb-202106261610".
dentro de la misma carperta con el nombre de "Script-punto2"  se encuentran los sripts para lasconsultas 
del punto 2

2. en la carpetade front_html se encuentran los archivos para el front

3. en la base de datos tener en cuenta solo las tablas:
"clientes_clientes"
"productos_productos"
"pedidos_pedidos"
"cantidad_cantidad"
las otras son generadas por django

4. para ejecutar la api en django tener instalado python y correr los siguientes comandos:	
nota : cambiar en el archivo coytex/settings.py  en la linea 86 las credenciales para la
base de datos que esta usando,solo sebe crear la base de datos los comandos a continuacion
crean las tablas a traves del orm
	
	1.pip install -r requirements.txt
	2.python manage.py makemigrations
	3.python manage.py migrate
	4.python manage.py runserver 	