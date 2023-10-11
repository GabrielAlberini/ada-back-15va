# client.js

- es el index.js
- valida los datos que pasa el usuario
- le designa esa "petición" al server

# server.js

- recibir la peticion del usuario
- delegar las acciones al controlador
- devolverle al cliente lo que el controlador me retorna

# controller.js

- ejecutar funciones del model en base a lo que me ejecuta el server
- le retorna al server el resultado del model
- el resultado del model puede ser éxitoso y no

# model.js

- modificar la base de datos
- retorna los resultados a controller.js

## ACCIONES QUE EL USUARIO PODRIA HACER

- getUsers -> debería mostrar en consola la LISTA de usurios (sin la contraseña)
- --getUsers
- getUserInfo -> debería mostrar en consola la información de todo el usuario
- createNewUser -> debería crear un nuevo usuario si es que este ya no existe
- deleteUser -> deberia borrar un usuario en caso de que exista
- login -> debería logear a un usuario en caso de que este exista
