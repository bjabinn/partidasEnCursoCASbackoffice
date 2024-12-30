import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Partida } from '../models/partida.model';

@Component({
  selector: 'app-partida-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './partida-form-component.component.html',
  styleUrls: ['./partida-form-component.component.css']
})
export class PartidaFormComponent {
  @Input() partida: Partida | null = null;
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