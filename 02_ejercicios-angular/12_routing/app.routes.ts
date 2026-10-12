import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'alumnos',
    loadComponent: () => import('./pages/alumnos/alumnos').then(m => m.Alumnos)
  },
  {
    path: 'alumnos/nuevo',
    loadComponent: () => import('./pages/crear-alumno/crear-alumno').then(m => m.CrearAlumno)
  },
  {
    path: 'alumnos/:id/editar',
    loadComponent: () => import('./pages/editar-alumno/editar-alumno').then(m => m.EditarAlumno)
  }
];
