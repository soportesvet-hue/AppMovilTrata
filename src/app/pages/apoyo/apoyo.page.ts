import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { IdiomaService, Lang } from '../../services/idioma';
import { AnalyticsService } from '../../services/analytics.service';

interface ApoyoTextos {
  titulo: string;
  etiqueta: string;
  subtitulo: string;
  whatsappTitulo: string;
  whatsappTexto: string;
  whatsappBoton: string;
  webTitulo: string;
  webTexto: string;
  webBoton: string;
  denunciaTexto: string;
  denunciaBoton: string;
  salir: string;
  inicio: string;
  denunciaNav: string;
  info: string;
  apoyo: string;
}

@Component({
  selector: 'app-apoyo',
  templateUrl: './apoyo.page.html',
  styleUrls: ['./apoyo.page.scss'],
  standalone: true,
  imports: [IonContent, RouterLink],
})
export class ApoyoPage {
  constructor(
    public idioma: IdiomaService,
    private analytics: AnalyticsService
  ) {}

  textos: Record<Lang, ApoyoTextos> = {
    es: {
      titulo: 'Apoyo',
      etiqueta: 'ORIENTACIÓN',
      subtitulo:
        'Recibe orientación segura y accede a información preventiva de Modo Digital.',
      whatsappTitulo: 'Chat de consejería',
      whatsappTexto:
        'Este es el número de WhatsApp para solicitar orientación y apoyo.',
      whatsappBoton: 'WhatsApp 2504-8888',
      webTitulo: 'Modo Digital',
      webTexto:
        'Ingresa a la página web para conocer información preventiva y recursos digitales.',
      webBoton: 'Ir a Modo Digital',
      denunciaTexto:
        'Si estás en riesgo o conoces un caso, utiliza la sección de denuncia.',
      denunciaBoton: 'Ir a Denuncia',
      salir: 'Salir',
      inicio: 'Inicio',
      denunciaNav: 'Denuncia',
      info: 'Info',
      apoyo: 'Apoyo',
    },
    en: {
      titulo: 'Support',
      etiqueta: 'GUIDANCE',
      subtitulo:
        'Receive safe guidance and access prevention information from Digital Mode.',
      whatsappTitulo: 'Counseling chat',
      whatsappTexto:
        'This is the WhatsApp number to request guidance and support.',
      whatsappBoton: 'WhatsApp 2504-8888',
      webTitulo: 'Digital Mode',
      webTexto:
        'Visit the website to learn prevention information and digital resources.',
      webBoton: 'Go to Digital Mode',
      denunciaTexto:
        'If you are at risk or know of a case, use the report section.',
      denunciaBoton: 'Go to Report',
      salir: 'Exit',
      inicio: 'Home',
      denunciaNav: 'Report',
      info: 'Info',
      apoyo: 'Support',
    },
  };

  setLang(lang: Lang) {
    this.idioma.setLang(lang);
    void this.analytics.idioma(lang, 'apoyo');
  }

  registrarAccion(nombre: string, destino: string = '') {
    void this.analytics.accion(nombre, 'apoyo', destino);
  }

  abrirWhatsApp() {
    const url = 'https://wa.me/50225048888';

    void this.analytics.contacto('whatsapp_chat_consejeria', url, 'apoyo');

    window.open(url, '_blank');
  }

  abrirModoDigital() {
    const url = 'https://mododigital.net.gt/';

    void this.analytics.enlace('modo_digital', url, 'apoyo');

    window.open(url, '_blank');
  }

  get lang(): Lang {
    return this.idioma.getLang();
  }

  get t(): ApoyoTextos {
    return this.textos[this.idioma.getLang()];
  }
}