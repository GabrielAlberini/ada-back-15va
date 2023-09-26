# JSON CREATOR

Desarrollar un servidor TCP/IP que permita crear un archivo JSON y lo rellene automáticamente según parámetros que envíe un usuario desde client.js.
El módulo client.js va a preguntar al usuario por información sobre series de televisión, y según esta información el servidor se va a encargar de enviar todos los datos correspondientes a controller.js, para que éste derive a model.js las solicitudes y así procesar y crear el JSON.

Al ejecutar client.js, el usuario tendrá lista la terminal para enviar comandos. Tiene tres opciones inicialmente:

    - --updateDB
    - --eraseDB
    - --showDB

Si escribe --updateDB, client.js mostrará al usuario un ciclo de preguntas. Éstas son:

    - Ingrese el nombre de la serie:
    - Ingrese la fecha de estreno:
    - Ingrese el nombre completo de tres actores importantes del reparto:
    - Ingrese el rating:
    - Ingrese el género:
    - ¿Desea seguir ingresando datos? (si | no)

Cada ciclo de preguntas va a conformar un objeto dentro de la collection database.json. Una vez que el usuario ingresó todo, se le debe preguntar si quiere continuar o no, en el caso de que escriba "si", el ciclo se debe repetir y conformar otro objeto. Si escribe "no", entonces se debe agregar todos los objetos creados a la collection, sobreescribiéndola. Una vez que el proceso se haya terminado correctamente, devolver un mensaje al usuario para notificarlo.

Si el usuario escribe --eraseDB, se debe borrar toda la base de datos, dejándola sólo con un array vacío: []. Devolver un mensaje para notificar al usuario.

Si el usuario escribe --showDB, imprimir en la consola toda la data contenida en la base de datos.

Si el usuario ingresa nuevamente --updateDB, el sistema debe continuar el trabajo desde donde lo dejó, sin modificar los datos previamente cargados.

# IMPORTANTE

    - Mantener el orden del código, respetar indentación.
    - Nombrar bien todos los elementos, sean variables, constantes, funciones, objetos, etc...
    - Asegurar de que todas las funciones tengan valores de retorno, a excepeción de main.
    - Verificar que todas las funciones hagan lo que tienen que hacer, y sólo esto, ni mas ni menos.
    - Respetar los roles de cada módulo.
