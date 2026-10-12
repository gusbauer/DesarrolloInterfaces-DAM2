# 20 — TypeScript necesario para Angular

## Clase

```ts
export class Alumnos {}
```

## Objeto

```ts
const alumno = { id: 1, nombre: 'Ana' };
```

## Propiedad

`alumno.nombre`

## Método

```ts
cargarAlumnos(): void {}
```

## `this`

Referencia la instancia actual:

```ts
this.alumnos
this.cargarAlumnos()
```

## Array

`Alumno[]`

## Generic

`Observable<Alumno[]>`

## Modificadores

- `private`: acceso restringido desde fuera de la clase.
- `protected`: acceso desde la clase y herencia.
- `readonly`: no permite reasignar la referencia.
