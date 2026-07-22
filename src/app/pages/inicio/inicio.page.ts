import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdiomaService, Lang } from '../../services/idioma';
import { AnalyticsService } from '../../services/analytics.service';

interface InicioTextos {
  appNombre: string;
  appGt: string;
  lema: string;

  ayuda: string;
  ayudaEtiqueta: string;
  ayudaDescripcion: string;

  informacion: string;
  informacionDescripcion: string;

  privacidadTitulo: string;
  privacidadTexto: string;

  cargando: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
})
export class InicioPage implements OnInit {
  private static splashYaMostrado = false;

  mostrarSplash = !InicioPage.splashYaMostrado;

  constructor(
  public idioma: IdiomaService,
  private router: Router,
  private analytics: AnalyticsService
) {}

  textos: Record<Lang, InicioTextos> = {
    es: {
      appNombre: 'Contigo',
      appGt: 'GT',
      lema: 'Ayuda y orientación segura, rápida y discreta.',

      ayuda: 'Ayuda inmediata',
      ayudaEtiqueta: 'ACCESO SEGURO',
      ayudaDescripcion: 'Acceso seguro y confidencial.',

      informacion: 'Información',
      informacionDescripcion: 'Recursos y orientación para ti.',

      privacidadTitulo: 'Tu privacidad es importante.',
      privacidadTexto: 'Todo es 100% confidencial.',

      cargando: 'Cargando...',
    },

    en: {
      appNombre: 'Contigo',
      appGt: 'GT',
      lema: 'Safe, fast and discreet help and guidance.',

      ayuda: 'Immediate help',
      ayudaEtiqueta: 'SAFE ACCESS',
      ayudaDescripcion: 'Safe and confidential access.',

      informacion: 'Information',
      informacionDescripcion: 'Resources and guidance for you.',

      privacidadTitulo: 'Your privacy matters.',
      privacidadTexto: 'Everything is 100% confidential.',

      cargando: 'Loading...',
    },
  };

  ngOnInit() {
    void this.analytics.pantalla('inicio');
    if (!InicioPage.splashYaMostrado) {
      this.mostrarSplash = true;
      InicioPage.splashYaMostrado = true;

      setTimeout(() => {
        this.mostrarSplash = false;
      }, 1800);
    } else {
      this.mostrarSplash = false;
    }
  }

 setLang(lang: Lang) {
  this.idioma.setLang(lang);
  void this.analytics.idioma(lang, 'inicio');
}

  get lang(): Lang {
    return this.idioma.getLang();
  }

  get t(): InicioTextos {
    return this.textos[this.idioma.getLang()];
  }

  irDenuncia() {
  void this.analytics.accion('ayuda_inmediata', 'inicio', 'denuncia');
  this.router.navigate(['/denuncia']);
}

irInformacion() {
  void this.analytics.accion('informacion', 'inicio', 'informacion');
  this.router.navigate(['/informacion']);
}
}
