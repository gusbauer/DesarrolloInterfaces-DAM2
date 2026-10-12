# Componente raíz explicado

- `Component`: decorador para declarar un componente.
- `signal`: crea un valor reactivo.
- `Alumnos`: componente importado.
- `imports: [Alumnos]`: permite usar `Alumnos` en el template.
- `selector`: nombre con el que se usa el componente.
- `styleUrl`: CSS asociado.
- `templateUrl`: HTML asociado.
- `export class App`: clase del componente.
- `title`: propiedad de clase.
- `readonly`: evita reasignar la referencia.

## Pregunta trampa

`this` **no es un atributo**. Es una referencia a la instancia actual de la clase.
