export enum CategoriaProducto {
  ELECTRONICA = 'Electrónica',
  ROPA = 'Ropa y Calzado',
  HOGAR = 'Hogar y Cocina',
  DEPORTES = 'Deportes',
  LIBROS = 'Libros y Papelería'
}

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  disponible: boolean;
  categoria: CategoriaProducto;
}
