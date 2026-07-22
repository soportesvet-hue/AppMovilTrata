import { Injectable } from '@angular/core';

export type Lang = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
  private lang: Lang = 'es';

  constructor() {
    const savedLang = localStorage.getItem('app_lang');

    if (savedLang === 'es' || savedLang === 'en') {
      this.lang = savedLang;
    }
  }

  setLang(lang: Lang) {
    this.lang = lang;
    localStorage.setItem('app_lang', lang);
  }

  getLang(): Lang {
    return this.lang;
  }

  isEs(): boolean {
    return this.lang === 'es';
  }

  isEn(): boolean {
    return this.lang === 'en';
  }
}
