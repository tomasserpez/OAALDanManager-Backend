#!/bin/bash

# Ruta al archivo de la base de datos
DATABASE_PATH="./danes.db"

# Vaciar la base de datos eliminando las tablas existentes
echo "Eliminando tablas existentes..."
sqlite3 "$DATABASE_PATH" <<EOF
DROP TABLE IF EXISTS Danes;
EOF
echo "Tablas eliminadas correctamente."

# Crear la tabla Alumnos
echo "Creando tabla Alumnos..."
sqlite3 "$DATABASE_PATH" <<EOF
CREATE TABLE Danes (
  id INTEGER PRIMARY KEY,
  NombreApellido TEXT,
  NroDan TEXT,
  NroMiembro INTEGER,
  FechaUltimoExamen TEXT,
  FechaProximoExamen TEXT,
  FechaNacimiento TEXT,
  Nacionalidad TEXT,
  Direccion TEXT,
  NroAF INTEGER,
  Observacion TEXT,
  TipoDeAlumno TEXT,
  dni TEXT
);
EOF
echo "Tabla Alumnos creada correctamente."

# Arreglos de datos para generar registros
nombres=("Juan Perez" "Maria Rodriguez" "Luis Gonzalez" "Ana Fernandez" "Carlos Martinez" "Laura Lopez" "Pedro Ramirez" "Lucia Silva" "Diego Herrera" "Sofia Castro" "Raul Mendoza" "Carolina Morales" "Federico Castro" "Valentina Rios" "Gonzalo Medina")
danes=("Shodan" "Nidan" "Sandan" "Yodan" "Godan" "Rokudan" "Nanadan" "Hachidan")
barrios=("Palermo" "Belgrano" "Recoleta" "Caballito" "Flores" "Villa Devoto" "Saavedra" "San Telmo" "Almagro" "Villa Crespo")
fechas=("15/02/2017" "23/03/2017" "05/06/2017" "10/09/2017" "18/12/2017" "20/03/2018" "01/06/2018" "12/09/2018" "25/12/2018" "28/02/2019")

# Generar registros de alumnos
echo "Generando registros de alumnos..."

for ((i = 0; i < 15; i++)); do
  nombre=${nombres[$i]}
  NroDan=${danes[$((i % ${#danes[@]}))]}
  NroMiembro=$((100000 + i))
  FechaUltimoExamen=${fechas[$((i % ${#fechas[@]}))]}
  FechaProximoExamen=${fechas[$(((i + 1) % ${#fechas[@]}))]}
  FechaNacimiento="08/06/1992"
  Nacionalidad="Argentina"
  Direccion="${barrios[$((i % ${#barrios[@]}))]}, Argentina"
  NroAF=$((100000 + i))
  Observacion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor lacus, porta eu posuere elementum, faucibus ut augue. Praesent at lectus id dolor volutpat lacinia at in felis. Praesent quam risus, iaculis id vestibulum vitae, pharetra finibus nibh. Nunc ut pellentesque leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec massa arcu, fermentum et iaculis nec, volutpat quis enim. Aliquam id porta mi. Proin dignissim luctus quam quis pulvinar. Fusce aliquet ipsum sem, in pellentesque lorem bibendum quis.

Ut porta iaculis sapien, et lobortis purus euismod vel. Mauris aliquet eleifend euismod. Aliquam elementum, nibh vitae vehicula pretium, dolor sapien sagittis ante, sed tincidunt sem lacus non nisi. Sed felis dolor, bibendum nec metus at, pulvinar eleifend dui. Sed pharetra est vitae dolor interdum, in facilisis urna pellentesque. Nunc in nisl non nisi auctor varius."
  TipoDeAlumno="B"
  dni=$(printf "%08d" $((10000000 + i)))

  sqlite3 "$DATABASE_PATH" <<EOF
INSERT INTO Danes (NombreApellido, NroDan, NroMiembro, FechaUltimoExamen, FechaProximoExamen, FechaNacimiento, Nacionalidad, Direccion, NroAF, Observacion, TipoDeAlumno, dni)
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
  '$dni'
);
EOF

  echo "Registro $((i + 1)) generado correctamente."
done

echo "Registros de alumnos generados exitosamente."

