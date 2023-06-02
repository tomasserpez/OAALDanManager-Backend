#!/bin/bash

# Ruta al archivo de la base de datos
DATABASE_PATH="./danes.db"

# Vaciar la base de datos eliminando las tablas existentes
echo "Eliminando tablas existentes..."
sqlite3 "$DATABASE_PATH" <<EOF
DROP TABLE IF EXISTS Danes;
EOF
echo "Tablas eliminadas correctamente."

# Crear la tabla Danes con los nuevos campos
echo "Creando tabla Danes con nuevos campos..."
sqlite3 "$DATABASE_PATH" <<EOF
CREATE TABLE Danes (
  id INTEGER PRIMARY KEY,
  NombreApellido TEXT NOT NULL,
  NroDan TEXT NOT NULL,
  NroMiembro INTEGER NOT NULL,
  FechaUltimoExamen TEXT NOT NULL,
  FechaProximoExamen TEXT NOT NULL,
  FechaNacimiento TEXT NOT NULL,
  Nacionalidad TEXT NOT NULL,
  Direccion TEXT NOT NULL,
  NroAF INTEGER NOT NULL,
  Observacion TEXT NOT NULL,
  TipoDeAlumno TEXT NOT NULL,
  dni TEXT NOT NULL,
  Telefono TEXT,
  Email TEXT,
  CodigoPostal TEXT NOT NULL,
  QueDojoPertenece TEXT NOT NULL
);
EOF
echo "Tabla Danes creada correctamente."

# Arreglos de datos para generar registros
nombres=("Juan Perez" "Maria Rodriguez" "Luis Gonzalez" "Ana Fernandez" "Carlos Martinez" "Laura Lopez" "Pedro Ramirez" "Lucia Silva" "Diego Herrera" "Sofia Castro" "Raul Mendoza" "Carolina Morales" "Federico Castro" "Valentina Rios" "Gonzalo Medina")
danes=("Shodan" "Nidan" "Sandan" "Yodan" "Godan" "Rokudan" "Nanadan" "Hachidan")
barrios=("Palermo" "Belgrano" "Recoleta" "Caballito" "Flores" "Villa Devoto" "Saavedra" "San Telmo" "Almagro" "Villa Crespo")
fechas=("15/02/2017" "23/03/2017" "05/06/2017" "10/09/2017" "18/12/2017" "20/03/2018" "01/06/2018" "12/09/2018" "25/12/2018" "28/02/2019")
tipoAlumno=("A" "B" "C" "D")
paises=("Argentina" "Brasil" "Chile" "Colombia" "Ecuador" "Peru" "Uruguay" "Paraguay" "Bolivia" "Venezuela")
dojos=("Aikikai" "Yoshinkan" "Shodokan" "Iwama" "Ki no Kenkyukai" "Tomiki" "Seidokan" "Shinshin Toitsu" "Aikibudo")

# Generar registros de danes
echo "Generando registros de danes..."

for ((i = 0; i < 15; i++)); do
  nombre=${nombres[$i]}
  NroDan=${danes[$((i % ${#danes[@]}))]}
  NroMiembro=$((100000 + i))
  FechaUltimoExamen=${fechas[$((i % ${#fechas[@]}))]}
  FechaProximoExamen=${fechas[$(((i + 1) % ${#fechas[@]}))]}
  FechaNacimiento="08/06/1992"
  Nacionalidad=${paises[$((i % ${#paises[@]}))]}
  Direccion="${barrios[$((i % ${#barrios[@]}))]}, ${Nacionalidad}"
  NroAF=$((100000 + i))
  Observacion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor lacus, porta eu posuere elementum, faucibus ut augue. Praesent at lectus id dolor volutpat lacinia at in felis. Praesent quam risus, iaculis id vestibulum vitae, pharetra finibus nibh. Nunc ut pellentesque leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec massa arcu, fermentum et iaculis nec, volutpat quis enim. Aliquam id porta mi. Proin dignissim luctus quam quis pulvinar. Fusce aliquet ipsum sem, in pellentesque lorem bibendum quis.

Ut porta iaculis sapien, et lobortis purus euismod vel. Mauris aliquet eleifend euismod. Aliquam elementum, nibh vitae vehicula pretium, dolor sapien sagittis ante, sed tincidunt sem lacus non nisi. Sed felis dolor, bibendum nec metus at, pulvinar eleifend dui. Sed pharetra est vitae dolor interdum, in facilisis urna pellentesque. Nunc in nisl non nisi auctor varius."
  TipoDeAlumno=${tipoAlumno[$((i % ${#tipoAlumno[@]}))]}
  dni=$((10000000 + RANDOM % 90000000 + 1))
  Telefono="+54 9 $((RANDOM % 10)) $((RANDOM % 9000 + 1000))-$((RANDOM % 9000 + 1000))"
  Email="${nombre// /}.${nombre// /}@gmail.com"
  CodigoPostal="1234"
  QueDojoPertenece="${dojos[$((i % ${#dojos[@]}))]} Kai Aikido Dojo"

  sqlite3 "$DATABASE_PATH" <<EOF
INSERT INTO Danes (NombreApellido, NroDan, NroMiembro, FechaUltimoExamen, FechaProximoExamen, FechaNacimiento, Nacionalidad, Direccion, NroAF, Observacion, TipoDeAlumno, dni, Telefono, Email, CodigoPostal, QueDojoPertenece)
VALUES (
  '$nombre',
  '$NroDan',
  $NroMiembro,
  '$FechaUltimoExamen',
  '$FechaProximoExamen',
  '$FechaNacimiento',
  '$Nacionalidad',
  '$Direccion',
  $NroAF,
  '$Observacion',
  '$TipoDeAlumno',
  '$dni',
  '$Telefono',
  '$Email',
  '$CodigoPostal',
  '$QueDojoPertenece'
);
EOF

  echo "Registro $((i + 1)) generado correctamente."
done

echo "Registros de danes generados exitosamente."

