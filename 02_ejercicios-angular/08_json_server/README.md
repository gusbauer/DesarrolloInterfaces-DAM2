# 08 — JSON Server

```bash
npx json-server db.json --port 8080
```

Endpoint de clase:

```text
http://localhost:8080/alumnos
```

- `db.json`: datos.
- JSON: formato de intercambio.
- JSON Server: API REST simulada.
- `8080`: puerto.
- `/alumnos`: recurso/endpoint.

## Dos terminales

Una para JSON Server y otra para:

```bash
ng serve -o
```

JSON Server no es MySQL ni un backend de producción.
