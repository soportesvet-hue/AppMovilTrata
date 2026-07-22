import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-salida-rapida',
  templateUrl: './salida-rapida.page.html',
  styleUrls: ['./salida-rapida.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SalidaRapidaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
