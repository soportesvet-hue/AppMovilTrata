import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  home,
  alertCircle,
  book,
  chatbubbleEllipses,
  informationCircle
} from 'ionicons/icons';

import { IdiomaService, Lang } from '../../services/idioma';
import { AnalyticsService } from '../../services/analytics.service';

interface VisitasGuatemalaTextos {
  titulo: string;
  etiqueta: string;
  subtitulo: string;

  consuladosTitulo: string;
  consuladosTexto: string;
  consuladosBoton: string;

  infoTitulo: string;
  infoTexto: string;

  turismoTitulo: string;
  turismoTexto: string;
  turismoBoton: string;

  consejosTitulo: string;
  consejosIntro: string;
  consejosItems: string[];

  seguridadTitulo: string;
  seguridadTexto: string;
  seguridadAlerta: string;

  ayudaEtiqueta: string;
  ayudaTitulo: string;
  ayudaTexto: string;
  ayudaLlamarUno: string;
  ayudaLlamarDos: string;
  ayudaWhatsapp: string;

  inicio: string;
  denunciaNav: string;
  info: string;
  apoyo: string;
}

@Component({
  selector: 'app-visitas-guatemala',
  templateUrl: './visitas-guatemala.page.html',
  styleUrls: ['./visitas-guatemala.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonIcon],
})
export class VisitasGuatemalaPage {
  constructor(
    public idioma: IdiomaService,
    private analytics: AnalyticsService
  ) {
    addIcons({
      home,
      alertCircle,
      book,
      chatbubbleEllipses,
      informationCircle
    });
  }

  textos: Record<Lang, VisitasGuatemalaTextos> = {
    es: {
      titulo: 'Visitas Guatemala',
      etiqueta: 'TURISMO SEGURO',
      subtitulo:
        'Información útil para personas que visitan Guatemala y necesitan orientación durante su estadía.',

      consuladosTitulo: 'Consulados acreditados en Guatemala',
      consuladosTexto:
        'Consulta el directorio de consulados extranjeros acreditados en Guatemala.',
      consuladosBoton: 'Ver consulados',

      infoTitulo: 'Durante tu visita',
      infoTexto:
        'Guatemala cuenta con canales oficiales de información turística y apoyo para visitantes. Utiliza únicamente servicios formales y mantén comunicación con personas de confianza.',

      turismoTitulo: 'Turismo seguro en Guatemala',
      turismoTexto:
        'Durante tu visita, mantén comunicación con personas de confianza, guarda tus documentos importantes y utiliza canales oficiales de información turística.',
      turismoBoton: 'Conocer más sobre ASISTUR',

      consejosTitulo: 'Consejos durante tu visita',
      consejosIntro: 'Toma en cuenta estas recomendaciones:',
      consejosItems: [
        'Guarda copia digital segura de tus documentos importantes.',
        'Comparte tu ubicación o itinerario con una persona de confianza.',
        'Utiliza transporte y servicios turísticos formales.',
        'Desconfía de ofertas o invitaciones que parezcan demasiado buenas para ser verdad.',
        'Si necesitas apoyo, comunícate con los canales oficiales de asistencia turística.',
      ],

      seguridadTitulo: 'Recomendación importante',
      seguridadTexto:
        'Si una persona intenta retener tus documentos, limitar tu comunicación o trasladarte a otro lugar sin explicaciones claras, busca ayuda inmediatamente.',
      seguridadAlerta:
        'Ante una emergencia, comunícate con los canales oficiales disponibles en la app.',

      ayudaEtiqueta: 'ASISTENCIA AL TURISTA',
      ayudaTitulo: '¿Necesitas asistencia turística?',
      ayudaTexto:
        'Comunícate con asistencia al turista para recibir apoyo por llamada o WhatsApp durante tu visita.',
      ayudaLlamarUno: 'Llamar 1500',
      ayudaLlamarDos: 'Llamar 2290-2810',
      ayudaWhatsapp: 'WhatsApp 5188-1819',

      inicio: 'Inicio',
      denunciaNav: 'Denuncia',
      info: 'Info',
      apoyo: 'Consejo y asesoria',
    },

    en: {
      titulo: 'Visiting Guatemala',
      etiqueta: 'SAFE TOURISM',
      subtitulo:
        'Useful information for people visiting Guatemala who need guidance during their stay.',

      consuladosTitulo: 'Accredited consulates in Guatemala',
      consuladosTexto:
        'Check the directory of foreign consulates accredited in Guatemala.',
      consuladosBoton: 'View consulates',

      infoTitulo: 'During your visit',
      infoTexto:
        'Guatemala has official tourism information and support channels for visitors. Use only formal services and stay in contact with trusted people.',

      turismoTitulo: 'Safe tourism in Guatemala',
      turismoTexto:
        'During your visit, stay in contact with trusted people, keep your important documents safe and use official tourism information channels.',
      turismoBoton: 'Learn more about ASISTUR',

      consejosTitulo: 'Tips during your visit',
      consejosIntro: 'Keep these recommendations in mind:',
      consejosItems: [
        'Keep a secure digital copy of your important documents.',
        'Share your location or itinerary with someone you trust.',
        'Use formal transportation and tourism services.',
        'Be cautious with offers or invitations that seem too good to be true.',
        'If you need support, contact the official tourist assistance channels.',
      ],

      seguridadTitulo: 'Important recommendation',
      seguridadTexto:
        'If someone tries to keep your documents, limit your communication or move you somewhere without clear explanations, seek help immediately.',
      seguridadAlerta:
        'In an emergency, contact the official channels available in the app.',

      ayudaEtiqueta: 'TOURIST ASSISTANCE',
      ayudaTitulo: 'Do you need tourist assistance?',
      ayudaTexto:
        'Contact tourist assistance to receive support by phone or WhatsApp during your visit.',
      ayudaLlamarUno: 'Call 1500',
      ayudaLlamarDos: 'Call 2290-2810',
      ayudaWhatsapp: 'WhatsApp 5188-1819',

      inicio: 'Home',
      denunciaNav: 'Report',
      info: 'Info',
      apoyo: 'Advice and counsel',
    },
  };

  setLang(lang: Lang) {
    this.idioma.setLang(lang);
    void this.analytics.idioma(lang, 'visitas_guatemala');
  }

  llamar(numero: string) {
    void this.analytics.contacto('llamada_asistur', numero, 'visitas_guatemala');
    window.location.href = `tel:${numero}`;
  }

  abrirWhatsappAsistur() {
    const url = 'https://wa.me/50251881819';
    void this.analytics.contacto('whatsapp_asistur', url, 'visitas_guatemala');
    window.location.href = url;
  }

  abrirLink(url: string, nombre: string = 'asistur_turismo_seguro') {
    void this.analytics.enlace(nombre, url, 'visitas_guatemala');
    window.open(url, '_blank');
  }

  registrarAccion(nombre: string, destino: string = '') {
    void this.analytics.accion(nombre, 'visitas_guatemala', destino);
  }

  get lang(): Lang {
    return this.idioma.getLang();
  }

  get t(): VisitasGuatemalaTextos {
    return this.textos[this.idioma.getLang()];
  }
}
