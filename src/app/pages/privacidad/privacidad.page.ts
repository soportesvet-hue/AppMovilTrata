import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { IdiomaService, Lang } from '../../services/idioma';
import { AnalyticsService } from '../../services/analytics.service';

interface PrivacidadTextos {
  titulo: string;
  etiqueta: string;
  subtitulo: string;

  queEsTitulo: string;
  queEsTexto: string;

  finalidadTitulo: string;
  finalidadTexto: string;

  privacidadTitulo: string;
  privacidadTexto: string;

  datosTitulo: string;
  datosItems: string[];

  regresar: string;
  inicio: string;
  denuncia: string;
  info: string;
  apoyo: string;
}

@Component({
  selector: 'app-privacidad',
  templateUrl: './privacidad.page.html',
  styleUrls: ['./privacidad.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent],
})
export class PrivacidadPage {
  constructor(
    public idioma: IdiomaService,
    private analytics: AnalyticsService
  ) {}

  textos: Record<Lang, PrivacidadTextos> = {
    es: {
      titulo: 'Privacidad',
      etiqueta: 'INFORMACIÓN DE LA APP',
      subtitulo: 'Conoce el propósito de esta aplicación y cómo protege tu información.',

      queEsTitulo: '¿Qué es esta app?',
      queEsTexto:
        'Contigo GT es una aplicación informativa y preventiva que brinda orientación básica sobre trata de personas, señales de alerta y canales de apoyo disponibles.',

      finalidadTitulo: '¿Para qué fue creada?',
      finalidadTexto:
        'Fue creada para facilitar el acceso rápido a información segura, recursos de prevención y contactos de instituciones que pueden brindar orientación o apoyo.',

      privacidadTitulo: 'Tu privacidad',
      privacidadTexto:
        'La aplicación no solicita datos personales, no guarda denuncias dentro del dispositivo y no sustituye los canales oficiales de atención o emergencia.',

      datosTitulo: 'Esta app no solicita:',
      datosItems: [
        'Nombre completo.',
        'Número de DPI o pasaporte.',
        'Dirección personal.',
        'Contraseñas.',
        'Información bancaria.',
      ],

      regresar: 'Regresar',
      inicio: 'Inicio',
      denuncia: 'Denuncia',
      info: 'Info',
      apoyo: 'Consejo y asesoria',
    },

    en: {
      titulo: 'Privacy',
      etiqueta: 'APP INFORMATION',
      subtitulo: 'Learn the purpose of this app and how it protects your information.',

      queEsTitulo: 'What is this app?',
      queEsTexto:
        'Contigo GT is an informational and prevention app that provides basic guidance about human trafficking, warning signs and available support channels.',

      finalidadTitulo: 'Why was it created?',
      finalidadTexto:
        'It was created to provide quick access to safe information, prevention resources and contacts of institutions that can provide guidance or support.',

      privacidadTitulo: 'Your privacy',
      privacidadTexto:
        'The app does not request personal data, does not store reports on the device and does not replace official emergency or support channels.',

      datosTitulo: 'This app does not request:',
      datosItems: [
        'Full name.',
        'ID or passport number.',
        'Personal address.',
        'Passwords.',
        'Banking information.',
      ],

      regresar: 'Back',
      inicio: 'Home',
      denuncia: 'Report',
      info: 'Info',
      apoyo: 'Advice and counsel',
    },
  };

  setLang(lang: Lang) {
    this.idioma.setLang(lang);
    void this.analytics.idioma(lang, 'privacidad');
  }

  registrarAccion(nombre: string, destino: string = '') {
    void this.analytics.accion(nombre, 'privacidad', destino);
  }

  get lang(): Lang {
    return this.idioma.getLang();
  }

  get t(): PrivacidadTextos {
    return this.textos[this.idioma.getLang()];
  }
}
