import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Alumnos } from './pages/alumnos/alumnos';

@Component({
  imports: [RouterOutlet, Alumnos],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('gestion-alumnos');
}
