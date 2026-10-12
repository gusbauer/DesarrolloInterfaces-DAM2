# 19 — CRUD de productos

Modelo usado en la tarea de productos.

Nuevos conceptos respecto a Alumno:

- `boolean`: `disponible`.
- `enum`: `CategoriaProducto`.
- categoría para un desplegable.
- precio y stock.

Flujo recomendado:

1. Modelo `Producto`.
2. Endpoint/datos.
3. `ProductoService`.
4. GET/POST/PUT/DELETE.
5. Listado.
6. Formulario.
7. `<select>` para categoría.
8. Crear/editar/eliminar.
9. Routing.
10. Validaciones.

**¿Por qué enum?** Restringe la categoría a un conjunto conocido de valores.
