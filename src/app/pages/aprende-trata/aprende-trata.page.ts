import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chevronBack,
  book,
  helpCircle,
  compass,
  shieldCheckmark,
  bulb,
  home,
  alertCircle,
  chatbubbleEllipses,
  layers
} from 'ionicons/icons';

import { IdiomaService, Lang } from '../../services/idioma';
import { AnalyticsService } from '../../services/analytics.service';

interface MetodoCaptacion {
  icono: string;
  texto: string;
}

interface ModalidadTrata {
  icono: string;
  color: string;
  titulo: string;
  texto: string;
}

interface AprendeTrataTextos {
  titulo: string;
  subtitulo: string;
  etiqueta: string;

  queEsTitulo: string;
  queEsTexto: string;

  modalidadesEtiqueta: string;
  modalidadesTitulo: string;
  modalidadesIntro: string;
  modalidades: ModalidadTrata[];
  modalidadesBoton: string;

  metodosTitulo: string;
  metodosIntro: string;
  metodosItems: MetodoCaptacion[];
  metodosNota: string;

  importanteTitulo: string;
  importanteTextoUno: string;
  importanteTextoDos: string;

  recuerdaTitulo: string;
  recuerdaTexto: string;

  videosEtiqueta: string;
  videosTitulo: string;
  videosTexto: string;

  sos: string;
  inicio: string;
  denunciaNav: string;
  info: string;
  apoyo: string;
}

@Component({
  selector: 'app-aprende-trata',
  templateUrl: './aprende-trata.page.html',
  styleUrls: ['./aprende-trata.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonIcon],
})
export class AprendeTrataPage {
  constructor(
    public idioma: IdiomaService,
    private analytics: AnalyticsService
  ) {
    addIcons({
      chevronBack,
      book,
      helpCircle,
      compass,
      shieldCheckmark,
      bulb,
      home,
      alertCircle,
      chatbubbleEllipses,
      layers
    });
  }

  textos: Record<Lang, AprendeTrataTextos> = {
    es: {
      titulo: 'Aprende sobre Trata de Personas',
      subtitulo: 'Conoce sobre Trata de Personas e identifica señales de riesgo para prevenir.',
      etiqueta: 'INFORMACIÓN CLAVE',

      queEsTitulo: '¿Qué es Trata de Personas?',
      queEsTexto:
        'Es un delito grave que vulnera la libertad, la dignidad y los derechos de las personas. Ocurre cuando alguien engaña, manipula o controla a otra persona con el objetivo de explotarla. Este delito genera beneficios económicos ilícitos, por eso se le conoce como la esclavitud moderna.',

      modalidadesEtiqueta: 'MODALIDADES',
      modalidadesTitulo: 'Conoce algunas modalidades o fines de la Trata de Personas',
      modalidadesIntro:
        'La trata de personas puede presentarse de distintas formas. Estas son algunas modalidades importantes que debes conocer.',
      modalidades: [
        {
          icono: '💼',
          color: 'laboral',
          titulo: 'Explotación laboral',
          texto:
            'Uso de víctimas para obtener beneficios económicos-laborales: jornadas excesivas, condiciones inhumanas, falta de seguridad social, salarios injustos o inexistentes.',
        },
        {
          icono: '🛡️',
          color: 'sexual',
          titulo: 'Explotación sexual',
          texto:
            'Víctimas captadas, trasladadas o retenidas para obtener beneficios económicos o sexuales, obligarlas a actos sexuales o actividades relacionadas con la prostitución.',
        },
        {
          icono: '📵',
          color: 'pornografia',
          titulo: 'Pornografía',
          texto:
            'Producción de material pornográfico con víctimas reales o simuladas, para obtener beneficios económicos o de otra índole.',
        },
      ],
      modalidadesBoton: 'Ver más modalidades',

      metodosTitulo: '¿Cuáles son los métodos de captación más frecuentes?',
      metodosIntro: 'A través del contacto digital o personal ofrecen:',
      metodosItems: [
        { icono: '💼', texto: 'Ofertas de empleo falsas' },
        { icono: '🎓', texto: 'Ofertas de estudios o becas falsas' },
        { icono: '✈️', texto: 'Oportunidades de viajes que parecen muy buenas' },
        { icono: '💰', texto: 'Oportunidades para ganar dinero fácil' },
        { icono: '💙', texto: 'Falsas promesas de amor' },
      ],
      metodosNota:
        'Lo que parece una oportunidad atractiva puede convertirse en trata de personas.',

      importanteTitulo: 'Tu seguridad y bienestar son importantes',
      importanteTextoUno:
        'La responsabilidad siempre es de quienes engañan, manipulan o explotan.',
      importanteTextoDos:
        'Pedir apoyo, hablar con una persona de confianza y reconocer señales de riesgo puede ayudarte a protegerte y proteger a otras personas.',

      recuerdaTitulo: 'Recuerda',
      recuerdaTexto:
        'La trata de personas puede afectar a cualquier persona. Infórmate, reconoce las señales de riesgo y comparte información confiable para prevenir este delito.',

      videosEtiqueta: 'CONTENIDO AUDIOVISUAL',
      videosTitulo: 'Ver videos',
      videosTexto: 'Aprende de forma rápida con videos informativos.',

      sos: 'SOS',
      inicio: 'Inicio',
      denunciaNav: 'Denuncia',
      info: 'Info',
      apoyo: 'Consejo y asesoria',
    },

    en: {
      titulo: 'Learn about Human Trafficking',
      subtitulo: 'Learn about Human Trafficking and recognize warning signs to help prevent it.',
      etiqueta: 'KEY INFORMATION',

      queEsTitulo: 'What is Human Trafficking?',
      queEsTexto:
        'It is a serious crime that violates people’s freedom, dignity and rights. It occurs when someone deceives, manipulates or controls another person for the purpose of exploitation. This crime generates illicit economic benefits and is known as modern slavery.',

      modalidadesEtiqueta: 'FORMS',
      modalidadesTitulo: 'Learn about some forms or purposes of human trafficking',
      modalidadesIntro:
        'Human trafficking can appear in different forms. These are some important forms you should know.',
      modalidades: [
        {
          icono: '💼',
          color: 'laboral',
          titulo: 'Labor exploitation',
          texto:
            'Use of victims to obtain economic or labor benefits: excessive working hours, inhuman conditions, lack of social security, unfair or nonexistent wages.',
        },
        {
          icono: '🛡️',
          color: 'sexual',
          titulo: 'Sexual exploitation',
          texto:
            'Victims recruited, transported, or held to obtain economic or sexual benefits, forcing them into sexual acts or activities related to prostitution.',
        },
        {
          icono: '📵',
          color: 'pornografia',
          titulo: 'Pornography',
          texto:
            'Production of pornographic material with real or simulated victims to obtain economic or other types of benefits.',
        },
      ],
      modalidadesBoton: 'See more forms',

      metodosTitulo: 'What are the most common recruitment methods?',
      metodosIntro: 'Through digital or personal contact, they may offer:',
      metodosItems: [
        { icono: '💼', texto: 'Fake job offers' },
        { icono: '🎓', texto: 'Fake study or scholarship offers' },
        { icono: '✈️', texto: 'Travel opportunities that seem too good' },
        { icono: '💰', texto: 'Opportunities to make easy money' },
        { icono: '💙', texto: 'False promises of love' },
      ],
      metodosNota:
        'What looks like an attractive opportunity can become human trafficking.',

      importanteTitulo: 'Your safety and well-being matter',
      importanteTextoUno:
        'The responsibility always belongs to those who deceive, manipulate or exploit.',
      importanteTextoDos:
        'Seeking support, talking to someone you trust and recognizing warning signs can help protect you and others.',

      recuerdaTitulo: 'Remember',
      recuerdaTexto:
        'Human trafficking can affect anyone. Get informed, recognize warning signs and share reliable information to help prevent this crime.',

      videosEtiqueta: 'VIDEO CONTENT',
      videosTitulo: 'Watch videos',
      videosTexto: 'Learn quickly with informative videos.',

      sos: 'SOS',
      inicio: 'Home',
      denunciaNav: 'Report',
      info: 'Info',
      apoyo: 'Advice and counsel',
    },
  };

  setLang(lang: Lang) {
    this.idioma.setLang(lang);
    void this.analytics.idioma(lang, 'aprende_trata');
  }

  abrirModalidadesTrata() {
    const url = 'https://svet.gob.gt/tratadepersonas/';

    void this.analytics.enlace(
      'modalidades_trata_svet',
      url,
      'aprende_trata'
    );

    window.open(url, '_blank');
  }

  registrarAccion(nombre: string, destino: string) {
    void this.analytics.accion(nombre, 'aprende_trata', destino);
  }

  get lang(): Lang {
    return this.idioma.getLang();
  }

  get t(): AprendeTrataTextos {
    return this.textos[this.idioma.getLang()];
  }
}
