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
      subtitulo:
        'Guia2 es una aplicación informativa y preventiva elaborada por la Secretaría contra la Violencia Sexual, Explotación y Trata de Personas -SVET-, para brindar orientación segura, discreta y confiable.',

      queEsTitulo: '¿Qué es esta app?',
      queEsTexto:
        'Es una aplicación informativa y preventiva que brinda orientación básica sobre trata de personas, señales de alerta y canales de denuncia y consejería sobre trata de personas disponibles en Guatemala.',

      finalidadTitulo: '¿Para qué fue creada?',
      finalidadTexto:
        'Fue creada para facilitar el acceso rápido a información segura, recursos de orientación y contactos institucionales que pueden brindar apoyo en situaciones de riesgo. Su nombre discreto permite que la aplicación sea una herramienta segura y fácil de consultar.',

      privacidadTitulo: 'Tu privacidad',
      privacidadTexto:
        'Guia2 no solicita datos personales, no guarda información dentro del dispositivo y no sustituye los canales oficiales de atención, emergencia o denuncia.',

      datosTitulo: 'Esta app no solicita:',
      datosItems: [
        'Nombre completo.',
        'Número de DPI o pasaporte.',
        'Dirección personal.',
        'Contraseñas.',
        'Información bancaria.',
        'Fotografías o ubicación en tiempo real.',
      ],

      regresar: 'Regresar',
      inicio: 'Inicio',
      denuncia: 'Denuncia',
      info: 'Info',
      apoyo: 'Consejo y asesoría',
    },

    en: {
      titulo: 'Privacy',
      etiqueta: 'APP INFORMATION',
      subtitulo:
        'Guia2 is an informational and preventive app developed by the Secretariat against Sexual Violence, Exploitation and Trafficking in Persons -SVET-, to provide safe, discreet and reliable guidance.',

      queEsTitulo: 'What is this app?',
      queEsTexto:
        'It is an informational and preventive app that provides basic guidance about human trafficking, warning signs, and reporting and counseling channels on human trafficking available in Guatemala.',

      finalidadTitulo: 'Why was it created?',
      finalidadTexto:
        'It was created to provide quick access to safe information, guidance resources, and institutional contacts that can offer support in risk situations. Its discreet name allows the app to be a safe and easy-to-use guidance tool.',

      privacidadTitulo: 'Your privacy',
      privacidadTexto:
        'Guia2 does not request personal data, does not store information on the device, and does not replace official support, emergency, or reporting channels.',

      datosTitulo: 'This app does not request:',
      datosItems: [
        'Full name.',
        'ID or passport number.',
        'Personal address.',
        'Passwords.',
        'Banking information.',
        'Photos or real-time location.',
      ],

      regresar: 'Back',
      inicio: 'Home',
      denuncia: 'Report',
      info: 'Info',
      apoyo: 'Advice and guidance',
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