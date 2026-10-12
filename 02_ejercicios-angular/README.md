# Angular DAM 2 — Ejercicios explicados

Repositorio de estudio para **Desarrollo de Interfaces (2.º DAM)**.

Objetivos:

1. Repasar lo trabajado en clase.
2. Preparar preguntas teóricas y prácticas de examen.
3. Poder explicar Angular con vocabulario técnico en entrevistas.

Cada carpeta puede incluir código, explicación por bloques o línea a línea y preguntas de examen.

> Muchas carpetas son ejercicios didácticos independientes, no proyectos Angular completos. Se parte normalmente de un proyecto creado con `ng new`.

## Orden recomendado

1. `01_entorno_cli`
2. `02_arranque_angular`
3. `03_componentes`
4. `04_data_binding`
5. `05_control_flujo`
6. `06_modelos_interfaces`
7. `07_listado_alumnos_local`
8. `08_json_server`
9. `09_servicio_http`
10. `10_consumir_servicio`
11. `11_crud_servicio`
12. `12_routing`
13. `13_formularios_reactivos`
14. `14_crear_alumno`
15. `15_editar_eliminar`
16. `16_signals_rxjs`
17. `17_angular_roto`
18. `18_preguntas_examen`
19. `19_crud_productos`
20. `20_conceptos_typescript`

## Flujo central de la aplicación de clase

```text
Usuario
  ↓
Componente
  ↓
Servicio
  ↓
HttpClient
  ↓
API / JSON Server
  ↓
Datos

Respuesta
  ↓
Observable
  ↓
subscribe()
  ↓
Componente
  ↓
Template HTML
```
