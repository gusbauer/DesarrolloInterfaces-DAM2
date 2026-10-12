# Routing

- `path`: parte de la URL.
- `loadComponent`: carga el componente asociado.
- `:id`: parámetro de ruta.
- `router-outlet`: lugar donde Router renderiza la pantalla activa.

```text
URL → Router → componente → router-outlet
```

Si importas `RouterOutlet` pero no usas `<router-outlet>`, Angular puede avisar de que la dependencia no se utiliza.
