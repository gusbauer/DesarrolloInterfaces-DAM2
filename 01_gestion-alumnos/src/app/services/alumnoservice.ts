import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root' 
})

export class AlumnoService {
    private apiUrl = 'http://localhost:8080/alumnos';
    private http = inject(HttpClient); 
    
    getAll(): Observable<Alumno[]> {
      return this.http.get<Alumno[]>(this.apiUrl);
    }
}
