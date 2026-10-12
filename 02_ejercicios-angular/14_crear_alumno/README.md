# 14 — Crear alumno

En clase se trabajó separar listado, crear y editar en componentes distintos.

Flujo:

```text
Formulario → validación → AlumnoService.create → POST → API → nuevo alumno
```

Archivos que suelen intervenir:

- componente `crear-alumno`
- template del formulario
- servicio con `create(...)`
- ruta `/alumnos/nuevo`
- modelo `Alumno`

La explicación técnica no debe quedarse en "hay un formulario": el componente recoge datos y el servicio realiza la comunicación HTTP.
