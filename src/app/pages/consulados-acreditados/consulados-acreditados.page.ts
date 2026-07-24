import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { IdiomaService, Lang } from '../../services/idioma';
import { AnalyticsService } from '../../services/analytics.service';
import { CONSULADOS_ACREDITADOS, ConsuladoAcreditado } from '../../data/consulados-acreditados.data';

interface PaisAcreditado {
  pais: string;
  codigo: string;
  banderaUrl: string;
  cantidad: number;
}

interface TextosAcreditados {
  titulo: string;
  etiqueta: string;
  subtitulo: string;
  buscadorPais: string;
  buscadorConsulado: string;
  verConsulados: string;
  resultados: string;
  volverPaises: string;
  sinResultados: string;
  direccion: string;
  telefonos: string;
  correo: string;
  horario: string;
  jurisdiccion: string;
  mapa: string;
  sos: string;
  inicio: string;
  denuncia: string;
  info: string;
  apoyo: string;
  acerca: string;
}

@Component({
  selector: 'app-consulados-acreditados',
  templateUrl: './consulados-acreditados.page.html',
  styleUrls: ['./consulados-acreditados.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonContent],
})
export class ConsuladosAcreditadosPage {
  busqueda = '';
  paisSeleccionado: string | null = null;

  consulados = CONSULADOS_ACREDITADOS as ConsuladoAcreditado[];

  constructor(
    public idioma: IdiomaService,
    private analytics: AnalyticsService
  ) {}

  textos: Record<Lang, TextosAcreditados> = {
    es: {
      titulo: 'Consulados acreditados',
      etiqueta: 'EN GUATEMALA',
      subtitulo: 'Directorio de consulados extranjeros acreditados en Guatemala.',
      buscadorPais: 'Buscar país',
      buscadorConsulado: 'Buscar país, ciudad, dirección o correo',
      verConsulados: 'Ver consulados acreditados',
      resultados: 'resultados',
      volverPaises: 'Ver países',
      sinResultados: 'No se encontraron resultados.',
      direccion: 'Dirección',
      telefonos: 'Teléfonos',
      correo: 'Correo',
      horario: 'Horario',
      jurisdiccion: 'Jurisdicción',
      mapa: 'Ver mapa',
      sos: 'SOS',
      inicio: 'Inicio',
      denuncia: 'Denuncia',
      info: 'Info',
      apoyo: 'Consejo y asesoria',
      acerca: 'Acerca de',
    },

    en: {
      titulo: 'Accredited Consulates',
      etiqueta: 'IN GUATEMALA',
      subtitulo: 'Directory of foreign consulates accredited in Guatemala.',
      buscadorPais: 'Search country',
      buscadorConsulado: 'Search country, city, address or email',
      verConsulados: 'View accredited consulates',
      resultados: 'results',
      volverPaises: 'View countries',
      sinResultados: 'No results found.',
      direccion: 'Address',
      telefonos: 'Phone numbers',
      correo: 'Email',
      horario: 'Schedule',
      jurisdiccion: 'Jurisdiction',
      mapa: 'View map',
      sos: 'SOS',
      inicio: 'Home',
      denuncia: 'Report',
      info: 'Info',
      apoyo: 'Advice and counsel',
      acerca: 'About',
    },
  };

  setLang(lang: Lang) {
    this.idioma.setLang(lang);
    void this.analytics.idioma(lang, 'consulados_acreditados');
  }

  registrarAccion(nombre: string, destino: string = '') {
    void this.analytics.accion(nombre, 'consulados_acreditados', destino);
  }

  get lang(): Lang {
    return this.idioma.getLang();
  }

  get t(): TextosAcreditados {
    return this.textos[this.idioma.getLang()];
  }

  get placeholderBuscador(): string {
    return this.paisSeleccionado ? this.t.buscadorConsulado : this.t.buscadorPais;
  }

  get paises(): PaisAcreditado[] {
    const mapa = new Map<string, number>();

    this.consulados.forEach((item: any) => {
      const pais = this.obtenerPais(item);

      if (!pais) {
        return;
      }

      mapa.set(pais, (mapa.get(pais) || 0) + 1);
    });

    let paises = Array.from(mapa.entries()).map(([pais, cantidad]) => {
      const codigo = this.obtenerCodigoPais(pais);

      return {
        pais,
        cantidad,
        codigo: codigo.toUpperCase(),
        banderaUrl: codigo ? `https://flagcdn.com/w160/${codigo}.png` : '',
      };
    });

    const texto = this.normalizar(this.busqueda);

    if (texto) {
      paises = paises.filter((item) =>
        this.normalizar(item.pais).includes(texto)
      );
    }

    return paises.sort((a, b) => a.pais.localeCompare(b.pais));
  }

  get consuladosFiltrados(): ConsuladoAcreditado[] {
    if (!this.paisSeleccionado) {
      return [];
    }

    const texto = this.normalizar(this.busqueda);

    return this.consulados.filter((item: any) => {
      const mismoPais =
        this.normalizar(this.obtenerPais(item)) ===
        this.normalizar(this.paisSeleccionado || '');

      if (!mismoPais) {
        return false;
      }

      if (!texto) {
        return true;
      }

      const contenido = [
        this.obtenerPais(item),
        this.obtenerCiudad(item),
        this.obtenerNombre(item),
        this.obtenerDireccion(item),
        this.obtenerTelefonos(item),
        this.obtenerCorreo(item),
        this.obtenerHorario(item),
        this.obtenerJurisdiccion(item),
      ].join(' ');

      return this.normalizar(contenido).includes(texto);
    });
  }

  seleccionarPais(pais: string) {
    void this.analytics.accion('seleccionar_pais_consulado_acreditado', 'consulados_acreditados', pais);

    this.paisSeleccionado = pais;
    this.busqueda = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  volverAPaises() {
    void this.analytics.accion('volver_paises_acreditados', 'consulados_acreditados', 'paises');

    this.paisSeleccionado = null;
    this.busqueda = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  abrirLink(url: string) {
    void this.analytics.enlace('link_consulado_acreditado', url, 'consulados_acreditados');
    window.open(url, '_blank');
  }

  obtenerPais(item: any): string {
    return item.pais || item.país || item.country || item.estado || '';
  }

  obtenerCiudad(item: any): string {
    return item.ciudad || item.city || item.municipio || '';
  }

  obtenerNombre(item: any): string {
    return (
      item.nombre ||
      item.name ||
      item.consulado ||
      item.titulo ||
      item.título ||
      'Consulado acreditado'
    );
  }

  obtenerDireccion(item: any): string {
    return item.direccion || item.dirección || item.address || '';
  }

  obtenerTelefonos(item: any): string {
    const telefonos =
      item.telefonos ||
      item.teléfonos ||
      item.telefono ||
      item.teléfono ||
      item.phone ||
      '';

    if (Array.isArray(telefonos)) {
      return telefonos.join(', ');
    }

    return telefonos;
  }

  obtenerCorreo(item: any): string {
    const correo = item.correo || item.email || item.emails || '';

    if (Array.isArray(correo)) {
      return correo.join(', ');
    }

    return correo;
  }

  obtenerHorario(item: any): string {
    return item.horario || item.schedule || '';
  }

  obtenerJurisdiccion(item: any): string {
    return item.jurisdiccion || item.jurisdicción || item.jurisdiction || '';
  }

  obtenerMapa(item: any): string {
    return item.mapa || item.maps || item.google_maps || item.ubicacion || item.ubicación || '';
  }

  obtenerEncabezado(item: any): string {
    const pais = this.obtenerPais(item);
    const ciudad = this.obtenerCiudad(item);

    if (pais && ciudad) {
      return `${pais} · ${ciudad}`;
    }

    return pais || ciudad || '';
  }

  obtenerCodigoPais(pais: string | null): string {
    const nombre = this.normalizar(pais || '');

    const codigos: Record<string, string> = {
      'alemania': 'de',
      'republica federal de alemania': 'de',
      'república federal de alemania': 'de',

      'argentina': 'ar',
      'republica argentina': 'ar',
      'república argentina': 'ar',

      'australia': 'au',
      'austria': 'at',

      'belgica': 'be',
      'bélgica': 'be',
      'reino de belgica': 'be',
      'reino de bélgica': 'be',

      'belice': 'bz',
      'belize': 'bz',

      'bolivia': 'bo',
      'estado plurinacional de bolivia': 'bo',

      'brasil': 'br',
      'brazil': 'br',
      'republica federativa del brasil': 'br',
      'república federativa del brasil': 'br',

      'canada': 'ca',
      'canadá': 'ca',

      'chile': 'cl',
      'republica de chile': 'cl',
      'república de chile': 'cl',

      'china': 'cn',
      'republica popular china': 'cn',
      'república popular china': 'cn',

      'china taiwan': 'tw',
      'china (taiwan)': 'tw',
      'china (taiwán)': 'tw',
      'taiwan': 'tw',
      'taiwán': 'tw',

      'colombia': 'co',
      'republica de colombia': 'co',
      'república de colombia': 'co',

      'corea': 'kr',
      'corea del sur': 'kr',
      'republica de corea': 'kr',
      'república de corea': 'kr',

      'costa rica': 'cr',
      'republica de costa rica': 'cr',
      'república de costa rica': 'cr',

      'cuba': 'cu',
      'republica de cuba': 'cu',
      'república de cuba': 'cu',

      'ecuador': 'ec',
      'republica del ecuador': 'ec',
      'república del ecuador': 'ec',

      'egipto': 'eg',
      'republica arabe de egipto': 'eg',
      'república árabe de egipto': 'eg',

      'el salvador': 'sv',
      'republica de el salvador': 'sv',
      'república de el salvador': 'sv',

      'espana': 'es',
      'españa': 'es',
      'reino de espana': 'es',
      'reino de españa': 'es',

      'estados unidos': 'us',
      'estados unidos de america': 'us',
      'estados unidos de américa': 'us',

      'estados unidos mexicanos': 'mx',
      'mexico': 'mx',
      'méxico': 'mx',

      'francia': 'fr',
      'republica francesa': 'fr',
      'república francesa': 'fr',

      'guatemala': 'gt',
      'republica de guatemala': 'gt',
      'república de guatemala': 'gt',

      'haiti': 'ht',
      'haití': 'ht',
      'republica de haiti': 'ht',
      'república de haití': 'ht',

      'honduras': 'hn',
      'republica de honduras': 'hn',
      'república de honduras': 'hn',

      'india': 'in',
      'republica de la india': 'in',
      'república de la india': 'in',

      'israel': 'il',
      'estado de israel': 'il',

      'italia': 'it',
      'republica italiana': 'it',
      'república italiana': 'it',

      'japon': 'jp',
      'japón': 'jp',

      'marruecos': 'ma',
      'reino de marruecos': 'ma',

      'nicaragua': 'ni',
      'republica de nicaragua': 'ni',
      'república de nicaragua': 'ni',

      'paises bajos': 'nl',
      'países bajos': 'nl',
      'reino de los paises bajos': 'nl',
      'reino de los países bajos': 'nl',
      'holanda': 'nl',

      'panama': 'pa',
      'panamá': 'pa',
      'republica de panama': 'pa',
      'república de panamá': 'pa',

      'paraguay': 'py',
      'republica del paraguay': 'py',
      'república del paraguay': 'py',

      'peru': 'pe',
      'perú': 'pe',
      'republica del peru': 'pe',
      'república del perú': 'pe',

      'portugal': 'pt',
      'republica portuguesa': 'pt',
      'república portuguesa': 'pt',

      'reino unido': 'gb',
      'reino unido de gran bretana e irlanda del norte': 'gb',
      'reino unido de gran bretaña e irlanda del norte': 'gb',

      'republica dominicana': 'do',
      'república dominicana': 'do',

      'rusia': 'ru',
      'federacion de rusia': 'ru',
      'federación de rusia': 'ru',

      'suecia': 'se',
      'reino de suecia': 'se',

      'suiza': 'ch',
      'confederacion suiza': 'ch',
      'confederación suiza': 'ch',

      'turquia': 'tr',
      'turquía': 'tr',
      'turkiye': 'tr',
      'türkiye': 'tr',
      'republica de turkiye': 'tr',
      'república de türkiye': 'tr',

      'uruguay': 'uy',
      'republica oriental del uruguay': 'uy',
      'república oriental del uruguay': 'uy',

      'venezuela': 've',
      'republica bolivariana de venezuela': 've',
      'república bolivariana de venezuela': 've',
      'venezuela republica bolivariana de venezuela': 've',
      'venezuela (republica bolivariana de venezuela)': 've',
      'venezuela (república bolivariana de venezuela)': 've',
    };

    return codigos[nombre] || '';
  }

  obtenerBanderaUrl(pais: string | null): string {
    const codigo = this.obtenerCodigoPais(pais);

    if (!codigo) {
      return '';
    }

    return `https://flagcdn.com/w160/${codigo}.png`;
  }

  obtenerInicialesPais(pais: string | null): string {
    const texto = (pais || '').trim();

    if (!texto) {
      return '—';
    }

    return texto
      .split(' ')
      .filter((palabra) => palabra.length > 0)
      .slice(0, 2)
      .map((palabra) => palabra.charAt(0).toUpperCase())
      .join('');
  }

  normalizar(texto: string): string {
    return (texto || '')
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }
}
