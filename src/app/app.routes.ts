import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'home',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'denuncia',
    loadComponent: () => import('./pages/denuncia/denuncia.page').then( m => m.DenunciaPage)
  },
  {
    path: 'informacion',
    loadComponent: () => import('./pages/informacion/informacion.page').then( m => m.InformacionPage)
  },
  {
    path: 'aprende-trata',
    loadComponent: () => import('./pages/aprende-trata/aprende-trata.page').then( m => m.AprendeTrataPage)
  },
  {
    path: 'zona-joven',
    loadComponent: () => import('./pages/zona-joven/zona-joven.page').then( m => m.ZonaJovenPage)
  },
  {
    path: 'viajas-extranjero',
    loadComponent: () => import('./pages/viajas-extranjero/viajas-extranjero.page').then( m => m.ViajasExtranjeroPage)
  },
  {
    path: 'visitas-guatemala',
    loadComponent: () => import('./pages/visitas-guatemala/visitas-guatemala.page').then( m => m.VisitasGuatemalaPage)
  },
  {
    path: 'consulados-guatemala',
    loadComponent: () => import('./pages/consulados-guatemala/consulados-guatemala.page').then( m => m.ConsuladosGuatemalaPage)
  },
  {
    path: 'consulados-acreditados',
    loadComponent: () => import('./pages/consulados-acreditados/consulados-acreditados.page').then( m => m.ConsuladosAcreditadosPage)
  },
  {
    path: 'videos',
    loadComponent: () => import('./pages/videos/videos.page').then( m => m.VideosPage)
  },
  {
    path: 'apoyo',
    loadComponent: () => import('./pages/apoyo/apoyo.page').then( m => m.ApoyoPage)
  },
  {
    path: 'salida-rapida',
    loadComponent: () => import('./pages/salida-rapida/salida-rapida.page').then( m => m.SalidaRapidaPage)
  },
  {
  path: 'privacidad',
  loadComponent: () =>
    import('./pages/privacidad/privacidad.page').then(m => m.PrivacidadPage)
},
];