import { Component, OnInit, importProvidersFrom, EnvironmentProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { TorneoService } from '../services/torneo.service';
import { Torneo } from '../models/torneo.model';
import { TabContentComponent } from '../tab-content/tab-content.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, MatTabsModule, TabContentComponent],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  torneos: Torneo[] = [];

  constructor(private torneoService: TorneoService) {}

  ngOnInit() {
    //console.log('-------------------------------------TabsComponent inicializado');
    this.torneoService.getTorneos().subscribe(data => {
      this.torneos = data;
    });
  }
}
