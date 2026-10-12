# Angular estropeado — checklist

1. ¿Estoy en la raíz con `package.json`?
2. ¿`npm install` terminó bien?
3. ¿Angular arranca?
4. ¿JSON Server/API está levantado?
5. ¿Los puertos son correctos?
6. ¿`provideHttpClient()` está configurado?
7. ¿El servicio tiene `@Injectable`?
8. ¿El endpoint es correcto?
9. ¿Hay nombres mal escritos (`apiUrl` / `apiUr1`)?
10. ¿El modelo coincide con el JSON?
11. ¿El componente llama al servicio?
12. ¿Existe `subscribe()`?
13. ¿`next` guarda los datos?
14. ¿El HTML recorre el array correcto?
15. ¿La ruta está declarada?
16. ¿Existe `<router-outlet>` cuando se usa routing?
17. ¿Falta `FormsModule` o `ReactiveFormsModule`?
