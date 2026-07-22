import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chevronBack,
  book,
  sparkles,
  airplane,
  earth,
  playCircle,
  alertCircle,
  home,
  chatbubbleEllipses
} from 'ionicons/icons';

import { IdiomaService, Lang } from '../../services/idioma';
import { AnalyticsService } from '../../services/analytics.service';

interface InformacionTextos {
  titulo: string;
  etiqueta: string;
  subtitulo: string;

  aprender: string;
  joven: string;
  viajar: string;
  visitas: string;
  videos: string;
  denuncia: string;
  orientacion: string;

  inicio: string;
  denunciaNav: string;
  info: string;
  apoyo: string;
  acerca: string;
}

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonIcon],
})
export class InformacionPage {
  constructor(
    public idioma: IdiomaService,
    private analytics: AnalyticsService
  ) {
    addIcons({
      chevronBack,
      book,
      sparkles,
      airplane,
      earth,
      playCircle,
      alertCircle,
      home,
      chatbubbleEllipses
    });
  }

  textos: Record<Lang, InformacionTextos> = {
    es: {
      titulo: 'Información',
      etiqueta: 'INFO',
      subtitulo: 'Bienvenidos a este espacio creado para aprender y construir recursos en conjunto.',

      aprender: 'Aprende sobre Trata de Personas',
      joven: 'Zona Joven',
      viajar: 'Viajas al extranjero',
      visitas: 'Visitas Guatemala',
      videos: 'Videos',
      denuncia: 'Ayuda',
      orientacion: 'Pedir orientación',

      inicio: 'Inicio',
      denunciaNav: 'Denuncia',
      info: 'Info',
      apoyo: 'Apoyo',
      acerca: 'Acerca de',
    },

    en: {
      titulo: 'Information',
      etiqueta: 'INFO',
      subtitulo: 'Welcome to this space created to learn and build resources together.',

      aprender: 'Learn about Human Trafficking',
      joven: 'Youth Zone',
      viajar: 'Traveling abroad',
      visitas: 'Visiting Guatemala',
      videos: 'Videos',
      denuncia: 'Help',
      orientacion: 'Ask for guidance',

      inicio: 'Home',
      denunciaNav: 'Report',
      info: 'Info',
      apoyo: 'Support',
      acerca: 'About',
    },
  };

  setLang(lang: Lang) {
    this.idioma.setLang(lang);
    void this.analytics.idioma(lang, 'informacion');
  }

  registrarAccion(nombre: string, destino: string) {
    void this.analytics.accion(nombre, 'informacion', destino);
  }

  get lang(): Lang {
    return this.idioma.getLang();
  }

  get t(): InformacionTextos {
    return this.textos[this.idioma.getLang()];
  }
}