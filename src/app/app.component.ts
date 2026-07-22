import { Component, HostListener, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AnalyticsService } from './services/analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  private pantallaActual = 'inicio';

  constructor(
    private router: Router,
    private analytics: AnalyticsService
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const pantalla = this.obtenerNombrePantalla(event.urlAfterRedirects);
        this.pantallaActual = pantalla;
        void this.analytics.pantalla(pantalla);
      });
  }

  @HostListener('document:click', [''])
  registrarClickGlobal(event: Event) {
    const elemento = event.target as HTMLElement | null;

    if (!elemento) {
      return;
    }

    const link = elemento.closest('a') as HTMLAnchorElement | null;

    if (!link) {
      return;
    }

    const href = link.getAttribute('href') || '';
    const texto = this.limpiarTexto(
      link.innerText || link.getAttribute('aria-label') || href
    );

    if (href.startsWith('tel:')) {
      const numero = href.replace('tel:', '').trim();
      void this.analytics.contacto('llamada', numero, this.pantallaActual);
      return;
    }

    if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
      void this.analytics.contacto('whatsapp', href, this.pantallaActual);
      return;
    }

    if (href.startsWith('http')) {
      void this.analytics.enlace(texto || 'enlace_externo', href, this.pantallaActual);
      return;
    }
  }

  private obtenerNombrePantalla(url: string): string {
    const ruta = url
      .split('?')[0]
      .split('#')[0]
      .replace(/^\/+|\/+$/g, '');

    if (!ruta) {
      return 'inicio';
    }

    return ruta
      .replace(/\//g, '_')
      .replace(/-/g, '_')
      .toLowerCase();
  }

  private limpiarTexto(texto: string): string {
    return texto
      .replace(/\s+/g, ' ')
      .trim()
      .substring(0, 60);
  }
}