# 16 — Signals y Observables

## Signal

```ts
contador = signal(0);
contador();
contador.set(10);
contador.update(v => v + 1);
```

## Observable

```ts
Observable<Alumno[]>
```

Muy usado con HTTP/RxJS y normalmente consumido mediante `subscribe()`.

| Signal | Observable |
|---|---|
| estado reactivo | flujo de datos |
| muy útil en UI | muy usado con HTTP/RxJS |
| `set`, `update` | `subscribe`, operadores |
