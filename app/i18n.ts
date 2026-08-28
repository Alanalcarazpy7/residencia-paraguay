export type Lang = "es" | "en" | "pt";

export interface Translations {
  nav_inicio: string;
  nav_sobre_mi: string;
  nav_servicios: string;
  nav_cedula: string;
  nav_contacto: string;

  badge_es: string;
  badge_en: string;
  badge_pt: string;

  wa_tooltip: string;
  wa_float_label: string;
  menu_open_label: string;
  dev_credit_by: string;

  hero_title_line: string;
  hero_title_highlight: string;
  hero_desc: string;
  hero_feat1: string;
  hero_feat2: string;
  hero_cta: string;
  hero_trust: string;

  video_title: string;

  serv_title: string;
  serv_subtitle: string;
  serv_1_title: string;
  serv_1_desc: string;
  serv_2_title: string;
  serv_2_desc: string;
  serv_3_title: string;
  serv_3_desc: string;
  serv_4_title: string;
  serv_4_desc: string;
  serv_5_title: string;
  serv_5_desc: string;
  serv_suace_title: string;
  serv_suace_desc: string;
  btn_asesorarme: string;
  btn_view_details: string;

  process_title: string;
  process_subtitle: string;
  process_step1_title: string;
  process_step1_desc: string;
  process_step2_title: string;
  process_step2_desc: string;
  process_step3_title: string;
  process_step3_desc: string;
  process_step4_title: string;
  process_step4_desc: string;

  req_title: string;
  req_subtitle: string;
  req_col1_title: string;
  req_col1_1: string;
  req_col1_2: string;
  req_col1_3: string;
  req_col1_4: string;
  req_col1_5: string;
  req_col1_6: string;
  req_col2_title: string;
  req_col2_1_label: string;
  req_col2_1_text: string;
  req_col2_2_label: string;
  req_col2_2_text: string;
  req_col2_3_label: string;
  req_col2_3_text: string;
  req_notes_title: string;
  req_notes_1: string;
  req_notes_2: string;
  req_notes_3_pre: string;
  req_notes_3_strong: string;
  req_notes_3_post: string;

  test_title: string;
  test_subtitle: string;
  test1_country: string;
  test1_text: string;
  test2_country: string;
  test2_text: string;
  test3_country: string;
  test3_text: string;

  faq_badge: string;
  faq_title: string;
  faq_q1: string;
  faq_a1: string;
  faq_q2: string;
  faq_a2: string;
  faq_q3: string;
  faq_a3: string;
  faq_q4: string;
  faq_a4: string;

  about_badge: string;
  about_subtitle: string;
  about_p1: string;
  about_p2: string;
  about_cta: string;
  btn_back_home: string;
  logo_subtitle: string;

  footer_desc: string;
  footer_contact: string;
  footer_loc: string;
  footer_wa: string;
  footer_copy: string;
  privacy_policy_link: string;

  contact_section_title: string;
  contact_section_subtitle: string;
  form_name: string;
  form_email: string;
  form_phone: string;
  form_service: string;
  form_service_opt1: string;
  form_service_opt2: string;
  form_service_opt3: string;
  form_service_opt4: string;
  form_service_opt5: string;
  form_service_opt6: string;
  form_message: string;
  form_submit: string;
  form_success_mobile: string;

  wa_prefix: string;
  wa_general_msg: string;
  wa_lead_greeting: string;

  qr_title: string;
  qr_instruction: string;
  qr_alt_btn: string;
}

export const translations: Record<Lang, Translations> = {
  es: {
    nav_inicio: "Inicio",
    nav_sobre_mi: "Sobre Mí",
    nav_servicios: "Servicios",
    nav_cedula: "Cédula Extranjera",
    nav_contacto: "Contactar",

    badge_es: "Vivir en Paraguay",
    badge_en: "Living in Paraguay",
    badge_pt: "Morar no Paraguai",

    wa_tooltip: "¡Hola! ¿En qué te ayudo?",
    wa_float_label: "Contactar por WhatsApp",
    menu_open_label: "Abrir menú",
    dev_credit_by: "Desarrollado por",

    hero_title_line: "Tu Residencia en Paraguay.",
    hero_title_highlight: "Es hora de hacerlo oficial.",
    hero_desc:
      "Obtén tu Residencia Paraguaya y tu Cédula de Identidad de forma rápida y segura. Nosotros nos encargamos de toda la burocracia ante Migraciones mientras tú disfrutas del país.",
    hero_feat1: "Asesoría Legal Profesional",
    hero_feat2: "Acompañamiento 100% personalizado",
    hero_cta: "Iniciar mi Trámite Hoy",
    hero_trust: "Evaluación de tu caso 100% gratuita",

    video_title: "Un mensaje de nuestro fundador",

    serv_title: "Servicios Migratorios y Legales",
    serv_subtitle:
      "Trámites migratorios con respaldo legal, profesional y sin complicaciones.",
    serv_1_title: "Residencia Temporal",
    serv_1_desc:
      "Tu primer paso para establecerte legalmente. Gestionamos tu permiso para vivir, trabajar e invertir en Paraguay por hasta 2 años, ocupándonos de todo el papeleo por ti.",
    serv_2_title: "Residencia Permanente",
    serv_2_desc:
      "Convierte a Paraguay en tu hogar definitivo. Tramitamos tu estatus legal sin límite de tiempo para que obtengas tu Cédula de Identidad paraguaya con total tranquilidad.",
    serv_3_title: "Naturalización",
    serv_3_desc:
      "Te acompañamos y asesoramos legalmente en el proceso integral para la obtención de la nacionalidad paraguaya de forma oficial.",
    serv_4_title: "Antecedentes Interpol",
    serv_4_desc:
      "Un requisito indispensable para tu radicación. Agilizamos la obtención de tu certificado internacional para que tu expediente migratorio avance rápido y sin trabas.",
    serv_5_title: "Antecedentes para Extranjeros",
    serv_5_desc:
      "Tus documentos siempre en regla. Nos encargamos de tramitar y validar tus certificados policiales para cumplir con todas las exigencias legales del país.",
    serv_suace_title: "Trámites Express para Inversionistas (SUACE)",
    serv_suace_desc:
      "Exclusivo para Inversionistas. Obtén tu Residencia Permanente y Cédula de Identidad en solo 20 días a través del Ministerio de Industria y Comercio.",
    btn_asesorarme: "Asesorarme",
    btn_view_details: "Ver detalles",

    process_title: "Cómo Trabajamos",
    process_subtitle:
      "Un proceso claro y transparente de 4 pasos para tu tranquilidad.",
    process_step1_title: "Evaluación Gratuita",
    process_step1_desc:
      "Analizamos tu caso particular y te indicamos las mejores opciones migratorias sin costo.",
    process_step2_title: "Recolección de Documentos",
    process_step2_desc:
      "Te guiamos paso a paso sobre qué documentos necesitas de tu país y cómo legalizarlos.",
    process_step3_title: "Trámites en Paraguay",
    process_step3_desc:
      "Nosotros hacemos las filas y gestiones ante Migraciones, Interpol y la Policía Nacional por ti.",
    process_step4_title: "Entrega de Documentos",
    process_step4_desc:
      "Recibe tu Carnet de Radicación y Cédula Paraguaya listos para usar.",

    req_title: "Cédula Paraguaya para Extranjeros",
    req_subtitle:
      "Requisitos generales para solicitar tu documento por primera vez (con radicación temporal o permanente)",
    req_col1_title: "Documentos Básicos",
    req_col1_1: "Certificado de radicación emitido por Migraciones.",
    req_col1_2:
      "Documento de identidad del país de origen (copia autenticada).",
    req_col1_3: "Certificado de nacimiento legalizado o apostillado.",
    req_col1_4: "Certificado de vida y residencia.",
    req_col1_5: "Carnet de Registro de Extranjero.",
    req_col1_6:
      "Certificados de Antecedentes: País de origen, INTERPOL y Antecedentes a Extranjeros (Policía Nacional).",
    req_col2_title: "Según tu Estado Civil",
    req_col2_1_label: "Casado/a:",
    req_col2_1_text: "Certificado de matrimonio legalizado/apostillado.",
    req_col2_2_label: "Divorciado/a:",
    req_col2_2_text: "Sentencia de divorcio legalizada/apostillada.",
    req_col2_3_label: "Viudo/a:",
    req_col2_3_text:
      "Certificado de defunción del cónyuge legalizado/apostillado.",
    req_notes_title: "Notas Importantes:",
    req_notes_1:
      "Los documentos en idioma distinto al español deben estar oficialmente traducidos (excepto portugués).",
    req_notes_2: "Las copias deben estar autenticadas por escribano público.",
    req_notes_3_pre:
      "El trámite se realiza ante el Depto. de Identificaciones de la Policía Nacional. La entrega demora hasta ",
    req_notes_3_strong: "60 días hábiles",
    req_notes_3_post:
      " y se retira estrictamente de forma presencial por el titular.",

    test_title: "Lo que dicen nuestros clientes",
    test_subtitle:
      "Experiencias reales de extranjeros que ya viven legalmente en Paraguay.",
    test1_country: "🇺🇸 Estados Unidos",
    test1_text:
      "El proceso fue increíblemente fluido. El Lic. Morinigo se encargó de todo mientras yo seguía trabajando en mis proyectos online. 100% recomendado.",
    test2_country: "🇧🇷 Brasil",
    test2_text:
      "Teníamos mucho miedo a la burocracia, pero con su asesoría en portugués, sentimos mucha confianza. Hoy ya tenemos nuestra residencia permanente.",
    test3_country: "🇦🇷 Argentina",
    test3_text:
      "Excelente profesionalismo. Todo salió exactamente en los tiempos que nos indicaron. Gracias por facilitar nuestra mudanza a Asunción.",

    faq_badge: "Dudas Comunes",
    faq_title: "Preguntas Frecuentes",
    faq_q1: "¿Cuánto tiempo tarda el proceso de residencia?",
    faq_a1:
      "Generalmente, el carnet de radicación tarda hasta 90 días hábiles en emitirse por Migraciones, y la cédula paraguaya otros 60 días adicionales por la Policía Nacional.",
    faq_q2: "¿Necesito vivir en Paraguay para mantener mi residencia?",
    faq_a2:
      "No, Paraguay tiene normas muy flexibles. Sin embargo, para no perder el estatus de residente permanente, se recomienda visitar el país al menos una vez cada 3 años.",
    faq_q3: "¿Puedo iniciar el trámite a distancia?",
    faq_a3:
      "Podemos avanzar con la recolección, revisión y traducción de tus documentos a distancia, pero requerirás viajar a Paraguay presencialmente al menos unos días para firmar e ir a la policía para la toma de datos biométricos.",
    faq_q4: "¿Qué pasa si mis documentos están en otro idioma?",
    faq_a4:
      "Cualquier documento que no esté en español o portugués requiere una traducción oficial al español realizada por un Traductor Público matriculado en Paraguay. Nosotros gestionamos esto.",

    about_badge: "Perfil Profesional",
    about_subtitle: "Gestión de Residencia para Extranjeros",
    about_p1:
      "Con <strong>17 años de experiencia</strong> y más de <strong>1.500 trámites gestionados exitosamente</strong>, me dedico exclusivamente a la obtención de documentos de Residencia y Cédula de Identidad paraguaya para extranjeros de todo el mundo.",
    about_p2:
      "Mi trabajo se fundamenta en tres pilares: <strong>profesionalismo, seriedad y honestidad</strong>. Mi objetivo es facilitar tu transición a Paraguay brindándote un acompañamiento 100% transparente y seguro en cada etapa de tu proceso migratorio.",
    about_cta: "Hablemos",
    btn_back_home: "Volver al inicio",
    logo_subtitle: "Gestión de Residencia para Extranjeros",

    footer_desc:
      "Con 17 años de experiencia y más de 1.500 trámites gestionados, brindando respaldo profesional, seriedad y honestidad a extranjeros de todo el mundo.",
    footer_contact: "Contacto Directo",
    footer_loc:
      "Barrio San Pablo, Asunción - Paraguay, Maestro Fermín López 3619 c/ Quebracho, Código postal 2160",
    footer_wa: "Atención vía WhatsApp",
    footer_copy:
      "© 2026 Lic. Roberto Morinigo Alvarenga. Todos los derechos reservados.",
    privacy_policy_link: "Política de Privacidad",

    contact_section_title: "Evaluación Gratuita",
    contact_section_subtitle:
      "Déjanos tus datos y nos pondremos en contacto contigo a la brevedad.",
    form_name: "Nombre Completo",
    form_email: "Correo Electrónico",
    form_phone: "Teléfono (WhatsApp)",
    form_service: "Servicio de Interés",
    form_service_opt1: "Residencia Temporal",
    form_service_opt2: "Residencia Permanente",
    form_service_opt3: "Radicación para Inversionistas (SUACE)",
    form_service_opt4: "Naturalización",
    form_service_opt5: "Antecedentes e INTERPOL",
    form_service_opt6: "Asesoría Legal / Demandas Civiles",
    form_message: "Cuéntanos brevemente tu caso (Opcional)",
    form_submit: "Enviar y Contactar",
    form_success_mobile: "¡Formulario preparado! Abriendo WhatsApp...",

    wa_prefix: "Hola, necesito asesorarme sobre ",
    wa_general_msg:
      "Hola Licenciado, vengo de su sitio web y me gustaría hacerle una consulta.",
    wa_lead_greeting: "Hola Licenciado, les escribo desde la web:",

    qr_title: "¡Hablemos por WhatsApp!",
    qr_instruction:
      "Escanea este código con la cámara de tu celular para abrir el chat directamente.",
    qr_alt_btn: "O continuar a WhatsApp Web",
  },
  en: {
    nav_inicio: "Home",
    nav_sobre_mi: "About Me",
    nav_servicios: "Services",
    nav_cedula: "Foreigner ID",
    nav_contacto: "Contact",

    badge_es: "Vivir en Paraguay",
    badge_en: "Living in Paraguay",
    badge_pt: "Morar no Paraguai",

    wa_tooltip: "Hi! How can I help you?",
    wa_float_label: "Contact via WhatsApp",
    menu_open_label: "Open menu",
    dev_credit_by: "Developed by",

    hero_title_line: "Your Residency in Paraguay.",
    hero_title_highlight: "It's time to make it official.",
    hero_desc:
      "Get your Paraguayan Residency and ID Card quickly and safely. We handle all the bureaucracy with Immigration while you enjoy the country.",
    hero_feat1: "Professional Legal Advice",
    hero_feat2: "100% personalized support",
    hero_cta: "Start My Process Today",
    hero_trust: "100% free case evaluation",

    video_title: "A message from our founder",

    serv_title: "Immigration and Legal Services",
    serv_subtitle:
      "Immigration procedures with legal, professional backing and without complications.",
    serv_1_title: "Temporary Residency",
    serv_1_desc:
      "Your first step to legally establishing yourself. We manage your permit to live, work, and invest in Paraguay for up to 2 years, taking care of all paperwork for you.",
    serv_2_title: "Permanent Residency",
    serv_2_desc:
      "Make Paraguay your definitive home. We process your legal status with no time limit so you can obtain your Paraguayan ID Card with total peace of mind.",
    serv_3_title: "Naturalization",
    serv_3_desc:
      "We accompany and legally advise you throughout the comprehensive process to officially obtain Paraguayan nationality.",
    serv_4_title: "Interpol Records",
    serv_4_desc:
      "An essential requirement for your residency. We expedite the obtainment of your international certificate so your immigration file advances quickly and smoothly.",
    serv_5_title: "Background Checks for Foreigners",
    serv_5_desc:
      "Your documents always in order. We handle and validate your police certificates to comply with all legal requirements of the country.",
    serv_suace_title: "Express Procedures for Investors (SUACE)",
    serv_suace_desc:
      "Exclusive for Investors. Get your Permanent Residency and ID Card in just 20 days through the Ministry of Industry and Commerce.",
    btn_asesorarme: "Get Advice",
    btn_view_details: "View details",

    process_title: "How We Work",
    process_subtitle:
      "A clear and transparent 4-step process for your peace of mind.",
    process_step1_title: "Free Evaluation",
    process_step1_desc:
      "We analyze your particular case and indicate the best immigration options at no cost.",
    process_step2_title: "Document Collection",
    process_step2_desc:
      "We guide you step-by-step on what documents you need from your country and how to legalize them.",
    process_step3_title: "Procedures in Paraguay",
    process_step3_desc:
      "We do the waiting in lines and procedures at Immigration, Interpol, and the National Police for you.",
    process_step4_title: "Document Delivery",
    process_step4_desc:
      "Receive your Residency Card and Paraguayan ID ready to use.",

    req_title: "Paraguayan ID for Foreigners",
    req_subtitle:
      "General requirements to request your document for the first time (with temporary or permanent residency)",
    req_col1_title: "Basic Documents",
    req_col1_1: "Residency certificate issued by Immigration.",
    req_col1_2:
      "Identity document from country of origin (authenticated copy).",
    req_col1_3: "Birth certificate legalized or apostilled.",
    req_col1_4: "Life and residence certificate.",
    req_col1_5: "Foreigner Registration Card.",
    req_col1_6:
      "Background Checks: Country of origin, INTERPOL, and Foreigner Background Check (National Police).",
    req_col2_title: "By Marital Status",
    req_col2_1_label: "Married:",
    req_col2_1_text: "Marriage certificate legalized/apostilled.",
    req_col2_2_label: "Divorced:",
    req_col2_2_text: "Divorce decree legalized/apostilled.",
    req_col2_3_label: "Widowed:",
    req_col2_3_text: "Death certificate of spouse legalized/apostilled.",
    req_notes_title: "Important Notes:",
    req_notes_1:
      "Documents in languages other than Spanish must be officially translated (except Portuguese).",
    req_notes_2: "Copies must be authenticated by a public notary.",
    req_notes_3_pre:
      "The process is carried out at the Identifications Department of the National Police. Delivery takes up to ",
    req_notes_3_strong: "60 business days",
    req_notes_3_post:
      " and must be strictly picked up in person by the holder.",

    test_title: "What our clients say",
    test_subtitle:
      "Real experiences of foreigners already living legally in Paraguay.",
    test1_country: "🇺🇸 United States",
    test1_text:
      "The process was incredibly smooth. Lic. Morinigo took care of everything while I continued working on my online projects. 100% recommended.",
    test2_country: "🇧🇷 Brazil",
    test2_text:
      "We were very afraid of the bureaucracy, but with his advice in Portuguese, we felt very confident. Today we already have our permanent residency.",
    test3_country: "🇦🇷 Argentina",
    test3_text:
      "Excellent professionalism. Everything came out exactly in the times they indicated. Thank you for making our move to Asunción easier.",

    faq_badge: "Common Questions",
    faq_title: "Frequently Asked Questions",
    faq_q1: "How long does the residency process take?",
    faq_a1:
      "Generally, the residency card takes up to 90 business days to be issued by Immigration, and the Paraguayan ID card an additional 60 days by the National Police.",
    faq_q2: "Do I need to live in Paraguay to maintain my residency?",
    faq_a2:
      "No, Paraguay has very flexible rules. However, to avoid losing permanent resident status, it is recommended to visit the country at least once every 3 years.",
    faq_q3: "Can I start the process remotely?",
    faq_a3:
      "We can advance with the collection, review, and translation of your documents remotely, but you will need to travel to Paraguay in person for at least a few days to sign and go to the police for biometric data collection.",
    faq_q4: "What if my documents are in another language?",
    faq_a4:
      "Any document not in Spanish or Portuguese requires an official translation into Spanish by a licensed Public Translator in Paraguay. We manage this for you.",

    about_badge: "Professional Profile",
    about_subtitle: "Residency Management for Foreigners",
    about_p1:
      "With <strong>17 years of experience</strong> and over <strong>1,500 successfully managed applications</strong>, I am exclusively dedicated to obtaining Residency documents and Paraguayan ID Cards for foreigners from all over the world.",
    about_p2:
      "My work is based on three pillars: <strong>professionalism, seriousness, and honesty</strong>. My goal is to facilitate your transition to Paraguay by providing you with 100% transparent and secure support at every stage of your immigration process.",
    about_cta: "Let's Talk",
    btn_back_home: "Back to Home",
    logo_subtitle: "Residency Management for Foreigners",

    footer_desc:
      "With 17 years of experience and over 1,500 managed applications, providing professional support, seriousness, and honesty to foreigners from all over the world.",
    footer_contact: "Direct Contact",
    footer_loc:
      "San Pablo Neighborhood, Asunción - Paraguay, Maestro Fermín López 3619 & Quebracho, Postal code 2160",
    footer_wa: "Customer Service via WhatsApp",
    footer_copy:
      "© 2026 Lic. Roberto Morinigo Alvarenga. All rights reserved.",
    privacy_policy_link: "Privacy Policy",

    contact_section_title: "Free Evaluation",
    contact_section_subtitle: "Leave your details and we will contact you shortly.",
    form_name: "Full Name",
    form_email: "Email Address",
    form_phone: "Phone (WhatsApp)",
    form_service: "Service of Interest",
    form_service_opt1: "Temporary Residency",
    form_service_opt2: "Permanent Residency",
    form_service_opt3: "Investor Residency (SUACE)",
    form_service_opt4: "Naturalization",
    form_service_opt5: "Background Checks & INTERPOL",
    form_service_opt6: "Legal Advice / Civil Lawsuits",
    form_message: "Tell us briefly about your case (Optional)",
    form_submit: "Send and Contact",
    form_success_mobile: "Form ready! Opening WhatsApp...",

    wa_prefix: "Hello, I need advice about ",
    wa_general_msg:
      "Hello, I am contacting you from your website and I would like to make an inquiry.",
    wa_lead_greeting: "Hello, I'm writing from the website:",

    qr_title: "Let's talk on WhatsApp!",
    qr_instruction:
      "Scan this code with your phone's camera to open the chat directly.",
    qr_alt_btn: "Or continue to WhatsApp Web",
  },
  pt: {
    nav_inicio: "Início",
    nav_sobre_mi: "Sobre Mim",
    nav_servicios: "Serviços",
    nav_cedula: "RG para Estrangeiros",
    nav_contacto: "Contato",

    badge_es: "Vivir en Paraguay",
    badge_en: "Living in Paraguay",
    badge_pt: "Morar no Paraguai",

    wa_tooltip: "Olá! Como posso ajudar?",
    wa_float_label: "Contatar via WhatsApp",
    menu_open_label: "Abrir menu",
    dev_credit_by: "Desenvolvido por",

    hero_title_line: "Sua Residência no Paraguai.",
    hero_title_highlight: "É hora de oficializar.",
    hero_desc:
      "Obtenha sua Residência Paraguaia e seu documento de identidade de forma rápida e segura. Nós cuidamos de toda a burocracia na Imigração enquanto você aproveita o país.",
    hero_feat1: "Assessoria Jurídica Profissional",
    hero_feat2: "Acompanhamento 100% personalizado",
    hero_cta: "Iniciar meu Trâmite Hoje",
    hero_trust: "Avaliação do seu caso 100% gratuita",

    video_title: "Uma mensagem do nosso fundador",

    serv_title: "Serviços de Imigração e Jurídicos",
    serv_subtitle:
      "Trâmites de imigração com respaldo legal, profissional e sem complicações.",
    serv_1_title: "Residência Temporária",
    serv_1_desc:
      "Seu primeiro passo para se estabelecer legalmente. Gerenciamos sua permissão para viver, trabalhar e investir no Paraguai por até 2 anos, cuidando de toda a papelada para você.",
    serv_2_title: "Residência Permanente",
    serv_2_desc:
      "Faça do Paraguai seu lar definitivo. Tramitamos seu status legal sem limite de tempo para que obtenha seu documento de identidade paraguaio com total tranquilidade.",
    serv_3_title: "Naturalização",
    serv_3_desc:
      "Acompanhamos e assessoramos legalmente você no processo integral para a obtenção da nacionalidade paraguaia de forma oficial.",
    serv_4_title: "Antecedentes da Interpol",
    serv_4_desc:
      "Um requisito indispensável para sua radicação. Agilizamos a obtenção do seu certificado internacional para que seu processo avance rápido e sem entraves.",
    serv_5_title: "Antecedentes para Estrangeiros",
    serv_5_desc:
      "Seus documentos sempre em ordem. Cuidamos do processamento e validação de seus certificados policiais para cumprir todas as exigências legais do país.",
    serv_suace_title: "Trâmites Expressos para Investidores (SUACE)",
    serv_suace_desc:
      "Exclusivo para Investidores. Obtenha sua Residência Permanente e Carteira de Identidade em apenas 20 dias através do Ministério da Indústria e Comércio.",
    btn_asesorarme: "Buscar Orientação",
    btn_view_details: "Ver detalhes",

    process_title: "Como Trabalhamos",
    process_subtitle:
      "Um processo claro e transparente de 4 passos para sua tranquilidade.",
    process_step1_title: "Avaliação Gratuita",
    process_step1_desc:
      "Analisamos seu caso particular e indicamos as melhores opções de imigração sem custo.",
    process_step2_title: "Coleta de Documentos",
    process_step2_desc:
      "Orientamos passo a passo sobre quais documentos você precisa do seu país e como legalizá-los.",
    process_step3_title: "Trâmites no Paraguai",
    process_step3_desc:
      "Nós enfrentamos as filas e realizamos as gestões na Imigração, Interpol e Polícia Nacional para você.",
    process_step4_title: "Entrega de Documentos",
    process_step4_desc:
      "Receba sua Carteira de Radicação e RG Paraguaio prontos para usar.",

    req_title: "Carteira de Identidade Paraguaia para Estrangeiros",
    req_subtitle:
      "Requisitos gerais para solicitar seu documento pela primeira vez (com radicação temporária ou permanente)",
    req_col1_title: "Documentos Básicos",
    req_col1_1: "Certificado de radicação emitido pela Imigração.",
    req_col1_2:
      "Documento de identidade do país de origem (cópia autenticada).",
    req_col1_3: "Certidão de nascimento legalizada ou apostilada.",
    req_col1_4: "Certificado de vida e residência.",
    req_col1_5: "Cartão de Registro de Estrangeiro.",
    req_col1_6:
      "Antecedentes: País de origem, INTERPOL e Antecedentes a Estrangeiros (Polícia Nacional).",
    req_col2_title: "Segundo seu Estado Civil",
    req_col2_1_label: "Casado/a:",
    req_col2_1_text: "Certidão de casamento legalizada/apostilada.",
    req_col2_2_label: "Divorciado/a:",
    req_col2_2_text: "Sentença de divórcio legalizada/apostilada.",
    req_col2_3_label: "Viúvo/a:",
    req_col2_3_text: "Certidão de óbito do cônjuge legalizada/apostilada.",
    req_notes_title: "Notas Importantes:",
    req_notes_1:
      "Documentos em idioma diferente do espanhol devem ser traduzidos oficialmente (exceto português).",
    req_notes_2: "As cópias devem ser autenticadas por um notário público.",
    req_notes_3_pre:
      "O trâmite é realizado no Depto. de Identificações da Polícia Nacional. A entrega demora até ",
    req_notes_3_strong: "60 dias úteis",
    req_notes_3_post:
      " e deve ser retirada estritamente de forma presencial pelo titular.",

    test_title: "O que nossos clientes dizem",
    test_subtitle:
      "Experiências reais de estrangeiros que já vivem legalmente no Paraguai.",
    test1_country: "🇺🇸 Estados Unidos",
    test1_text:
      "O processo foi incrivelmente tranquilo. O Lic. Morinigo cuidou de tudo enquanto eu continuava trabalhando em meus projetos online. 100% recomendado.",
    test2_country: "🇧🇷 Brasil",
    test2_text:
      "Estávamos com muito medo da burocracia, mas com a assessoria dele em português, nos sentimos muito seguros. Hoje já temos nossa residência permanente.",
    test3_country: "🇦🇷 Argentina",
    test3_text:
      "Excelente profissionalismo. Tudo saiu exatamente nos prazos que nos indicaram. Obrigado por facilitar nossa mudança para Assunção.",

    faq_badge: "Dúvidas Comuns",
    faq_title: "Perguntas Frequentes",
    faq_q1: "Quanto tempo demora o processo de residência?",
    faq_a1:
      "Geralmente, o cartão de residência demora até 90 dias úteis para ser emitido pela Imigração, e a carteira de identidade paraguaia mais 60 dias pela Polícia Nacional.",
    faq_q2: "Preciso morar no Paraguai para manter minha residência?",
    faq_a2:
      "Não, o Paraguai tem regras muito flexíveis. No entanto, para não perder o status de residente permanente, recomenda-se visitar o país pelo menos uma vez a cada 3 anos.",
    faq_q3: "Posso iniciar o trâmite à distância?",
    faq_a3:
      "Podemos avançar com a coleta, revisão e tradução de seus documentos à distância, mas você precisará viajar ao Paraguai pessoalmente por pelo menos alguns dias para assinar e ir à polícia para a coleta de dados biométricos.",
    faq_q4: "O que acontece se meus documentos estiverem em outro idioma?",
    faq_a4:
      "Qualquer documento que não esteja em espanhol ou português requer uma tradução oficial para o espanhol feita por um Tradutor Público juramentado no Paraguai. Nós gerenciamos isso.",

    about_badge: "Perfil Profissional",
    about_subtitle: "Gestão de Residência para Estrangeiros",
    about_p1:
      "Com <strong>17 anos de experiência</strong> e mais de <strong>1.500 processos gerenciados com sucesso</strong>, dedico-me exclusivamente à obtenção de documentos de Residência e Carteira de Identidade paraguaia para estrangeiros de todo o mundo.",
    about_p2:
      "Meu trabalho baseia-se em três pilares: <strong>profissionalismo, seriedade e honestidade</strong>. Meu objetivo é facilitar sua transição para o Paraguai, oferecendo um acompanhamento 100% transparente e seguro em cada etapa do seu processo de imigração.",
    about_cta: "Vamos Conversar",
    btn_back_home: "Voltar ao início",
    logo_subtitle: "Gestão de Residência para Estrangeiros",

    footer_desc:
      "Com 17 anos de experiência e mais de 1.500 processos gerenciados, oferecendo respaldo profissional, seriedade e honestidade a estrangeiros de todo o mundo.",
    footer_contact: "Contato Direto",
    footer_loc:
      "Barrio San Pablo, Assunção - Paraguai, Maestro Fermín López 3619 c/ Quebracho, Código postal 2160",
    footer_wa: "Atendimento via WhatsApp",
    footer_copy:
      "© 2026 Lic. Roberto Morinigo Alvarenga. Todos os direitos reservados.",
    privacy_policy_link: "Política de Privacidade",

    contact_section_title: "Avaliação Gratuita",
    contact_section_subtitle: "Deixe seus dados e entraremos em contato em breve.",
    form_name: "Nome Completo",
    form_email: "E-mail",
    form_phone: "Telefone (WhatsApp)",
    form_service: "Serviço de Interesse",
    form_service_opt1: "Residência Temporária",
    form_service_opt2: "Residência Permanente",
    form_service_opt3: "Residência para Investidores (SUACE)",
    form_service_opt4: "Naturalização",
    form_service_opt5: "Antecedentes e INTERPOL",
    form_service_opt6: "Assessoria Jurídica / Processos Civis",
    form_message: "Conte-nos brevemente sobre seu caso (Opcional)",
    form_submit: "Enviar e Contatar",
    form_success_mobile: "Formulário preparado! Abrindo o WhatsApp...",

    wa_prefix: "Olá, preciso de assessoria sobre ",
    wa_general_msg:
      "Olá Lic. Roberto Morinigo Alvarenga, preciso de assessoria.",
    wa_lead_greeting: "Olá, estou escrevendo do site:",

    qr_title: "Vamos conversar no WhatsApp!",
    qr_instruction:
      "Escaneie este código com a câmera do seu celular para abrir o chat diretamente.",
    qr_alt_btn: "Ou continuar no WhatsApp Web",
  },
};

export const langNames: Record<Lang, string> = { es: "ES", en: "EN", pt: "PT" };
