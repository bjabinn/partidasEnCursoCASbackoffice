import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Partida } from '../models/partida.model';
import { environment } from '../../environments/environment';
import { PartidaFormComponent } from '../partida-form/partida-form-component.component';

@Component({
  selector: 'app-tab-content',
  standalone: true,
  imports: [CommonModule, FormsModule, PartidaFormComponent],
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent {
  @Input()
  partidas!: Partida[];

  partidaEditando: Partida | null = null;
  nuevaPartida: Partida | null = null;

  constructor(private http: HttpClient) {}

  editarPartida(partida: Partida) {
    this.partidaEditando = { ...partida };
    this.nuevaPartida = null;
  }

  eliminarPartida(partida: Partida) {
    this.partidas = this.partidas.filter(p => p !== partida);
  }

  guardarPartida(partida: Partida) {
    const index = this.partidas.findIndex(p => p.id === partida.id);
    if (index !== -1) {
      this.partidas[index] = partida;
    }
    this.partidaEditando = null;
  }

  cancelarEdicion() {
    this.partidaEditando = null;
    this.nuevaPartida = null;
  }

  mostrarFormularioAgregar() {
    this.nuevaPartida = { id: 0, jugador1: '', jugador2: '', resultado1: 0, resultado2: 0, fechaActualizacion: new Date() };
    this.partidaEditando = null;
  }

  agregarPartida(partida: Partida) {
    let partidasUrl = `${environment.apiUrlBase}/Partidas`;
    this.http.post(partidasUrl, partida).subscribe(response => {
      this.partidas.push(partida);
      this.nuevaPartida = null;
    });
  }

  esNovedad(fechaActualizacion: Date): boolean {
    const thresholdDate = new Date();
    thresholdDate.setDate(thresholdDate.getDate() - environment.minutosThreshold);
    return new Date(fechaActualizacion) > thresholdDate;
  }
}