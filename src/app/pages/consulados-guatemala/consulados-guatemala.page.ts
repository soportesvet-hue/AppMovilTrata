import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

import { IdiomaService, Lang } from '../../services/idioma';
import { AnalyticsService } from '../../services/analytics.service';
import { CONSULADOS_GUATEMALA, ConsuladoGuatemala } from '../../data/consulados-guatemala.data';

interface PaisConsulado {
  pais: string;
  codigo: string;
  banderaUrl: string;
  cantidad: number;
}

interface TextosConsulados {
  titulo: string;
  etiqueta: string;
  subtitulo: string;
  buscadorPais: string;
  buscadorConsulado: string;
  verConsulados: string;
  resultados: string;
  volverPaises: string;
  sinResultados: string;
  fuenteTitulo: string;
  fuenteTexto: string;
  fuenteBoton: string;
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
  selector: 'app-consulados-guatemala',
  templateUrl: './consulados-guatemala.page.html',
  styleUrls: ['./consulados-guatemala.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonContent],
})
export class ConsuladosGuatemalaPage {
  busqueda = '';
  paisSeleccionado: string | null = null;

  consulados = CONSULADOS_GUATEMALA as ConsuladoGuatemala[];

  constructor(
    public idioma: IdiomaService,
    private analytics: AnalyticsService
  ) {}

  textos: Record<Lang, TextosConsulados> = {
    es: {
      titulo: 'Consulados de Guatemala',
      etiqueta: 'GUATEMALA EN EL EXTERIOR',
      subtitulo: 'Directorio de consulados de Guatemala en el extranjero.',
      buscadorPais: 'Buscar país',
      buscadorConsulado: 'Buscar país, ciudad, dirección o correo',
      verConsulados: 'Ver consulados en el país',
      resultados: 'resultados',
      volverPaises: 'Ver países',
      sinResultados: 'No se encontraron resultados.',
      fuenteTitulo: 'Fuente oficial MINEX',
      fuenteTexto: 'Ver directorio oficial en MINEX',
      fuenteBoton: 'MINEX',
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
      titulo: 'Guatemalan Consulates',
      etiqueta: 'GUATEMALA ABROAD',
      subtitulo: 'Directory of Guatemalan consulates abroad.',
      buscadorPais: 'Search country',
      buscadorConsulado: 'Search country, city, address or email',
      verConsulados: 'View consulates in this country',
      resultados: 'results',
      volverPaises: 'View countries',
      sinResultados: 'No results found.',
      fuenteTitulo: 'Official MINEX source',
      fuenteTexto: 'View official directory on MINEX',
      fuenteBoton: 'MINEX',
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
    void this.analytics.idioma(lang, 'consulados_guatemala');
  }

  registrarAccion(nombre: string, destino: string = '') {
    void this.analytics.accion(nombre, 'consulados_guatemala', destino);
  }

  get lang(): Lang {
    return this.idioma.getLang();
  }

  get t(): TextosConsulados {
    return this.textos[this.idioma.getLang()];
  }

  get placeholderBuscador(): string {
    return this.paisSeleccionado ? this.t.buscadorConsulado : this.t.buscadorPais;
  }

  get paises(): PaisConsulado[] {
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

  get consuladosFiltrados(): ConsuladoGuatemala[] {
    if (!this.paisSeleccionado) {
      return [];
    }

    const texto = this.normalizar(this.busqueda);

    return this.consulados.filter((item: any) => {
      const mismoPais =
        this.normalizar(this.obtenerPais(item)) === this.normalizar(this.paisSeleccionado || '');

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
    void this.analytics.accion('seleccionar_pais_consulado', 'consulados_guatemala', pais);

    this.paisSeleccionado = pais;
    this.busqueda = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  volverAPaises() {
    void this.analytics.accion('volver_paises_consulados', 'consulados_guatemala', 'paises');

    this.paisSeleccionado = null;
    this.busqueda = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  abrirLink(url: string) {
    void this.analytics.enlace('link_consulado_guatemala', url, 'consulados_guatemala');
    window.open(url, '_blank');
  }

  obtenerPais(item: any): string {
    return item.pais || item.country || item.país || '';
  }

  obtenerCiudad(item: any): string {
    return item.ciudad || item.city || item.municipio || '';
  }

  obtenerNombre(item: any): string {
    return item.nombre || item.name || item.consulado || item.titulo || 'Consulado de Guatemala';
  }

  obtenerDireccion(item: any): string {
    return item.direccion || item.dirección || item.address || '';
  }

  obtenerTelefonos(item: any): string {
    const telefonos = item.telefonos || item.teléfonos || item.telefono || item.phone || '';

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
      'belice': 'bz',
      'belize': 'bz',
      'canada': 'ca',
      'canadá': 'ca',
      'estados unidos': 'us',
      'estados unidos de america': 'us',
      'estados unidos de américa': 'us',
      'honduras': 'hn',
      'marruecos': 'ma',
      'mexico': 'mx',
      'méxico': 'mx',

      'alemania': 'de',
      'argentina': 'ar',
      'aruba': 'aw',
      'australia': 'au',
      'austria': 'at',
      'azerbaiyan': 'az',
      'azerbaijan': 'az',
      'bolivia': 'bo',
      'brasil': 'br',
      'brazil': 'br',
      'chile': 'cl',
      'china': 'cn',
      'colombia': 'co',
      'costa rica': 'cr',
      'cuba': 'cu',
      'ecuador': 'ec',
      'egipto': 'eg',
      'el salvador': 'sv',
      'espana': 'es',
      'españa': 'es',
      'francia': 'fr',
      'guatemala': 'gt',
      'haiti': 'ht',
      'india': 'in',
      'israel': 'il',
      'italia': 'it',
      'jamaica': 'jm',
      'japon': 'jp',
      'japón': 'jp',
      'nicaragua': 'ni',
      'paises bajos': 'nl',
      'países bajos': 'nl',
      'panama': 'pa',
      'panamá': 'pa',
      'paraguay': 'py',
      'peru': 'pe',
      'perú': 'pe',
      'portugal': 'pt',
      'reino unido': 'gb',
      'republica dominicana': 'do',
      'república dominicana': 'do',
      'suiza': 'ch',
      'uruguay': 'uy',
      'venezuela': 've',
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
      .filter(palabra => palabra.length > 0)
      .slice(0, 2)
      .map(palabra => palabra.charAt(0).toUpperCase())
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
