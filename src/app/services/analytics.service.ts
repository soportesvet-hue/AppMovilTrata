import { Injectable } from '@angular/core';
import { FirebaseAnalytics } from '@capacitor-firebase/analytics';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  async pantalla(nombrePantalla: string) {
    try {
      await FirebaseAnalytics.setCurrentScreen({
        screenName: nombrePantalla,
        screenClassOverride: nombrePantalla
      });

      await FirebaseAnalytics.logEvent({
        name: 'pantalla_visitada',
        params: {
          pantalla: nombrePantalla
        }
      });

      console.log('Pantalla registrada:', nombrePantalla);
    } catch (error) {
      console.log('Analytics pantalla no disponible:', error);
    }
  }

  async accion(nombre: string, pantalla: string, destino: string = '') {
    try {
      await FirebaseAnalytics.logEvent({
        name: 'click_accion',
        params: {
          nombre: nombre,
          pantalla: pantalla,
          destino: destino
        }
      });

      console.log('Acción registrada:', nombre, pantalla, destino);
    } catch (error) {
      console.log('Analytics acción no disponible:', error);
    }
  }

  async contacto(tipo: string, destino: string, pantalla: string) {
    try {
      await FirebaseAnalytics.logEvent({
        name: 'click_contacto',
        params: {
          tipo: tipo,
          destino: destino,
          pantalla: pantalla
        }
      });

      console.log('Contacto registrado:', tipo, destino, pantalla);
    } catch (error) {
      console.log('Analytics contacto no disponible:', error);
    }
  }

  async enlace(nombre: string, url: string, pantalla: string) {
    try {
      await FirebaseAnalytics.logEvent({
        name: 'click_enlace',
        params: {
          nombre: nombre,
          url: url,
          pantalla: pantalla
        }
      });

      console.log('Enlace registrado:', nombre, url, pantalla);
    } catch (error) {
      console.log('Analytics enlace no disponible:', error);
    }
  }

  async idioma(idioma: string, pantalla: string) {
    try {
      await FirebaseAnalytics.logEvent({
        name: 'cambio_idioma',
        params: {
          idioma: idioma,
          pantalla: pantalla
        }
      });

      console.log('Idioma registrado:', idioma, pantalla);
    } catch (error) {
      console.log('Analytics idioma no disponible:', error);
    }
  }
}
