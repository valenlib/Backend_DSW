class vuelo {
  constructor (id, avion, origen, destino, fecha, hora, precio) {
    this._id = id;
    this._avion = avion;
    this._origen = origen;
    this._destino = destino;
    this._fecha = fecha;
    this._hora = hora;
    this._precio = precio;
  }
  // Getters
  get id() {
    return this._id;
  }
  get avion() {
    return this._avion;
  }
  get origen() {
    return this._origen;
  }
  get destino() {
    return this._destino;
  }
  get fecha() {
    return this._fecha;
  }
  get hora() {
    return this._hora;
  }
  get precio() {
    return this._precio;
  }

  // Setters
  set id(id) {
    this._id = id;
  }
  set avion(avion) {
    this._avion = avion;
  }
  set origen(origen) {
    this._origen = origen;
  } 
  set destino(destino) {
    this._destino = destino;
  }
  set fecha(fecha) {
    this._fecha = fecha;
  }
  set hora(hora) {
    this._hora = hora;
  }
  set precio(precio) {
    this._precio = precio;
  }

}