import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './alumno-form.html'
})
export class AlumnoForm {
  alumnoForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  guardar(): void {
    if (this.alumnoForm.invalid) {
      return;
    }

    console.log(this.alumnoForm.value);
  }
}
