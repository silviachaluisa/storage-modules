# Local Storage<br>
Almacenamiento web o conocido como almacenamiento DOM, es una API de Javascript standar proporcionada por los navegadores web
que permiten que los sitios web almacenene datos persistentes en los dispositivos de los usuarios de manera similar a las cookies, pero con mucha mayor capacidad.
![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/8428b89d-609d-4169-835a-bca7824b94fd)
 Fig 1. Página web de la ESFOT
 
 ![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/41ff109f-5e96-4e95-a1f3-7320cf9fde21)
 Fig 2. API de Pokémon

Guardar un Objeto en el LocalStorage.<br>
![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/224fbdea-250b-4e73-8839-a841d6f2a829)
Fig 3. Fetch datos API

La solicitud fetch se dirige a la PokeAPI para obtener información sobre el Pokémon con el ID 1 (Bulbasaur). Una vez que se recibe la respuesta, se convierte a formato JSON y se extrae la información relevante del Pokémon, como su nombre, tipo y URL de imagen. Luego, se llama a la función guardarLocalStorage para almacenar 
estos datos en el localStorage del navegador bajo la clave 'Primer Pokemon'.
![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/61125de0-3443-4a1a-9143-bfb826a15985)
Fig 4. Guardar datos en local storage
 


La solicitud fetch se dirige a la PokeAPI para obtener información sobre el Pokémon con el ID 25. 
Una vez que se recibe la respuesta, se convierte a formato JSON y se extrae la información relevante del Pokémon, como su nombre, tipo y URL de imagen. Luego, 
se llama a la función guardarLocalStorage para almacenar estos datos en el localStorage del navegador bajo la clave 'Pokemon Snorlax'.
![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/1b0e4721-a128-49e6-ba55-9e8a17578de0)
 Fig 5. Guardar otro valor

La solicitud fetch se dirige a la PokeAPI para obtener información sobre el Pokémon con el ID 144. Una vez que se recibe la respuesta, se convierte a formato JSON y se extrae la información relevante del Pokémon, como su nombre, tipo y URL de imagen. Luego, se llama a la función guardarLocalStorage para almacenar estos datos en el localStorage del navegador bajo la clave 'Pokemon Legendario:'.

![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/d39b4ee9-1467-4b3a-8ed9-92c508551f6d)
 Fig 6. Guardar más datos en local storage


Como podemos observar todas las peticiones se quedan guardadas en el Local Storage.
![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/f975cef5-c350-469b-b8d1-c64a1cccdf8b)

 Fig 7. Vista de las solicitudes
 ![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/84037d68-fdcc-4e26-abe6-b13ba38a0b7f)
 Fig 8. Lugar de almacenamiento del local storage en el navegador


Obtener un Objeto en el LocalStorage.

Función obtenerLocalStorage. Cuando esta función se ejecuta, realiza lo siguiente:

Intenta obtener un elemento del localStorage utilizando la clave "Pokemon Legendario:".

![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/68a2f8f7-da14-4f60-aafc-b5d1638eabde)

 Fig 9. Función para obtener los datos enviados


En cambio, si no encuentra la clave del como en este caso “Pokemon Especial:” la función devuelve no hay data.
![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/9a68eff6-ac36-4397-897a-7a9cde64efdf)
 Fig 10. Dato no encontrado



Eliminar un Objeto en el LocalStorage.
![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/d953f8ad-73b4-4c07-bfa9-cec8a4c77241)
 Fig 11.  Eliminar el almacenamiento


1.	La función eliminarlocalStorage está definida utilizando una función de flecha (=>) en JavaScript.
2.	Dentro de la función, hay una expresión condicional que verifica si no existe una clave llamada "Pokemon Pikachu" en el localStorage. Esto se hace utilizando el método localStorage.key(), que devuelve 
3.	el nombre de la clave en el índice proporcionado. En este caso, estamos verificando si no existe una clave llamada "Pokemon Pikachu".
4.	Si la expresión condicional evalúa como verdadera (es decir, si no hay una clave llamada "Pokemon Pikachu"), se ejecuta el bloque de código después del signo de interrogación? En este caso, simplemente imprime "No hay clave" en la consola.
5.	Si la expresión condicional evalúa como falsa (es decir, si hay una clave llamada "Pokemon Pikachu" en el localStorage), se ejecuta el bloque de código después de los dos puntos:.
6.	En este caso, se elimina la entrada correspondiente al "Pokemon Pikachu" del localStorage utilizando el método localStorage.removeItem().
   ![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/2322245e-5356-4bda-91e5-17150f97e28c)
   Fig 12. Ejecutar y eliminar


Y como podemos ver en el Local Storage ya no está la clave Pokemon Pikachu que ya está eliminada.
![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/c422a90f-6344-478d-afb3-0401a5635dea)
Fig 13. Verificar la función eliminar


# Modulos<br>

Para realizar la práctica, procedemos a crear una página sencilla de un ejemplo de login.
![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/77093237-783e-469c-bb0e-eb256dd22a30)
 Fig 14. Página creada para el laboratorio

Creamos el código HTML de un login sencillo, para esta práctica utilizaremos datos quemados y utilizaremos módulos para poder conectar diferentes archivos .js
![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/24afe257-ddd7-49a4-9323-30703b88a70a)
Fig 15. Código HTML de la página

Añadimos un poco de estilo con otro archivo .css  
![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/e119baf5-ecfd-49de-9094-3fc7d8def881)
Fig 16. Código CSS

Al acabar el login, tendremos algo así, ahora lo que debemos hacer, es darle funcionalidad para ello necesitaremos crear archivos .js para poder crear un login con datos quemados.
![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/d218dfba-203e-41dd-a15c-8aa3a7bf84e3)
Fig 17. Vista de la página para un login

Se crea dos archivos, uno para poder dar los datos quemados y otro para poder validarlos.
El primer archivo son los datos del   
usuario, y para poder utilizar el .js en otro archivo, utilizamos módulos, la primera palabra clave que utilizamos es “export”
![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/477cf277-e5e1-4476-9021-86585de66113)
Fig 18. Archivo con variables exportadas

La palabra clave “export”, se utiliza para exportar funciones, variables u otras cosas, desde un módulo para que puedan ser utilizados en otros archivos.
En el otro archivo que creamos, procedemos a crear una validación de que los datos que se registran sean correctos, para ello interactuamos en el DOM para poder obtener los 
valores del usuario y la contraseña, al utilizar estas tecnologías, procedemos a importar el archivo anterior con la palabra clave “import”
![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/529fb525-2158-4245-af68-dec1031b816e)
Fig 19. Importar variables de credenciales
“import” permite acceder y utilizar códigos que han sido exportados previamente de otros archivos para poder utilizarlos en el proyecto actual. 
 Fig 20. Verificación de los datos con los módulos exportados
Al ya poder utilizar código de otros archivos, procedemos a llamar el archivo principal .js en el archivo HTML de la siguiente manera:
![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/fa434fd4-b7db-4162-8f65-cd47584e9ae2)
Fig 21. Llamado del archivo
Y así podemos crear un login utilizando módulos que nos ayudan a reutilizar códigos de otros archivos 
![image](https://github.com/silviachaluisa/storage-modules/assets/133398724/ceee5366-16fe-42e5-80b2-0ae3ad47b017)

Fig 22. Prueba de la ejecución

