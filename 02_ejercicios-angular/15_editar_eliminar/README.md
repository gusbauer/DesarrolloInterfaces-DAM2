# 15 — Editar y eliminar

## Editar

```text
/alumnos/15/editar → leer id → getById(15) → cargar formulario → update(15, alumno) → PUT
```

## Eliminar

```ts
eliminar(id: number) {
  const confirmar = confirm('¿Desea eliminar el alumno?');

  if (!confirmar) {
    return;
  }

  this.alumnoService.delete(id).subscribe({
    next: () => this.cargarAlumnos(),
    error: error => console.error(error)
  });
}
```

- `confirm`: pide confirmación.
- `return`: detiene la operación si se cancela.
- `delete(id)`: petición DELETE.
- `next`: al terminar, recarga el listado.
