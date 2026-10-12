# Consumir el servicio

- `implements OnInit`: usa el ciclo de vida de inicialización.
- `alumnos: Alumno[] = []`: array donde se guardará la respuesta.
- `constructor(...)`: Angular inyecta dependencias.
- `ngOnInit()`: se ejecuta al inicializar el componente.
- `this.cargarAlumnos()`: llama a un método de la instancia.
- `this`: referencia la instancia actual; no es un atributo.
- `getAll()`: obtiene un Observable.
- `subscribe(...)`: se suscribe.
- `next`: recibe los datos correctamente.
- `this.alumnos = data`: guarda la respuesta.
- `error`: gestiona el fallo.

Flujo:

```text
ngOnInit → cargarAlumnos → servicio → GET → Observable → subscribe → next → HTML
```
