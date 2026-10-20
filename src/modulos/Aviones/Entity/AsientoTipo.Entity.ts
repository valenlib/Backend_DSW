class AsientoTipo {
  private nombre: string;
  private descripcion: string;
  private precioExtra: number;

  constructor(
    nombre: string,
    descripcion: string,
    precioExtra: number,
  ) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precioExtra = precioExtra;
  }

  getNombre(): string {
    return this.nombre;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  getDescripcion(): string {
    return this.descripcion;
  }

  setDescripcion(descripcion: string): void {
    this.descripcion = descripcion;
  }

  getPrecioExtra(): number {
    return this.precioExtra;
  }

  setPrecioExtra(precioExtra: number): void {
    this.precioExtra = precioExtra;
  }
}

export default AsientoTipo;