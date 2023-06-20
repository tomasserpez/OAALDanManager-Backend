
const { MongoClient } = require('mongodb');
const { faker } = require('@faker-js/faker');
const { format } = require('date-fns');

// Generar un número de dan aleatorio
const getRandomDan = () => {
    return Math.floor(Math.random() * 8 );
}

// Formatear fechas
const generateFormattedDate = (desde, hasta) => {
    const date = faker.date.between({from: desde, to: hasta});
    return format(date, 'dd-MM-yyyy');
};

// Obtener un numero aleatorio entre 2
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Obtener un indice aleatorio
const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
};


async function generateFakeData() {
  const uri = 'mongodb://0.0.0.0:27017';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Conexión exitosa a la base de datos...');

    const database = client.db('oaal');
    const collection = database.collection('dans');

    console.log('Generando personas: ');
    for (let i = 0; i < 50; i++) {
      const gender = faker.person.sexType();
      const firstName = faker.person.firstName(gender);
      const lastName = faker.person.lastName();
      const nroDan = getRandomDan();
      const nroMiembro = faker.datatype.number({min: 100000, max: 999999});
      const membership = faker.datatype.number({min: 100000, max: 999999});
      const nroAF = faker.datatype.number({min: 1000, max: 99999});
      const fechaUltimoExamen = generateFormattedDate('01-01-1995', '31-12-2023');
      const fechaNacimiento = generateFormattedDate('01-01-1940', fechaUltimoExamen);
      const fechaProximoExamen = generateFormattedDate(fechaUltimoExamen, '31-12-2025');
      const nacionalidad = faker.address.country();
      const dni = faker.datatype.number({min: 10000000, max: 99999999});
      const queDojoPertenece = faker.person.firstName() + ' Dojo';
      const pais = faker.address.country();
      const provincia = faker.address.state();
      const direccion = faker.address.streetAddress();
      const codigoPostal = faker.address.zipCode();
      const telefono = faker.phone.number();
      const email = faker.internet.email();
      const tipoAlumno = faker.helpers.arrayElement(['A', 'B', 'C', 'D']);
      const observacion = faker.lorem.sentences();

      const dan = {
        nombre: firstName,
        apellido: lastName,
        sexo: gender,
        nroDan: nroDan,
        nroMiembro: nroMiembro,
        membership: membership,
        nroAF: nroAF,
        fechaUltimoExamen: fechaUltimoExamen,
        fechaProximoExamen: fechaProximoExamen,
        fechaNacimiento: fechaNacimiento,
        nacionalidad: nacionalidad,
        dni: dni,
        queDojoPertenece: queDojoPertenece,
        pais: pais,
        provincia: provincia,
        direccion: direccion,
        codigoPostal: codigoPostal,
        telefono: telefono,
        email: email,
        tipoAlumno: tipoAlumno,
        observacion: observacion
      };

      await collection.insertOne(dan);
    }

    console.log('Datos falsos generados exitosamente.');
  } catch (error) {
    console.error('Error al generar datos: ', error);
  } finally {
    await client.close();
  }
}

// Resto del código para las funciones getRandomDan, getRandomNumber, getRandomIndex...

generateFakeData().catch(error => console.error('Error principal: ', error));
