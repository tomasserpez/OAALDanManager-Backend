# DAN MANAGER

Este es mi primer proyecto independiente, se me solicitó generar una plataforma de gestión de personal de una organización de artes marciales.
Inicialmente este será unicamente para cinturones negros.

## Tabla de contenidos

- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Rutas API](#rutas-api)
- [Contribución](#contribución)
- [Créditos](#créditos)
- [Licencia](#licencia)

## Requisitos previos

Se necesita:
  -NodeJS 18.16.0
  -MongoDB 6.0.6

## Instalación

Se debe clonar el respositorio, posterior a esto se deberá moverse dentro y ejecutar el comando:
`$ npm i`


## Configuración

Para configurar necesitaremos primero generar la base de datos, para poder hacer esto, de forma local, ejecutaremos lo siguiente:
`$ mongosh`
`$ use oaal`
`$ db.createCollection("dans")`

Posterior a esto, dentro del directorio clonado hay un directorio llamado Mongo, nos movemos dentro de este y ejecutamos:
`$ npm i`
`$ node index.js`

Este script de node hace uso de una libreria llamada Faker, esta genera información ficticia como para poder hacer pruebas, en caso de no necesitar esto, necesitaremo unicamente cargar los datos a mano nosotros.

## Uso

Esta es la mitad del proyecto, tambien está el frontend (https://github.com/tomasserpez/OAALDanManager-Frontend) en el cual estoy trabajando.

## Rutas API

Este backend cuenta con 5 rutas

- `/`
  - Método: GET
  - Descripción: Obtiene un listado de todos los dan con su correspondiente información.
  - Ejemplo de solicitud: `curl -X GET http://localhost:3000/danes/`
  - Ejemplo de respuesta:
      [{"_id":"648fdb7fc0a3bea39978b264","nombre":"Clara","apellido":"Jacobs","sexo":"female","nroDan":7,"nroMiembro":318603,"membership":190427,"nroAF":63568,"fechaProximoExamen":"2023-01-12T03:00:00.000Z","nacionalidad":"Cuba","dni":19588326,"queDojoPertenece":"Kelly Dojo","pais":"Tonga","provincia":"California","direccion":"2559 Lisa Ports","codigoPostal":"19513","telefono":"1-855-719-1935 x3802","email":"Coy.Bruen@yahoo.com","tipoAlumno":"D","observacion":"Aspernatur incidunt dolorum officia deserunt laborum molestiae ipsa. Animi est cum minus. Ab repellendus deserunt blanditiis deserunt ipsum ipsam."}, ... ]


- `/{id}`
  - Método: GET
  - Descripción: Obtiene el dan correspondiente al id provisto.
  - Parámetros de consulta: id.
  - Ejemplo de solicitud: `curl -X GET http://localhost:3000/danes/648fdb7fc0a3bea39978b264`
  - Ejemplo de respuesta:
      [{"_id":"648fdb7fc0a3bea39978b264","nombre":"Clara","apellido":"Jacobs","sexo":"female","nroDan":7,"nroMiembro":318603,"membership":190427,"nroAF":63568,"fechaProximoExamen":"2023-01-12T03:00:00.000Z","nacionalidad":"Cuba","dni":19588326,"queDojoPertenece":"Kelly Dojo","pais":"Tonga","provincia":"California","direccion":"2559 Lisa Ports","codigoPostal":"19513","telefono":"1-855-719-1935 x3802","email":"Coy.Bruen@yahoo.com","tipoAlumno":"D","observacion":"Aspernatur incidunt dolorum officia deserunt laborum molestiae ipsa. Animi est cum minus. Ab repellendus deserunt blanditiis deserunt ipsum ipsam."}]

- `/`
  - Método: POST
  - Descripción: Creación de un dan.
  - Ejemplo de cuerpo de la solicitud:
     `curl -X POST -H "Content-Type: application/json" -d '{
        "nombre": "John",
        "apellido": "Doe",
        "sexo": "M",
        "nroDan": 1,
        "nroMiembro": 123456,
        "nroAF": 654321,
        "fechaUltimoExamen": "2022-10-15",
        "fechaProximoExamen": "2023-10-15",
        "fechaNacimiento": "1990-01-01",
        "nacionalidad": "Argentina",
        "dni": 12345678,
        "queDojoPertenece": "Dojo A",
        "pais": "Argentina",
        "provincia": "Buenos Aires",
        "direccion": "Calle 123",
        "codigoPostal": "1234",
        "telefono": "1234567890",
        "email": "john.doe@example.com"
      }' http://localhost:3000/danes`

 
    
- `/{id}`
  - Método: PUT
  - Descripción: Actualizar un dan.
  - Ejemplo de cuerpo de la solicitud:
     `curl -X POST -H "Content-Type: application/json" -d '{
        "nombre": "John",
        "apellido": "Doe",
        "sexo": "M",
        "nroDan": 1,
        "nroMiembro": 123456,
        "nroAF": 654321,
        "fechaUltimoExamen": "2022-10-15",
        "fechaProximoExamen": "2023-10-15",
        "fechaNacimiento": "1990-01-01",
        "nacionalidad": "Argentina",
        "dni": 12345678,
        "queDojoPertenece": "Dojo A",
        "pais": "Argentina",
        "provincia": "Buenos Aires",
        "direccion": "Calle 123",
        "codigoPostal": "1234",
        "telefono": "1234567890",
        "email": "john.doe@example.com"
      }' http://localhost:3000/danes/648fdb7fc0a3bea39978b264`

    
- `/{id}`
  - Método: DELETE
  - Descripción: Eliminar un dan enviando un ID.
  - Ejemplo de solicitud: `curl -X DELETE http://localhost:3000/danes/648fdb7fc0a3bea39978b264`
