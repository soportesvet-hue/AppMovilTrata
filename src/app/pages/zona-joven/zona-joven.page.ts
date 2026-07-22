import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { IdiomaService, Lang } from '../../services/idioma';
import { AnalyticsService } from '../../services/analytics.service';

interface TemaJoven {
  id: string;
  icon: string;
  color: string;
  titulo: string;
  texto?: string;
  items?: string[];
}

interface QuizPregunta {
  pregunta: string;
  opciones: string[];
  correcta: number;
  explicacion: string;
}

interface ZonaJovenTextos {
  titulo: string;
  subtitulo: string;
  etiqueta: string;

  simuladorTitulo: string;
  simuladorTexto: string;
  startTitulo: string;
  startTexto: string;
  iniciar: string;
  continuar: string;
  chatPersona1: string;
  chatRespuesta: string;
  chatPersona2: string;
  senalDetectada: string;
  opcionesTitulo: string;
  opciones: string[];
  respuestaCorrecta: string;
  respuestaAlerta: string;
  reiniciar: string;

  temasTitulo: string;
  temasSubtitulo: string;
  temas: TemaJoven[];

  quizTitulo: string;
  quizIntro: string;
  iniciarQuiz: string;
  siguiente: string;
  finalizar: string;
  reiniciarQuiz: string;
  preguntaTexto: string;
  deTexto: string;
  quizPreguntas: QuizPregunta[];
  resultadoTitulo: string;
  resultadoExcelente: string;
  resultadoBien: string;
  resultadoExplora: string;

  inicio: string;
  denunciaNav: string;
  info: string;
  apoyo: string;
}

@Component({
  selector: 'app-zona-joven',
  templateUrl: './zona-joven.page.html',
  styleUrls: ['./zona-joven.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, RouterLink, CommonModule],
})
export class ZonaJovenPage {
  constructor(
    public idioma: IdiomaService,
    private analytics: AnalyticsService
  ) {}

  simuladorIniciado = false;
  pasoSimulador = 0;
  opcionSeleccionada: number | null = null;
  activeTopicIndex = 0;

  quizIniciado = false;
  quizCompletado = false;
  quizActual = 0;
  respuestasQuiz: number[] = [];

  mitoActivo = 0;
  respuestaMito: string | null = null;
  noEsAmorActivo: number | null = null;

  checklistMarcado: boolean[] = [false, false, false, false, false, false];

  mitosRealidad = [
    {
      preguntaEs: 'La trata de personas solo ocurre si llevan a alguien a otro país.',
      preguntaEn: 'Human trafficking only happens if someone is taken to another country.',
      correcta: 'mito',
      respuestaEs: 'Mito. La trata también puede ocurrir dentro del mismo país y puede iniciar mediante engaños en línea.',
      respuestaEn: 'Myth. Trafficking can also happen within the same country and may start through online deception.',
    },
    {
      preguntaEs: 'Si alguien me ofrece trabajo sin requisitos, debo revisar bien antes de aceptar.',
      preguntaEn: 'If someone offers me a job with no requirements, I should check carefully before accepting.',
      correcta: 'realidad',
      respuestaEs: 'Realidad. Las ofertas demasiado fáciles pueden ser una señal de riesgo.',
      respuestaEn: 'Reality. Offers that seem too easy can be a warning sign.',
    },
    {
      preguntaEs: 'Pedir que una relación se mantenga en secreto puede ser una señal de alerta.',
      preguntaEn: 'Asking to keep a relationship secret can be a warning sign.',
      correcta: 'realidad',
      respuestaEs: 'Realidad. El secreto y el aislamiento pueden usarse para manipular o controlar.',
      respuestaEn: 'Reality. Secrecy and isolation can be used to manipulate or control.',
    },
  ];

  noEsAmor = [
    {
      tituloEs: 'Te controla',
      tituloEn: 'Controls you',
      textoEs: 'No es amor si revisa tus mensajes, decide con quién hablás o te exige explicar todo.',
      textoEn: 'It is not love if someone checks your messages, controls who you talk to, or demands explanations.',
      icono: '🔒',
    },
    {
      tituloEs: 'Te aísla',
      tituloEn: 'Isolates you',
      textoEs: 'No es amor si te aleja de tu familia, amistades o redes de apoyo.',
      textoEn: 'It is not love if someone separates you from family, friends, or support networks.',
      icono: '🚫',
    },
    {
      tituloEs: 'Te pide fotos privadas',
      tituloEn: 'Asks for private photos',
      textoEs: 'No compartás fotos íntimas. Pueden usarse para presionarte, amenazarte o manipularte.',
      textoEn: 'Do not share intimate photos. They can be used to pressure, threaten, or manipulate you.',
      icono: '📵',
    },
    {
      tituloEs: 'Te amenaza',
      tituloEn: 'Threatens you',
      textoEs: 'Las amenazas nunca son una muestra de cariño. Pedí apoyo si te sentís en riesgo.',
      textoEn: 'Threats are never a sign of love. Seek support if you feel at risk.',
      icono: '⚠️',
    },
  ];

  checklistConfianza = [
    {
      textoEs: '¿Te pide guardar secretos?',
      textoEn: 'Does this person ask you to keep secrets?',
    },
    {
      textoEs: '¿Te ofrece dinero, regalos o viajes?',
      textoEn: 'Does this person offer money, gifts, or trips?',
    },
    {
      textoEs: '¿Te presiona para enviar fotos?',
      textoEn: 'Does this person pressure you to send photos?',
    },
    {
      textoEs: '¿Te pide verte a solas?',
      textoEn: 'Does this person ask to meet you alone?',
    },
    {
      textoEs: '¿Te dice que borres conversaciones?',
      textoEn: 'Does this person ask you to delete conversations?',
    },
    {
      textoEs: '¿Te aleja de tu familia o amistades?',
      textoEn: 'Does this person separate you from family or friends?',
    },
  ];

  textos: Record<Lang, ZonaJovenTextos> = {
    es: {
      titulo: 'Zona Joven',
      subtitulo: 'Consejos rápidos para cuidarte en internet, redes sociales y videojuegos.',
      etiqueta: 'SEGURIDAD DIGITAL',

      simuladorTitulo: 'Mini simulador',
      simuladorTexto: 'Practica cómo identificar señales de riesgo en una conversación sospechosa.',
      startTitulo: 'Simulador interactivo',
      startTexto: 'Lee la conversación, avanza paso a paso y elegí qué harías.',
      iniciar: 'Iniciar simulador',
      continuar: 'Continuar',
      chatPersona1:
        'Hola. Vi tu perfil y me caíste súper bien. Te puedo ayudar a ganar dinero rápido sin tantos requisitos.',
      chatRespuesta:
        '¿De qué se trata? ¿Qué empresa es?',
      chatPersona2:
        'Luego te explico, pero necesito tu número, unas fotos y que no le cuentes a nadie para que no te ganen la oportunidad.',
      senalDetectada:
        'Señales: ofrece demasiado, evita dar detalles claros, pide información personal y solicita mantener secreto.',
      opcionesTitulo: '¿Qué harías?',
      opciones: [
        'Le envío mis datos para no perder la oportunidad.',
        'Dejo de compartir información, tomo capturas y busco apoyo.',
        'Acepto reunirme sin avisarle a nadie.',
      ],
      respuestaCorrecta:
        'Correcto. Lo más seguro es no compartir datos, guardar evidencia y pedir apoyo a una persona adulta de confianza.',
      respuestaAlerta:
        'Cuidado. Esa acción puede ponerte en riesgo. Lo mejor es no compartir información personal y buscar apoyo.',
      reiniciar: 'Reiniciar',

      temasTitulo: 'Elige qué quieres aprender',
      temasSubtitulo: 'Desliza a los lados para explorar cada consejo.',
      temas: [
        {
          id: 'intro',
          icon: 'globe',
          color: 'purple',
          titulo: 'Consejos de seguridad digital',
          texto:
            'Cuida tu seguridad digital:',
          items: [
            'Protege tu información personal.',
            'No compartas datos sensibles.',
            'Configura la privacidad de tus redes sociales.',
            'Utiliza contraseñas seguras.',
            'Recuerda que lo que compartas hoy en internet puede seguir circulando mañana.',
          ],
        },
        {
          id: 'ofertas',
          icon: 'bulb',
          color: 'yellow',
          titulo: '¡Piénsalo dos veces!',
          texto:
            'Una oferta que parece demasiado buena puede ocultar un caso de trata de personas.',
          items: [
            'Desconfía de ofertas de trabajo, becas, viajes o dinero fácil.',
            'Ten cuidado con promesas de amor que parecen perfectas desde el principio.',
            'Verifica siempre la información antes de aceptar cualquier propuesta.',
          ],
        },
        {
          id: 'conoce',
          icon: 'person',
          color: 'cyan',
          titulo: 'Conoce con quién hablas',
          items: [
            'No confíes en perfiles desconocidos; pueden ser falsos.',
            'Desconfía de quienes buscan tu confianza muy rápido o evitan verificar su identidad.',
            'La inteligencia artificial también puede usarse para crear imágenes, voces o perfiles falsos.',
            'Si algo te genera dudas o te hace sentir inseguro, busca apoyo de una persona de confianza.',
          ],
        },
        {
          id: 'senales',
          icon: 'alert-circle',
          color: 'red',
          titulo: 'Señales de riesgo y conductas de manipulación',
          texto:
            'Los tratantes utilizan redes sociales, aplicaciones de mensajería y videojuegos para captar víctimas.',
          items: [
            'Buscan ganarse tu confianza rápidamente.',
            'Ofrecen dinero, regalos, empleo, viajes o apoyo sin conocerte.',
            'Piden mantener la comunicación en secreto.',
            'Solicitan fotos, videos, tu ubicación o datos personales.',
            'Proponen encuentros sin informar a tu familia o personas de confianza.',
            'Ofrecen trabajos o modelaje sin requisitos claros.',
            'Intentan alejarte de tus amigos o familiares.',
          ],
        },
        {
          id: 'hacer',
          icon: 'checkmark',
          color: 'blue',
          titulo: '¿Qué hacer si identificas una señal de alerta?',
          items: [
            'Deja de compartir información personal.',
            'Toma capturas de pantalla de conversaciones sospechosas.',
            'Busca ayuda de una persona adulta de confianza para reportar la cuenta con las autoridades.',
          ],
        },
      ],

      quizTitulo: 'Mini Quiz',
      quizIntro: '¿Qué tanto sabes sobre la trata de personas?',
      iniciarQuiz: 'Iniciar quiz',
      siguiente: 'Siguiente',
      finalizar: 'Ver resultado',
      reiniciarQuiz: 'Reiniciar quiz',
      preguntaTexto: 'Pregunta',
      deTexto: 'de',
      resultadoTitulo: 'Resultado',
      resultadoExcelente:
        '¡Excelente! Conoces las principales señales para prevenir la trata de personas.',
      resultadoBien:
        '¡Muy bien! Sigue aprendiendo y comparte esta información con otras personas.',
      resultadoExplora:
        'Sigue explorando la aplicación. La información puede ayudarte a identificar riesgos y protegerte.',
      quizPreguntas: [
        {
          pregunta:
            'La trata de personas puede ocurrir únicamente cuando una persona es llevada a otro país.',
          opciones: ['Verdadero', 'Falso'],
          correcta: 1,
          explicacion:
            'Falso. La trata puede ocurrir dentro del mismo país o entre países.',
        },
        {
          pregunta: '¿Cuál de las siguientes puede ser una forma de captación?',
          opciones: [
            'Falsas ofertas de trabajo',
            'Promesas de estudios o viajes',
            'Relaciones amorosas engañosas',
            'Todas las anteriores',
          ],
          correcta: 3,
          explicacion: 'Todas las anteriores pueden ser formas de captación.',
        },
        {
          pregunta: 'Si una oferta parece demasiado buena para ser verdad, lo mejor es:',
          opciones: [
            'Aceptarla inmediatamente',
            'Compartir todos tus datos personales',
            'Verificar la información y consultar con personas de confianza',
            'Guardarla en secreto',
          ],
          correcta: 2,
          explicacion:
            'Lo mejor es verificar la información y consultar con personas de confianza.',
        },
        {
          pregunta: '¿Quién tiene la culpa cuando una persona es víctima de trata?',
          opciones: ['La víctima', 'Su familia', 'Los tratantes'],
          correcta: 2,
          explicacion: 'La culpa es de los tratantes. La víctima nunca tiene la culpa.',
        },
        {
          pregunta: '¿Cuál de estas es una señal de alerta en redes sociales?',
          opciones: [
            'Una persona insiste en mantener la relación en secreto',
            'Te pide fotografías personales',
            'Te ofrece dinero o regalos para ganarse tu confianza',
            'Todas las anteriores',
          ],
          correcta: 3,
          explicacion: 'Todas las anteriores son señales de alerta.',
        },
      ],

      inicio: 'Inicio',
      denunciaNav: 'Denuncia',
      info: 'Info',
      apoyo: 'Apoyo',
    },

    en: {
      titulo: 'Youth Zone',
      subtitulo: 'Quick tips to stay safer online, on social media and in games.',
      etiqueta: 'DIGITAL SAFETY',

      simuladorTitulo: 'Mini simulator',
      simuladorTexto: 'Practice identifying warning signs in a suspicious conversation.',
      startTitulo: 'Interactive simulator',
      startTexto: 'Read the conversation, move step by step and choose what you would do.',
      iniciar: 'Start simulator',
      continuar: 'Continue',
      chatPersona1:
        'Hi. I saw your profile and really liked you. I can help you earn money quickly with almost no requirements.',
      chatRespuesta:
        'What is it about? What company is it?',
      chatPersona2:
        'I will explain later, but I need your number, some photos and you must not tell anyone so nobody takes the opportunity from you.',
      senalDetectada:
        'Signs: offers too much, avoids clear details, asks for personal information and asks for secrecy.',
      opcionesTitulo: 'What would you do?',
      opciones: [
        'I send my information so I do not lose the opportunity.',
        'I stop sharing information, take screenshots and seek support.',
        'I agree to meet without telling anyone.',
      ],
      respuestaCorrecta:
        'Correct. The safest thing is not to share data, save evidence and ask a trusted adult for support.',
      respuestaAlerta:
        'Careful. That action can put you at risk. It is better not to share personal information and to seek support.',
      reiniciar: 'Restart',

      temasTitulo: 'Choose what you want to learn',
      temasSubtitulo: 'Swipe sideways to explore each tip.',
      temas: [
        {
          id: 'intro',
          icon: 'globe',
          color: 'purple',
          titulo: 'Digital safety tips',
          texto:
            'Protect your digital security:',
          items: [
            'Protect your personal information.',
            'Don\'t share sensitive data.',
            'Configure your social media privacy settings.',
            'Use strong passwords.',
            'Remember that what you share online today can still be circulating tomorrow.',
          ],
        },
        {
          id: 'ofertas',
          icon: 'bulb',
          color: 'yellow',
          titulo: 'Think twice!',
          texto:
            'An offer that seems too good to be true may be hiding a case of human trafficking.',
          items: [
            'Be wary of job offers, scholarships, trips, or easy money.',
            'Be careful of promises of love that seem perfect at first.',
            'Always verify information before accepting any proposal.',
          ],
        },
        {
          id: 'conoce',
          icon: 'person',
          color: 'cyan',
          titulo: 'Know who you are talking to',
          items: [
            'Don\'t trust unknown profiles; they may be fake.',
            'Be wary of those who try to gain your trust too quickly or avoid verifying their identity.',
            'Artificial intelligence can also be used to create fake images, voices, or profiles.',
            'If something makes you doubt yourself or feel unsafe, seek support from a trusted person.',
          ],
        },
        {
          id: 'senales',
          icon: 'alert-circle',
          color: 'red',
          titulo: 'Risk signs and manipulative behaviors',
          texto:
            'Traffickers use social media, messaging apps, and video games to recruit victims.',
          items: [
            'They try to gain your trust quickly.',
            'They offer money, gifts, jobs, trips, or support without knowing you.',
            'They ask to keep communication secret.',
            'They request photos, videos, your location, or personal information.',
            'They propose meetings without informing your family or trusted individuals.',
            'They offer jobs or modeling opportunities without clear requirements.',
            'They try to isolate you from your friends or family.',
          ],
        },
        {
          id: 'hacer',
          icon: 'checkmark',
          color: 'blue',
          titulo: 'What should you do if you identify a warning sign?',
          items: [
            'Stop sharing personal information.',
            'Take screenshots of suspicious conversations.',
            'Get help from a trusted adult to report the account to the authorities.',
          ],
        },
      ],

      quizTitulo: 'Mini Quiz',
      quizIntro: 'How much do you know about human trafficking?',
      iniciarQuiz: 'Start quiz',
      siguiente: 'Next',
      finalizar: 'See result',
      reiniciarQuiz: 'Restart quiz',
      preguntaTexto: 'Question',
      deTexto: 'of',
      resultadoTitulo: 'Result',
      resultadoExcelente:
        'Excellent! You know the main warning signs to help prevent human trafficking.',
      resultadoBien:
        'Very good! Keep learning and share this information with others.',
      resultadoExplora:
        'Keep exploring the app. This information can help you identify risks and protect yourself.',
      quizPreguntas: [
        {
          pregunta:
            'Human trafficking only happens when a person is taken to another country.',
          opciones: ['True', 'False'],
          correcta: 1,
          explicacion:
            'False. Trafficking can happen within the same country or between countries.',
        },
        {
          pregunta: 'Which of the following can be a recruitment method?',
          opciones: [
            'Fake job offers',
            'Promises of study or travel',
            'Deceptive romantic relationships',
            'All of the above',
          ],
          correcta: 3,
          explicacion: 'All of the above can be recruitment methods.',
        },
        {
          pregunta: 'If an offer seems too good to be true, the best thing is to:',
          opciones: [
            'Accept immediately',
            'Share all your personal data',
            'Verify the information and consult trusted people',
            'Keep it secret',
          ],
          correcta: 2,
          explicacion:
            'The best thing is to verify the information and consult trusted people.',
        },
        {
          pregunta: 'Who is to blame when a person is a victim of trafficking?',
          opciones: ['The victim', 'Their family', 'The traffickers'],
          correcta: 2,
          explicacion:
            'The traffickers are to blame. The victim is never to blame.',
        },
        {
          pregunta: 'Which of these is a warning sign on social media?',
          opciones: [
            'Someone insists on keeping the relationship secret',
            'Someone asks for personal photos',
            'Someone offers money or gifts to gain your trust',
            'All of the above',
          ],
          correcta: 3,
          explicacion: 'All of the above are warning signs.',
        },
      ],

      inicio: 'Home',
      denunciaNav: 'Report',
      info: 'Info',
      apoyo: 'Support',
    },
  };

  setLang(lang: Lang) {
    this.idioma.setLang(lang);
    void this.analytics.idioma(lang, 'zona_joven');
  }

  registrarAccion(nombre: string, destino: string = '') {
    void this.analytics.accion(nombre, 'zona_joven', destino);
  }

  iniciarSimulador() {
    void this.analytics.accion('iniciar_simulador', 'zona_joven', 'simulador');

    this.simuladorIniciado = true;
    this.pasoSimulador = 1;
    this.opcionSeleccionada = null;
  }

  continuarSimulador() {
    void this.analytics.accion('continuar_simulador', 'zona_joven', `paso_${this.pasoSimulador}`);

    if (this.pasoSimulador < 3) {
      this.pasoSimulador++;
    }
  }

  seleccionar(index: number) {
    void this.analytics.accion('respuesta_simulador', 'zona_joven', `opcion_${index}`);
    this.opcionSeleccionada = index;
  }

  reiniciar() {
    void this.analytics.accion('reiniciar_simulador', 'zona_joven', 'simulador');

    this.simuladorIniciado = false;
    this.pasoSimulador = 0;
    this.opcionSeleccionada = null;
  }

  responderMito(opcion: string) {
    void this.analytics.accion('responder_mito_realidad', 'zona_joven', opcion);
    this.respuestaMito = opcion;
  }

  siguienteMito() {
    void this.analytics.accion('siguiente_mito_realidad', 'zona_joven', `mito_${this.mitoActivo + 1}`);

    this.respuestaMito = null;

    if (this.mitoActivo < this.mitosRealidad.length - 1) {
      this.mitoActivo++;
    } else {
      this.mitoActivo = 0;
    }
  }

  toggleNoEsAmor(index: number) {
    void this.analytics.accion('abrir_no_es_amor', 'zona_joven', `item_${index + 1}`);
    this.noEsAmorActivo = this.noEsAmorActivo === index ? null : index;
  }

  toggleChecklist(index: number) {
    this.checklistMarcado[index] = !this.checklistMarcado[index];
    void this.analytics.accion('checklist_confianza', 'zona_joven', `item_${index + 1}_${this.checklistMarcado[index] ? 'marcado' : 'desmarcado'}`);
  }

  iniciarQuiz() {
    void this.analytics.accion('iniciar_quiz', 'zona_joven', 'quiz');

    this.quizIniciado = true;
    this.quizCompletado = false;
    this.quizActual = 0;
    this.respuestasQuiz = [];
  }

  responderQuiz(index: number) {
    void this.analytics.accion('respuesta_quiz', 'zona_joven', `pregunta_${this.quizActual + 1}_opcion_${index}`);
    this.respuestasQuiz[this.quizActual] = index;
  }

  siguienteQuiz() {
    if (this.respuestaActual === null) {
      return;
    }

    if (this.quizActual < this.t.quizPreguntas.length - 1) {
      void this.analytics.accion('siguiente_quiz', 'zona_joven', `pregunta_${this.quizActual + 1}`);
      this.quizActual++;
    } else {
      void this.analytics.accion('finalizar_quiz', 'zona_joven', `puntaje_${this.puntajeQuiz}`);
      this.quizCompletado = true;
    }
  }

  reiniciarQuiz() {
    void this.analytics.accion('reiniciar_quiz', 'zona_joven', 'quiz');

    this.quizIniciado = false;
    this.quizCompletado = false;
    this.quizActual = 0;
    this.respuestasQuiz = [];
  }

  esCorrecta(): boolean {
    return this.opcionSeleccionada === 1;
  }

  get checklistTotal(): number {
    return this.checklistMarcado.filter(item => item).length;
  }

  get respuestaActual(): number | null {
    return this.respuestasQuiz[this.quizActual] ?? null;
  }

  get preguntaActual(): QuizPregunta {
    return this.t.quizPreguntas[this.quizActual];
  }

  get puntajeQuiz(): number {
    return this.t.quizPreguntas.reduce((total, pregunta, index) => {
      return total + (this.respuestasQuiz[index] === pregunta.correcta ? 1 : 0);
    }, 0);
  }

  get resultadoQuiz(): string {
    if (this.puntajeQuiz === 5) {
      return this.t.resultadoExcelente;
    }

    if (this.puntajeQuiz >= 3) {
      return this.t.resultadoBien;
    }

    return this.t.resultadoExplora;
  }

  resolveTopicIcon(icon: string): string {
    return icon;
  }

  onTopicScroll(container: HTMLElement) {
    const cards = Array.from(
      container.querySelectorAll<HTMLElement>('.topic-card')
    );

    if (!cards.length) {
      return;
    }

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    this.activeTopicIndex = closestIndex;
  }

  goToTopic(container: HTMLElement, index: number) {
    void this.analytics.accion('seleccionar_tema_zona_joven', 'zona_joven', `tema_${index + 1}`);

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>('.topic-card')
    );
    const target = cards[index];

    if (!target) {
      return;
    }

    container.scrollTo({
      left: target.offsetLeft,
      behavior: 'smooth',
    });

    this.activeTopicIndex = index;
  }

  get lang(): Lang {
    return this.idioma.getLang();
  }

  get t(): ZonaJovenTextos {
    return this.textos[this.idioma.getLang()];
  }
}