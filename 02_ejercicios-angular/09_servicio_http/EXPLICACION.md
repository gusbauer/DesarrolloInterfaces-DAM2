# Servicio HTTP

- `HttpClient`: peticiones HTTP.
- `Injectable`: Angular puede gestionar el servicio.
- `inject`: obtiene una dependencia del inyector.
- `Observable`: flujo asíncrono de RxJS.
- `providedIn: 'root'`: servicio disponible desde el inyector raíz.
- `apiUrl`: endpoint base.
- `getAll()`: devuelve `Observable<Alumno[]>`.
- `http.get<Alumno[]>`: GET esperando un array de alumnos.

**Trampa:** `getAll()` no devuelve directamente `Alumno[]`; devuelve `Observable<Alumno[]>`.
