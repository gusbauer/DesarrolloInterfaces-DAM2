import { Component } from '@angular/core';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.html'
})
export class Alumnos {
  alumnos: Alumno[] = [
    {
      id: 1,
      nombre: 'Ana',
      apellidos: 'García López',
      email: 'ana@email.com',
      fechaNacimiento: '2005-04-15'
    },
    {
      id: 2,
      nombre: 'Luis',
      apellidos: 'Martín Pérez',
      email: 'luis@email.com',
      fechaNacimiento: '2004-09-21'
    }
  ];
}
