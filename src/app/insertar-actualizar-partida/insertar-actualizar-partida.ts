import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Partida } from '../models/partida.model';

@Component({
  selector: 'insertar-actualizar-partida',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './insertar-actualizar-partida.html',
  styleUrls: ['./insertar-actualizar-partida.css']
})
export class InsertarActualizarPartidaForm {
  @Input() partida: Partida = { id: 0, jugador1: '', jugador2: '', resultado1: 0, resultado2: 0, fechaActualizacion: new Date() };
  @Input() isNew: boolean = false;
  @Output() save = new EventEmitter<Partida>();
  @Output() cancel = new EventEmitter<void>();

  onSave() {
    if (this.partida) {
      this.save.emit(this.partida);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}