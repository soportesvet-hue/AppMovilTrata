import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

import { IdiomaService, Lang } from '../../services/idioma';
import { AnalyticsService } from '../../services/analytics.service';

interface DenunciaTextos {
  titulo: string;
  salir: string;
  etiqueta: string;
  subtitulo: string;

  pncEtiqueta: string;
  pncNumero: string;
  pncTitulo: string;
  pncTexto: string;
  pncBoton: string;

  crimeEtiqueta: string;
  crimeNumero: string;
  crimeTitulo: string;
  crimeTexto: string;
  crimeBotonLlamar: string;
  crimeBotonLlamarSub: string;
  crimeBotonWhatsapp: string;
  crimeBotonWhatsappSub: string;
  crimeBotonWeb: string;
  crimeBotonWebSub: string;

  pgnEtiqueta: string;
  pgnNumero: string;
  pgnTitulo: string;
  pgnSubtexto: string;
  pgnBotonTelefono: string;
  pgnBotonWeb: string;
  pgnBotonDirectorio: string;

  inicio: string;
  denunciaNav: string;
  info: string;
  apoyo: string;
}

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.page.html',
  styleUrls: ['./denuncia.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent],
})
export class DenunciaPage implements OnInit {
  constructor(
    public idioma: IdiomaService,
    private analytics: AnalyticsService
  ) {}

  textos: Record<Lang, DenunciaTextos> = {
    es: {
      titulo: 'Denuncia',
      salir: 'Salir',
      etiqueta: 'Denuncia',
      subtitulo:
        'Si estás en Guatemala y necesitas contactar a las autoridades o instituciones de apoyo, aquí encontrarás canales oficiales para solicitar ayuda, orientación o realizar una denuncia de forma anónima.',

      pncEtiqueta: 'EMERGENCIA',
      pncNumero: 'Teléfono: 110',
      pncTitulo: 'Policía Nacional Civil',
      pncTexto: 'Centro de llamadas de Emergencia.',
      pncBoton: 'Llamar 110',

      crimeEtiqueta: 'DENUNCIA ANÓNIMA',
      crimeNumero: 'Teléfono: 1561',
      crimeTitulo: 'Crime Stoppers',
      crimeTexto:
        'Canal para realizar denuncias confidenciales y anónimas por llamada, WhatsApp o formulario web.',
      crimeBotonLlamar: 'Llamar 1561',
      crimeBotonLlamarSub: 'Denuncia anónima',
      crimeBotonWhatsapp: 'WhatsApp',
      crimeBotonWhatsappSub: 'Denuncia anónima',
      crimeBotonWeb: 'tupista.gt',
      crimeBotonWebSub: 'Formulario seguro para denunciar',

      pgnEtiqueta: 'NIÑEZ',
      pgnNumero: 'Teléfono: 1584',
      pgnTitulo: 'Denuncias a favor de niñez y adolescencia',
      pgnSubtexto:
        'Informa vulneración de derechos de niñez y adolescencia.',
      pgnBotonTelefono: 'PGN – Denuncia telefónica',
      pgnBotonWeb: 'PGN – Denuncia portal web',
      pgnBotonDirectorio: 'Conoce el Directorio PGN',

      inicio: 'Inicio',
      denunciaNav: 'Denuncia',
      info: 'Info',
      apoyo: 'Apoyo',
    },

    en: {
      titulo: 'Report',
      salir: 'Exit',
      etiqueta: 'Report',
      subtitulo:
        'If you are in Guatemala and need to contact authorities or support institutions, you will find official channels here to request help, guidance, or submit an anonymous report.',

      pncEtiqueta: 'EMERGENCY',
      pncNumero: 'Phone: 110',
      pncTitulo: 'National Civil Police',
      pncTexto: 'Emergency call center.',
      pncBoton: 'Call 110',

      crimeEtiqueta: 'ANONYMOUS REPORT',
      crimeNumero: 'Phone: 1561',
      crimeTitulo: 'Crime Stoppers',
      crimeTexto:
        'Channel for confidential and anonymous reports by phone, WhatsApp or web form.',
      crimeBotonLlamar: 'Call 1561',
      crimeBotonLlamarSub: 'Anonymous report',
      crimeBotonWhatsapp: 'WhatsApp',
      crimeBotonWhatsappSub: 'Anonymous report',
      crimeBotonWeb: 'tupista.gt',
      crimeBotonWebSub: 'Secure form to report',

      pgnEtiqueta: 'CHILDREN',
      pgnNumero: 'Phone: 1584',
      pgnTitulo: 'Reports for children and adolescents',
      pgnSubtexto:
        'Report violations of the rights of children and adolescents.',
      pgnBotonTelefono: 'PGN – Phone report',
      pgnBotonWeb: 'PGN – Web report',
      pgnBotonDirectorio: 'View PGN Directory',

      inicio: 'Home',
      denunciaNav: 'Report',
      info: 'Info',
      apoyo: 'Support',
    },
  };

  ngOnInit() {
    void this.analytics.pantalla('denuncia');
  }

  setLang(lang: Lang) {
    this.idioma.setLang(lang);
    void this.analytics.idioma(lang, 'denuncia');
  }

  llamar(numero: string) {
    void this.analytics.contacto('llamada', numero, 'denuncia');

    // En APK Android esto abre el marcador del teléfono.
    window.location.href = `tel:${numero}`;
  }

  abrirWhatsappCrime() {
    const url = 'https://wa.me/50237641561';

    void this.analytics.contacto('whatsapp_crime_stoppers', url, 'denuncia');

    // Abre WhatsApp o navegador si WhatsApp no está instalado.
    window.location.href = url;
  }

  abrirWeb(url: string, nombre: string) {
    void this.analytics.enlace(nombre, url, 'denuncia');

    // Abre la página externa.
    window.open(url, '_blank');
  }

  registrarAccion(nombre: string, destino: string = '') {
    void this.analytics.accion(nombre, 'denuncia', destino);
  }

  get lang(): Lang {
    return this.idioma.getLang();
  }

  get t(): DenunciaTextos {
    return this.textos[this.idioma.getLang()];
  }
}