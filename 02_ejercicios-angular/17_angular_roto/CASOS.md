# Casos típicos

## `apiUr1` en vez de `apiUrl`

Error de identificador: se declara un nombre y se usa otro.

## `RouterOutlet` no usado

Si el template no usa `<router-outlet>`, quita la importación o usa correctamente routing.

## `ERR_CONNECTION_REFUSED`

La API/JSON Server puede no estar levantada.

## `package.json` no encontrado

Estamos en una carpeta superior o equivocada.

## La tabla sale vacía

Revisar servicio, `subscribe`, asignación `this.alumnos = data`, `@for` y nombres de propiedades.
