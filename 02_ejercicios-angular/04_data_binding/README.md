# 04 — Data Binding

## Interpolación

```html
<h1>{{ titulo }}</h1>
```
TS → HTML.

## Property Binding

```html
<input [value]="nombre">
<img [src]="foto">
```
TS → propiedad HTML.

## Event Binding

```html
<button (click)="saludar()">Saludar</button>
```
HTML → TS.

## Two-way Binding

```html
<input [(ngModel)]="nombre">
```
TS ↔ HTML. Suele requerir `FormsModule`.

| Tipo | Sintaxis | Dirección |
|---|---|---|
| Interpolación | `{{ dato }}` | TS → HTML |
| Property | `[value]="dato"` | TS → HTML |
| Event | `(click)="metodo()"` | HTML → TS |
| Two-way | `[(ngModel)]="dato"` | TS ↔ HTML |
