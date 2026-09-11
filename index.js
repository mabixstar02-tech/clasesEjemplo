
// Una veterinaria necesita desarrollar un sistema para la atención de mascotas
// Animal, propietario, atención

class Animal {
    nombre
    raza
    especie
    edad

    constructor(nombre, raza, especie, edad) {
        this.nombre = nombre
        this.raza = raza
        this.especie = especie
        this.edad = edad
    }

    registrarnombre(nuevonombre) {
        this.nombre = nuevonombre
    }

    registarraza(nuevaraza) {
        this.raza = nuevaraza
    }

    registarespecie(nuevaespecie) {
        this.especie = nuevaespecie
    }

    registraredad(nuevaedad) {
        this.edad = nuevaedad
    }

    mostrarinformacion() {
        console.log("Nombre: " + this.nombre)
        console.log("Raza: " + this.raza)
        console.log("Especie: " + this.especie)
        console.log("Edad: " + this.edad)
    }
}

class Propietario {
    nombrepropietario
    direccion
    telefono

    constructor(nombrepropietario, direccion, telefono) {
        this.nombrepropietario = nombrepropietario
        this.direccion = direccion
        this.telefono = telefono
        this.mascota = []
    }

    registrarnombre(nuevonombre) {
        this.nombrepropietario = nuevonombre
    }

    registrardireccion(nuevadireccion) {
        this.direccion = nuevadireccion
    }

    registrartelefono(nuevotelefono) {
        this.telefono = nuevotelefono
    }

    registrarMascota(nuevamascota) {
        this.mascota.push(nuevamascota)
    }

    mostrarinformacion() {
        console.log("Nombre del propietario: " + this.nombrepropietario)
        console.log("Dirección: " + this.direccion)
        console.log("Teléfono: " + this.telefono)
        console.log("Mascotas: " + this.mascota.length)
    }
}

// Crear animal
let colmillo = new Animal("Colmillo", "Pitbull", "Perro", 12)

// Mostrar información del animal
colmillo.mostrarinformacion()

// Crear propietario
let Mabel = new Propietario("Mabel", "123", "1111")

// Registrar mascota
Mabel.registrarMascota(colmillo)

// Mostrar información del propietario
Mabel.mostrarinformacion()