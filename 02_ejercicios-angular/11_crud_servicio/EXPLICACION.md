# CRUD en el servicio

| Método | HTTP | CRUD |
|---|---|---|
| `getAll()` | GET | Read |
| `getById(id)` | GET | Read |
| `create(alumno)` | POST | Create |
| `update(id, alumno)` | PUT | Update |
| `delete(id)` | DELETE | Delete |

La expresión `` `${this.apiUrl}/${id}` `` construye una URL con el identificador.

`Observable<void>` indica que en DELETE no necesitamos usar un objeto concreto como resultado.
