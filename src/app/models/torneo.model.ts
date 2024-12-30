import { Partida } from "./partida.model";

export interface Torneo {
    id: number;
    fecha: Date
    lugar: string;
    partidas: Partida[];
  }