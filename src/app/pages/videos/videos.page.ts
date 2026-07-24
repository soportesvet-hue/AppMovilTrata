import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { addIcons } from 'ionicons';
import {
  chevronBack,
  playCircle,
  home,
  alertCircle,
  book,
  chatbubbleEllipses
} from 'ionicons/icons';

import { IdiomaService, Lang } from '../../services/idioma';
import { AnalyticsService } from '../../services/analytics.service';

interface VideoItem {
  titulo: Record<Lang, string>;
  descripcion: Record<Lang, string>;
  youtubeUrl: string;
  embedUrl: SafeResourceUrl;
}

interface VideosTextos {
  titulo: string;
  subtitulo: string;
  etiqueta: string;
  avisoTitulo: string;
  avisoTexto: string;
  abrirYoutube: string;
  inicio: string;
  denunciaNav: string;
  info: string;
  apoyo: string;
}

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, RouterLink, CommonModule],
})
export class VideosPage {
  videos: VideoItem[] = [];

  constructor(
    public idioma: IdiomaService,
    private sanitizer: DomSanitizer,
    private analytics: AnalyticsService
  ) {
    addIcons({
      chevronBack,
      playCircle,
      home,
      alertCircle,
      book,
      chatbubbleEllipses
    });

    this.videos = [
      {
        titulo: {
          es: 'Video 1',
          en: 'Video 1',
        },
        descripcion: {
          es: 'Material audiovisual de prevención para reconocer señales de alerta.',
          en: 'Prevention audiovisual material to recognize warning signs.',
        },
        youtubeUrl: 'https://www.youtube.com/watch?v=g6WYDrhusSU',
        embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/g6WYDrhusSU'
        ),
      },
      {
        titulo: {
          es: 'Video 2',
          en: 'Video 2',
        },
        descripcion: {
          es: 'Video informativo para fortalecer la prevención de la trata de personas.',
          en: 'Informational video to strengthen human trafficking prevention.',
        },
        youtubeUrl: 'https://www.youtube.com/watch?v=wNQSPvwODkc',
        embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/wNQSPvwODkc'
        ),
      },
      {
        titulo: {
          es: 'Video 3',
          en: 'Video 3',
        },
        descripcion: {
          es: 'Material audiovisual informativo para fortalecer la prevención y reconocer situaciones de riesgo.',
          en: 'Informational audiovisual material to strengthen prevention and recognize risky situations.',
        },
        youtubeUrl: 'https://www.youtube.com/watch?v=qqs7rEOVI1k',
        embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/qqs7rEOVI1k'
        ),
      },
    ];
  }

  textos: Record<Lang, VideosTextos> = {
    es: {
      titulo: 'Videos',
      subtitulo: 'Material audiovisual para informarte y reconocer señales de riesgo.',
      etiqueta: 'PREVENCIÓN',
      avisoTitulo: 'Nota',
      avisoTexto:
        'Si algún video no se reproduce dentro de la app, puedes abrirlo directamente en YouTube con el botón inferior.',
      abrirYoutube: 'Abrir en YouTube',
      inicio: 'Inicio',
      denunciaNav: 'Denuncia',
      info: 'Info',
      apoyo: 'Apoyo',
    },
    en: {
      titulo: 'Videos',
      subtitulo: 'Audiovisual material to learn and recognize warning signs.',
      etiqueta: 'PREVENTION',
      avisoTitulo: 'Note',
      avisoTexto:
        'If a video does not play inside the app, you can open it directly on YouTube using the button below.',
      abrirYoutube: 'Open on YouTube',
      inicio: 'Home',
      denunciaNav: 'Report',
      info: 'Info',
      apoyo: 'Support',
    },
  };

  setLang(lang: Lang) {
    this.idioma.setLang(lang);
    void this.analytics.idioma(lang, 'videos');
  }

  abrirYoutube(url: string, index: number = 0) {
    const nombreVideo = index > 0 ? `video_${index}` : 'video_youtube';

    void this.analytics.enlace(nombreVideo, url, 'videos');

    window.open(url, '_blank');
  }

  registrarAccion(nombre: string, destino: string = '') {
    void this.analytics.accion(nombre, 'videos', destino);
  }

  get lang(): Lang {
    return this.idioma.getLang() as Lang;
  }

  get t(): VideosTextos {
    const lang = this.idioma.getLang() as Lang;
    return this.textos[lang];
  }
}