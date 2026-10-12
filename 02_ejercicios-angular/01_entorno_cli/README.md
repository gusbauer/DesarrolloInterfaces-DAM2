# 01 — Entorno, Node, npm y Angular CLI

## Comandos básicos

```bash
node --version
npm --version
npm install -g @angular/cli
ng version
ng new gestion-alumnos
cd gestion-alumnos
ng serve
ng serve --open
```

Cuando recibes un ZIP o clonas un repositorio:

```bash
npm install
```

## Significado

- **Node.js**: entorno usado por las herramientas de desarrollo.
- **npm**: gestor de paquetes.
- **Angular CLI**: herramienta de terminal de Angular.
- **ng**: comando del Angular CLI.
- **npx**: ejecuta paquetes/comandos npm; no instala Node.

## Errores típicos

- `ENOENT package.json`: normalmente estás fuera de la raíz real del proyecto.
- `ng no se reconoce`: Angular CLI no está globalmente disponible; puede usarse la versión local con `npx ng ...`.
