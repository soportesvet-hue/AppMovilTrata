import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { IdiomaService, Lang } from '../../services/idioma';
import { AnalyticsService } from '../../services/analytics.service';


interface ViajasTextos {
  titulo: string;
  subtitulo: string;
  etiqueta: string;

  consejosTitulo: string;
  consejosIntro: string;
  consejosItems: string[];

  consuladosTitulo: string;
  consuladosTexto: string;
  consuladosBoton: string;

  sos: string;
  inicio: string;
  denunciaNav: string;
  info: string;
  apoyo: string;
}

@Component({
  selector: 'app-viajas-extranjero',
  templateUrl: './viajas-extranjero.page.html',
  styleUrls: ['./viajas-extranjero.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, RouterLink, CommonModule],
})
export class ViajasExtranjeroPage {
  constructor(
  public idioma: IdiomaService,
  private analytics: AnalyticsService
) {}

  textos: Record<Lang, ViajasTextos> = {
    es: {
      titulo: 'Viajas al extranjero',
      subtitulo:
        'Antes de viajar, infórmate, protege tus documentos y guarda contactos importantes.',
      etiqueta: 'VIAJANDO LIBRE DE TRATA DE PERSONAS',

      consejosTitulo: 'Consejos antes de viajar',
      consejosIntro: 'Antes de iniciar tu viaje te recomendamos:',
      consejosItems: [
        'Comparte tu itinerario con una persona de confianza.',
        'Guarda copia digital segura de tu pasaporte, DPI, boletos y reservaciones.',
        'Identifica el consulado de Guatemala más cercano a tu(s) destino(s).',
        'Desconfía de ofertas de empleo, becas o viajes con poca información o que parecen muy buenas para ser verdad.',
        'No entregues tu pasaporte ni documentos originales a personas desconocidas.',
        'Mantén comunicación con familiares o personas de confianza.',
        'Guarda números de emergencia del país al que viajas.',
      ],

      consuladosTitulo: 'Consulados de Guatemala',
      consuladosTexto:
        'Consulta el directorio de consulados de Guatemala en el extranjero.',
      consuladosBoton: 'Ver directorio de consulados',

      sos: 'SOS',
      inicio: 'Inicio',
      denunciaNav: 'Denuncia',
      info: 'Info',
      apoyo: 'Apoyo',
    },

    en: {
      titulo: 'Traveling abroad',
      subtitulo:
        'Before traveling, get informed, protect your documents and save important contacts.',
      etiqueta: 'TRAVELING FREE FROM TRAFFICKING',

      consejosTitulo: 'Tips before traveling',
      consejosIntro: 'Before starting your trip, we recommend:',
      consejosItems: [
        'Share your itinerary with a trusted person.',
        'Keep a secure digital copy of your passport, ID, tickets and reservations.',
        'Identify the nearest Guatemalan consulate to your destination(s).',
        'Be cautious of job, scholarship or travel offers with little information or that seem too good to be true.',
        'Do not give your passport or original documents to strangers.',
        'Stay in contact with family or trusted people.',
        'Save emergency numbers for the country you are traveling to.',
      ],

      consuladosTitulo: 'Guatemalan Consulates',
      consuladosTexto: 'Check the directory of Guatemalan consulates abroad.',
      consuladosBoton: 'View consulate directory',

      sos: 'SOS',
      inicio: 'Home',
      denunciaNav: 'Report',
      info: 'Info',
      apoyo: 'Support',
    },
  };

 setLang(lang: Lang) {
  this.idioma.setLang(lang);
  void this.analytics.idioma(lang, 'viajas_extranjero');
}

  get lang(): Lang {
    return this.idioma.getLang();
  }

  get t(): ViajasTextos {
    return this.textos[this.idioma.getLang()];
  }
}