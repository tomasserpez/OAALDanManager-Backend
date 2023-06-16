const { faker } = require('@faker-js/faker');
const { mongoose } = require('mongoose');
const { Dan } = require('../src/models/dan');

mongoose.connect('mongodb://0.0.0.0:27017/oaal',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

async function generateFakeData(){
    try{
        for(let i = 0; i < 50; i++){
            const gender = faker.person.sexType();
            const firstName = faker.person.firstName(gender);
            const lastName = faker.person.lastName();
            const nroDan = faker.random.arrayElement(['Shodan', 'Nidan', 'Sandan', 'Yodan', 'Godan', 'Rokudan', 'Nanadan', 'Hachidan']);
            const nroMiembro = faker.random.number({min: 10000, max: 999999});
            const nroAF = faker.random.number({min: 10000, max: 99999});
            const fechaUltimoExamen = faker.date.between('1995-01-01', '2023-12-31');
            const fechaProximoExamen = faker.date.between(fechaUltimoExamen, 2025-12-31);
            const fechaNacimiento = faker.date.between('1940-01-01', fechaUltimoExamen);
            const nacionalidad = faker.address.country({full:true});
            const dni = faker.random.number({min: 100000000, max: 99999999});
            const queDojhoPertenece = faker.name.firstName() + ' Dojo';
            const pais = faker.address.country({ full: true});
            const provincia = faker.address.state();
            const direccion = faker.address.streetAdress();
            const codigoPostal = faker.address.zipCode();
            const telefono = faker.phone.phoneNumber();
            const email = faker.internet.email();

            const dan = new Dan({
                nombre: firstName,
                apellido: lastName,
                sexo: gender,
                nroDan: nroDan,
                nroMiembro: nroMiembro,
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
                email: email
            });

            await dan.save();
        }
        console.log('Datos falsos generados exitosamente.');
    }catch(err){
        console.error('Error al generar datos: ', err);
    }finally{
        mongoose.disconnect();
    }
}

async function main(){
    generateFakeData();
}

main().catch(err => console.error('Error: ', err));