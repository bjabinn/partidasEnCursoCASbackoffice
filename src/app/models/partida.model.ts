export interface Partida {
    id: number;
    jugador1: string;
    jugador2: string;
    resultado1: number;
    resultado2: number;
    fechaActualizacion: Date;
  }

  export const emptyPartida: Partida = {
    id: 0,
    jugador1: '',
    jugador2: '',
    resultado1: 0,
    resultado2: 0,
    fechaActualizacion: new Date()
  };