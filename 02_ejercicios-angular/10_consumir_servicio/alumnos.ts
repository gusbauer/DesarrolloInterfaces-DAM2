import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Alumno } from '../../models/alumno';
import { AlumnoService } from '../../services/alumnoservice';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css'
})
export class Alumnos implements OnInit {
  titulo = 'Gestión de alumnos';
  alumnos: Alumno[] = [];

  constructor(
    private alumnoService: AlumnoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  cargarAlumnos(): void {
    this.alumnoService.getAll().subscribe({
      next: (data: Alumno[]) => {
        this.alumnos = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
