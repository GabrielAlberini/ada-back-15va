# --- CONSIGNA ---

Desarrollar una aplicación que corra en un servidor TCP y que permita el registro, validación, obtención de información y eliminación de usuarios en una base de datos local en formato JSON.

El usuario interactúa con client.js pra acceder y manipular los datos de la DB, mediante los siguientes comandos:

► --createNewUser name <username> password <password>
" --createNewUser name gabrielalberini password test123 "
| Da de alta un nuevo usuario. El nombre y la contraseña sólo pueden estar compuestos de numeros y letras.

► --login name <username> password <password>
| Verifica las coincidencias en la base de datos y devuelve el mensaje correspondiente.
| Si el usuario se logueó correctamente, el usuario debe permanecer logueado.

► --getUsers
| Devuelve una collection con todos los usuarios con sus respectivos nombres y IDs, sin las contraseñas.

► --getUserInfo id <userid>
" --getUserInfo id jnjd1kj2-d12d1-12d21d"
| Devuelve toda la información relativa al usuario cuyo ID es el indicado por parámetro.
| Para poder usar este comando, el usuario debe estar logueado.
| Si no está logueado, se le debe pedir nombre de usuario y contraseña, y validar la información para darle acceso.

► --deleteUser id <userid>
" --deleteUser id jnjd1kj2-d12d1-12d21d"
| Elimina al usuario cuyo ID es el indicado por parámetro.
| Para poder usar este comando, el usuario debe estar logueado.
| Si no está logueado, se le debe pedir nombre de usuario y contraseña, y validar la información para darle acceso.

Estructura de la aplicación:

- client.js
  ► Cumple el rol de index.js. Recibe todas las solicitudes del usuario, verifica que respeten la estructura establecida por ustedes, y las deriva al server. En este proyecto, el controlador está compuesto por server.js y controller.js.

- server.js
  ► Recibe todas las solicitudes del cliente y las deriva a controller.js.  
  ► Deriva las acciones a controller.js según la solicitud y los parámetros involucrados.

- controller.js
  ► Contiene functiones get y set para indicar qué hacer a model.js.  
  ► Maneja los errores y mensajes de respuesta.

- model.js  
  ► Accede y manipula la base de datos según las indicaciones de controller.js.  
  ► Controla que los tipos de datos sean los correctos.  
  ► Retorna valor booleano false en caso de no encontrar información.  
  ► Retorna valor booleano true al finalizar proceso de validado/eliminación/registro.

- users-db.json
  ► Base de datos en formato JSON.

# --- CONSIDERACIONES GENERALES ---

Recordar inicializar el proyecto NPM y configurar bien el package.json para poder usar la sintaxis de ES Modules.

Para este proyecto, se deben usar los siguientes módulos/paquetes:

- NET
- readline-sync -> permite escribir en linea en la terminal
- nodemon (opcional)
- Crypto -> INVESTIGAR
- UUID
