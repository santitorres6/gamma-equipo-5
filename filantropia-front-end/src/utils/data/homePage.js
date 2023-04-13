import { DONACIONES, HOME, TESTIMONIOS } from "../../routes/paths";

export const homePage = {
  header: {
    logo: {
      id: 1,
      title: "Logo filantropía",
      img: "/src/assets/images/Logo_Filantropia.png",
      href: HOME,
    },
    navbar: [
      {
        id: "0",
        title: "Inicio",
        href: HOME,
      },
      {
        id: "1",
        title: "¿Quienes somos?",
        href: "#quienes_somos",
      },
      {
        id: "2",
        title: "Causas",
        href: "#causas",
      },
      {
        id: "3",
        title: "Iniciativas",
        href: "#iniciativas",
      },
      {
        id: "4",
        title: "¿Cómo donar?",
        href: "#como_donar",
      },
      {
        id: "5",
        title: "Más",
        href: "#mas",
      },
      {
        id: "6",
        title: "Testimonios",
        href: TESTIMONIOS,
      },
      {
        id: "7",
        title: "Donaciones",
        href: DONACIONES,
      },
    ],
  },
  carrousel: {
    videos: [
      {
        id: 1,
        title: "Testimonio Tomás Maya Jaramillo",
        src: "https://www.youtube.com/embed/AiawXUVgnns",
      },
      {
        id: 2,
        title: "Testimonio Maria Isabel Garcia García",
        src: "https://www.youtube.com/embed/Dr3ZJ7Z8lb0",
      },
      {
        id: 3,
        title: "Testimonio Juan David Arcila Moreno",
        src: "https://www.youtube.com/embed/n0fEDFvT-cs",
      },
      {
        id: 4,
        title: "Testimonio Sebastián Vanegas Rendón",
        src: "https://www.youtube.com/embed/4CkI8txZpKw",
      },
    ],
    button: {
      title: "Ver más",
      href: TESTIMONIOS,
    },
  },
  whatIsFilantropia: [
    {
      id: "1",
      title: "¿Qué es filantropía eafit?",
      paragraph:
        "H​ace parte de la Dirección de Desarrollo Institucional y Vínculos, ​y es el área donde se cultiva la transformación social por medi​o de ​​iniciativas filantrópicas, para contribuir al desarrollo de la sociedad.",
    },
    {
      id: "2",
      title: "¿Qué buscamos?",
      paragraph:
        "Promovemos la tran​​sformación social por medio de vínculos de confianza y solidaridad para generar oportunidades a través de la educación.​​",
    },
  ],
  ourCauses: {
    title: "Nuestras causas",
    cards: [
      {
        id: 1,
        imagen: {
          title: "Equidad social e inclusión",
          url: "/src/assets/images/equidad_social_e_inclusion.jpg",
        },
        title: "Equidad social e inclusión",
        paragraph:
          "Brind​amos acceso a la Universidad EAFIT ​a jóvenes que cuentan con un excelente desempeño académico y que no disponen de los recursos económicos para asumir el valor de la ma​trícula en la Ins​​titución.​​",
        button: {
          title: "Ver más",
          // href: TESTIMONIOS,
        },
      },
      {
        id: 2,
        imagen: {
          title: "Ciencia, tecnología e innovación",
          url: "/src/assets/images/ciencia_tecnologia_innovacion.jpg",
        },
        title: "Ciencia, tecnología e innovación",
        paragraph:
          "Con tus aportes a los proyectos de investigación científica y aplicada, impulsas la producción de respuestas innovadoras que contribuyen a la solución de problemáticas ​de ​nuestra sociedad.",
        button: {
          title: "Ver más",
          // href: TESTIMONIOS,
        },
      },
      {
        id: 3,
        imagen: {
          title: "Inspiracion - voluntariado",
          url: "/src/assets/images/inspiracion_voluntariado.jpg",
        },
        title: "Inspiracion - voluntariado",
        paragraph:
          "El voluntariado EAFIT es un puente de transformación social y cultural, que inspira a la comunidad eafitense y sus allegados a vincularse con iniciativas ​​​sociales, académicas, comunitarias, culturales.",
        button: {
          title: "Ver más",
          // href: TESTIMONIOS,
        },
      },
      {
        id: 4,
        imagen: {
          title: "Transformación humanista",
          url: "/src/assets/images/transformacion_humanista.jpg",
        },
        title: "Transformación humanista",
        paragraph:
          "La formación no se da solo en las aulas, también en diferentes espacios deportivos, artísticos y culturales. Con tus aportes a esta causa contribuyes a la creación de un ambiente que favorece el aprendizaje integral de su comunidad.​",
        button: {
          title: "Ver más",
          // href: TESTIMONIOS,
        },
      },
    ],
  },
  donateHere: {
    title: "Ayuda a volar, empieza a donar",
    button: {
      title: "Dona aquí",
      href: DONACIONES,
    },
  },
  initiatives: {
    title: "Iniciativas",
    cards: [
      {
        id: 1,
        imagen: {
          title: "Eafit vamos pa'lante",
          url: "/src/assets/images/vamos_pa_lante.png",
        },
        title: "Eafit vamos pa'lante",
        button: {
          title: "Ver más",
          href: "https://www.eafit.edu.co/institucional/centro-filantropia/campanias/Paginas/vamospalante.aspx",
        },
      },
      {
        id: 2,
        imagen: {
          title: "Giving Day Eafit",
          url: "/src/assets/images/giving_day.jpg",
        },
        title: "Giving Day Eafit",
        button: {
          title: "Ver más",
          href: "https://www.eafit.edu.co/institucional/centro-filantropia/campanias/Paginas/giving-day.aspx",
        },
      },
      {
        id: 3,
        imagen: {
          title: "Productos con sentido Eafitense",
          url: "/src/assets/images/productos_con_sentido.jpg",
        },
        title: "Productos con sentido Eafitense",
        button: {
          title: "Ver más",
          href: "https://www.eafit.edu.co/institucional/centro-filantropia/campanias/Paginas/productosconsentido.aspx",
        },
      },
      {
        id: 4,
        imagen: {
          title: "Vincúlate a creadores de principios",
          url: "/src/assets/images/creadores_de_principios.jpg",
        },
        title: "Vincúlate a creadores de principios",
        button: {
          title: "Ver más",
          href: "https://www.eafit.edu.co/institucional/centro-filantropia/campanias/Paginas/creadoresdeprincipios.aspx",
        },
      },
      {
        id: 5,
        imagen: {
          title: "Volemos juntos",
          url: "/src/assets/images/volemos_juntos.png",
        },
        title: "Volemos juntos",
        button: {
          title: "Ver más",
          href: "https://www.eafit.edu.co/institucional/centro-filantropia/campanias/Paginas/volemosjuntos.aspx",
        },
      },
    ],
  },
  howToDonate: {
    title: "¿Cómo donar?",
    subtitle:
      "En Filantropía EAFIT contamos con diferentes canales​para facilitar ​el proceso de don​​ación.​",
    cards: [
      {
        id: 1,
        logo: {
          title: "Donación en línea",
          img: {
            title: "Donación en línea",
            src: "/src/assets/images/donacion_en_linea.jpg",
          },
        },
        title: "Donación en línea",
        paragraph: [
          "De forma fácil y segura realiza la donación con ta​rjeta de crédito o débito​ haciendo clic en el í​​cono o ​​​a través ​de ​​nuestro siti​o web de donaciones​.​​​​",
          "​*Para realizar transacciones electrónicas por internet recomendamos utilizar el navegador Google Chrome.​",
        ],
      },
      {
        id: 2,
        logo: {
          title: "Transferencia",
          img: {
            title: "Transferencia",
            src: "/src/assets/images/transferencia.jpg",
          },
        },
        title: "Transferencia",
        paragraph: [
          "Puedes programar tus donaciones recurrentes desde la sucursal virtual personas inscribiendo el convenio No. 76787 a nombre de EAFIT CENTRO FILANTROPÍA por la opción “pagos facturas” o puedes acercarte a cualquier sucursal Bancolombia y solicitar la inscripción al mismo convenio.",
        ],
      },
      {
        id: 3,
        logo: {
          title: "Con código QR",
          img: {
            title: "Con código QR",
            src: "/src/assets/images/con_codigo_qr.jpg",
          },
        },
        title: "Con código QR",
        paragraph: [
          "Selecciona la opción “Transferencias”, luego elige la opción “con código QR” y escoge “Transferir usando la cámara.”​",
          "Desde la sucursal virtual, la app personas o directamente desde una oficina:​​​​",
          "A la cuenta de ahorros Bancolombia número 935-948075-78 a nombre de la Universidad EAFIT.​​",
          "*Recuerda enviarnos el comprobante de cualquier transacción, tu nombre, ​tu documento de identidad y tu número de teléfono al correo ​​​cfilantropia@eafit.edu.co​​​​​​",
        ],
      },
      {
        id: 4,
        logo: {
          title: "Cheque o donación en especie",
          img: {
            title: "Cheque o donación en especie",
            src: "/src/assets/images/cheque_o_donacion_en_especie.jpg",
          },
        },
        title: "Cheque o donación en especie",
        paragraph: [
          "Comunícate con Filantropía EAFIT:(57) 604​ 2619500 ext 9297",
          "​cfilantropia@eafit.edu.co",
        ],
      },
      {
        id: 5,
        logo: {
          title: "Personalmente en la Universidad EAFIT",
          img: {
            title: "Personalmente en la Universidad EAFIT",
            src: "/src/assets/images/personalmente_en_la_universidad_eafit.jpg",
          },
        },
        title: "Personalmente en la Universidad EAFIT",
        paragraph: [
          "Dirígete a la caja principal del campus en Medellín, ubicado ​en la ​c​ra 49 #7 Sur-50 Bloque 29, piso 1.​",
        ],
      },
      {
        id: 6,
        logo: {
          title: "Deducción de nómina para empleados",
          img: {
            title: "Deducción de nómina para empleados",
            src: "/src/assets/images/deduccion_nomina_para_empleados.jpg",
          },
        },
        title: "Deducción de nómina para empleados",
        paragraph: [
          "Si eres profesor o empleado de la Universidad, puedes realizar tu donación ingr​esando a este link y diligenciando el formulario.​​",
          "​Si deseas hacerlo físico,​ ​ descarga el formato de deducción de nómina​ y envíalo firmado, como documento adjunto, a los correos mavelasquc@eafit.edu.co​​ y ​ ​cfilant​ropia@eafit.edu.co.​​",
        ],
      },
      {
        id: 7,
        logo: {
          title: "Tiempo y talento",
          img: {
            title: "Tiempo y talento",
            src: "/src/assets/images/tiempo_talento.jpg",
          },
        },
        title: "Tiempo y talento",
        paragraph: [
          "Puedes donar tu tiempo, talento y/o conocimiento participando de los diferentes proyectos ​de voluntariado en temas comunitarios, sociales, culturales, educativos y filantrópicos, ​contribuyendo con la transformación social del país y obteniendo incontables experiencias ​​​que le aportarán ​a tu proyecto de vida. Únete.",
          "Ingresa y diligencia el formulario haciendo clic aquí​​​​​",
        ],
      },
    ],
    paragraph:
      "Para donaciones en especie, títulos valores, y donaciones que superen los 39 millones de pesos, comunícate con Filantropía EAFIT ​al teléfono (57) 604​ 2619500 extensión 9297, o envíanos un correo electrónico a cfilantropia@eafit.edu.co​.​​",
  },
  more: {
    title: "Más",
    accordion: {
      informesDeGestion: {
        title: "Informes de gestión",
        cards: [
          {
            id: 1,
            img: {
              title: "Informe de gestión 2019",
              src: "/src/assets/images/informe_gestion_2019.jpg",
            },
            title: "Informe de gestión 2019",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/institucional/centro-filantropia/Paginas/informe-de-gestion-filantropia2019.aspx",
            },
          },
          {
            id: 2,
            img: {
              title: "Informe de gestión 2020",
              src: "/src/assets/images/informe_gestion_2020.jpg",
            },
            title: "Informe de gestión 2020",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/institucional/centro-filantropia/Paginas/informe-de-gestion-filantropia2020.aspx",
            },
          },
          {
            id: 1,
            img: {
              title: "Informe de gestión 2021",
              src: "/src/assets/images/informe_gestion_2021.jpg",
            },
            title: "Informe de gestión 2021",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/institucional/centro-filantropia/Paginas/informegestion2021.aspx",
            },
          },
          {
            id: 2,
            img: {
              title: "Informe de gestión 2022",
              src: "/src/assets/images/informe_gestion_2022.jpg",
            },
            title: "Informe de gestión 2022",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/institucional/centro-filantropia/Paginas/informe-de-gestion-2022.aspx",
            },
          },
        ],
      },
      noticias: {
        title: "Noticias",
        cards: [
          {
            id: 1,
            img: {
              title: "noticia_1",
              src: "/src/assets/images/noticia_1.jpeg",
            },
            date: "Nov 23,2020",
            category: "INSTITUCIONAL",
            paragraph:
              "El Centro de Filantropía sigue sumando esfuerzos para apoyar de manera integral a todos los eafitenses",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/noticias/egresados/2020/centro-filantropia-sumando-esfuerzos-para-apoyar-eafitenses",
            },
          },
          {
            id: 2,
            img: {
              title: "noticia_2",
              src: "/src/assets/images/noticia_2.jpeg",
            },
            date: "Sep 24,2020",
            category: "INSTITUCIONAL",
            paragraph: "¡Recuerda que la solidaridad empieza por casa!",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/noticias/estudiantes/2020/recuerda-solidaridad-empieza-casa",
            },
          },
          {
            id: 3,
            img: {
              title: "noticia_3",
              src: "/src/assets/images/noticia_3.jpeg",
            },
            date: "Jul 3,2020",
            category: "EAFITENSES",
            paragraph:
              "¡Eafitenses, 1127 estudiantes de la U fueron beneficiados por el Fondo de Solidaridad 60 años EAFIT!",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/noticias/estudiantes/2020/eafitenses-1127-estudiantes-beneficiados-por-fondo-solidaridad-60-anios-eafit",
            },
          },
          {
            id: 4,
            img: {
              title: "noticia_4",
              src: "/src/assets/images/noticia_4.jpeg",
            },
            date: "May 21,2020",
            category: "INSTITUCIONAL",
            paragraph: '"La solidaridad, eje transversal entre los eafitenses"',
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/noticias/estudiantes/2020/la-solidaridad-eje-transversal-entre-los-eafitenses",
            },
          },
          {
            id: 5,
            img: {
              title: "noticia_5",
              src: "/src/assets/images/noticia_5.jpeg",
            },
            date: "May 19,2020",
            category: "PROYECCIÓN",
            paragraph:
              "EAFIT crea el Fondo de Solidaridad 60 años para apoyar la continuidad del aprendizaje de estudiantes con dificultades económicas",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/noticias/agenciadenoticias/2020/EAFIT-crea-el-Fondo-de-Solidaridad-60-anios-para-apoyar-la-continuidad-del-aprendizaje-de-estudiantes-con-dificultades-economicas",
            },
          },
          {
            id: 6,
            img: {
              title: "noticia_6",
              src: "/src/assets/images/noticia_6.jpeg",
            },
            date: "Abr 13,2020",
            category: "PROYECCIÓN",
            paragraph:
              "El Centro de Filantropía sigue sumando esfuerzos para apoyar de manera integral a todos los eafitenses",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/noticias/egresados/2020/egresados-eafitenses-la-solidaridad-empieza-por-casa",
            },
          },
          {
            id: 7,
            img: {
              title: "noticia_7",
              src: "/src/assets/images/noticia_7.jpeg",
            },
            date: "Sep 26, 2019",
            category: "ACADEMIA",
            paragraph:
              "Open Day, un espacio para conocer la oferta de posgrados de EAFIT",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/noticias/agenciadenoticias/2019/open-day-un-espacio-para-conocer-la-oferta-de-posgrados-de-eafit",
            },
          },
          {
            id: 8,
            img: {
              title: "noticia_8",
              src: "/src/assets/images/noticia_8.jpeg",
            },
            date: "Jul 15, 2019",
            category: "EGRESADOS",
            paragraph:
              "Estos jóvenes le darán una nueva dimensión al campo colombiano",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/noticias/egresados/2019/estos-jovenes-daran-nueva-dimension-al-campo-colombiano",
            },
          },
          {
            id: 9,
            img: {
              title: "noticia_9",
              src: "/src/assets/images/noticia_9.jpeg",
            },
            date: "Feb 7, 2019",
            category: "ACADEMIA",
            paragraph:
              "Un nuevo Centro para potenciar la transformación social desde la filantropía",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/noticias/egresados/2019/un-nuevo-centro-para-potenciar-la-transformacion-social-desde-la-filantropia",
            },
          },
          {
            id: 10,
            img: {
              title: "noticia_10",
              src: "/src/assets/images/noticia_10.jpeg",
            },
            date: "Feb 6, 2019",
            category: "ANÁLISIS ACADÉMICO",
            paragraph:
              "La filantropía es el motor de la humanidad: Juan Luis Mejía",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/noticias/agenciadenoticias/2019/la-filantropia-es-el-motor-de-la-humanidad-juan-luis-mejia",
            },
          },
        ],
      },
      preguntasFrecuentes: {
        title: "Preguntas frecuentes",
        cards: [
          {
            id: 1,
            title: "¿Cómo puedo hacer una donación?",
            paragraph:
              "Es el acto por el cual una persona natural o jurídica, denominada donante, transfiere a título gratuito una parte de sus bienes a otra que la acepta, denominado donatario.",
            button: {
              title: "Ver más",
              href: "",
            },
          },
          {
            id: 2,
            title: "¿Cómo puedo hacer una donación?",
            paragraph:
              "​Desde Filantropía EAFIT contamos con diferentes canales para facilitar el proceso de donación. Para resolver cualquier inquietud comunícate con...",
            button: {
              title: "Ver más",
              href: "",
            },
          },
          {
            id: 3,
            title: "¿Quiénes pueden donar?",
            paragraph:
              "​Todas las personas interesadas en apoyar a la Universidad EAFIT, entre ellos estudiantes, egresados, empleados, aliados, y personas jurídicas como organizaciones y fundaciones.",
            button: {
              title: "Ver más",
              href: "",
            },
          },
          {
            id: 4,
            title: "¿Cómo puedo hacer donaciones en especie?",
            paragraph:
              "​La Universidad EAFIT también recibe donaciones en especie. Entre estas se cuentan equipos para laboratorios, equipos deportivos, computadores, libros...",
            button: {
              title: "Ver más",
              href: "",
            },
          },
          {
            id: 5,
            title: "¿Cómo obtengo el certificado de donación?",
            paragraph:
              "Filantropía EAFIT hará llegar el certificado de donación durante los tres primeros meses del año siguiente al año en que realizaste la donación a la dirección registrada por el donante...",
            button: {
              title: "Ver más",
              href: "",
            },
          },
          {
            id: 6,
            title:
              "¿Qué beneficios tributarios obtengo al realizar una donación?",
            paragraph:
              "​La Universidad EAFIT, en su calidad de donataria y en cumplimiento de la ley fiscal, otorga el certificado de donación independientemente de su monto...",
            button: {
              title: "Ver más",
              href: "",
            },
          },
          {
            id: 7,
            title:
              "¿Cómo y cuándo puedo cancelar la recurrencia de una donación?",
            paragraph:
              "​Se puede cancelar la recurrencia en el momento que el donante lo decida, solo debes enviar un correo electrónico a la dirección...",
            button: {
              title: "Ver más",
              href: "",
            },
          },
          {
            id: 9,
            title: "¿Qué es una donación recurrente?",
            paragraph:
              "Son donaciones que puedes programar para que se realicen de forma automática periódicamente.",
            button: {
              title: "Ver más",
              href: "",
            },
          },
          {
            id: 9,
            title: "¿Cuándo una donación requiere insinuación notarial?",
            paragraph:
              "Todas las donaciones en dinero o en especie que superen los 50SMLMV requieren insinuación notarial. Para saber más...",
            button: {
              title: "Ver más",
              href: "",
            },
          },
        ],
      },
      contact: {
        title: "Contacto",
        subtitle: "Escríbenos a cfilantropia@eafit.edu.co",
        cards: [
          {
            id: 1,
            img: {
              title: "Maria Clara Ceballos Arango",
              src: "/src/assets/images/MariaClaraCeballos.png",
            },
            name: "Maria Clara Ceballos Arango",
            ocupation: "Jefa de Filantroía Eafit",
            tel: "Teléfono: (57) 604 261 9500 - extensión 8857​​​",
            email_first: "mceball4@eafit.edu.co",
            email_secondary: "cfil​antropia@eafit.edu.co",
          },
          {
            id: 2,
            img: {
              title: "María Cristina Montoya Vélez",
              src: "/src/assets/images/MariaCristinaMontoya.png",
            },
            name: "María Cristina Montoya Vélez",
            ocupation: "Coordinadora Administrativa",
            tel: "",
            email_first: "mmonto41@eafit.edu.co​",
            email_secondary: "cfil​antropia@eafit.edu.co",
          },
          {
            id: 3,
            img: {
              title: "Luz Adriana Yepes Arias",
              src: "/src/assets/images/LuzAdrianaYepes.png",
            },
            name: "Luz Adriana Yepes Arias",
            ocupation: "Analisat de información",
            tel: "",
            email_first: "layepesa@eafit.edu.co​",
            email_secondary: "",
          },
          {
            id: 4,
            img: {
              title: "Lizyenny Osorio Álvarez",
              src: "/src/assets/images/LizyennyOsorio.png",
            },
            name: "Lizyenny Osorio Álvarez",
            ocupation: "Analista de información",
            tel: "​",
            email_first: "losorioa@eafit.edu.co",
            email_secondary: "",
          },
          {
            id: 5,
            img: {
              title: "Marcela Builes Toro",
              src: "/src/assets/images/MarcelaBuilesToro.png",
            },
            name: "Marcela Builes Toro",
            ocupation: "Analista de comunicaciones",
            tel: "",
            email_first: "mbuiles10@eafit.edu.co​",
            email_secondary: "cfil​antropia@eafit.edu.co",
          },
          {
            id: 6,
            img: {
              title: "Nury Sepúlveda Muñoz",
              src: "/src/assets/images/NuryAndreaSepulveda.png",
            },
            name: "Nury Sepúlveda Muñoz",
            ocupation: "Auxiliar administrativa",
            tel: "Teléfono: (57) 604 261 9500 - extensión 9297​​​",
            email_first: "nsepulv2@eafit.edu.co",
            email_secondary: "",
          },
        ],
      },
    },
  },
  footer: {
    title: "Conoce nuestros principales aliados",
    icons: [
      {
        title: "ANDI",
        src: "/src/assets/images/andi_logo.jpg",
      },
      {
        title: "ARIZA & MARIN",
        src: "/src/assets/images/ariza_&_marin_logo.jpg",
      },
      {
        title: "CESE",
        src: "/src/assets/images/cese_logo.jpg",
      },
      {
        title: "Amigos de EAFIT",
        src: "/src/assets/images/amigos_de_eafit_logo.jpg",
      },
      {
        title: "Crystal SAS",
        src: "/src/assets/images/crystal_logo.jpg",
      },
      {
        title: "Fundacion Aurelio Llano Posada",
        src: "/src/assets/images/fundacion_aurelio_llano_posada_logo.jpg",
      },
      {
        title: "Fundación Bolívar Davivienda",
        src: "/src/assets/images/fundacion_bolivar_davivienda_logo.jpg",
      },
      {
        title: "Fundación educación",
        src: "/src/assets/images/fundacion_educacion_logo.jpg",
      },
      {
        title: "Fundación Fraternidad Medellín",
        src: "/src/assets/images/fundacion_fraternidad_medellin_logo.jpg",
      },
      {
        title: "Grupo Argos Fundación",
        src: "/src/assets/images/grupo_argos_fundacion_logo.jpg",
      },
      {
        title: "Fundación Grupo Bancolombia",
        src: "/src/assets/images/fundacion_grupo_bancolombia_logo.jpg",
      },
      {
        title: "Fundación Juan Pablo Gutierrez",
        src: "/src/assets/images/fundacion_juan_pablo_gutierrez_logo.jpg",
      },
      {
        title: "Sofía Pérez de Soto Fundación",
        src: "/src/assets/images/sofia_perez_de_soto_logo.jpg",
      },
      {
        title: "Global Seguros",
        src: "/src/assets/images/global_seguros_logo.jpg",
      },
      {
        title: "Grupo Bios",
        src: "/src/assets/images/grupo_bios_logo.jpg",
      },
      {
        title: "MASGLOBAL",
        src: "/src/assets/images/masglobal_logo.jpg",
      },
      {
        title: "Mineros",
        src: "/src/assets/images/mineros_logo.jpg",
      },
      {
        title: "MITSUBISHI MOTORS",
        src: "/src/assets/images/mitsubishi_motors_logo.jpg",
      },
      {
        title: "Renault Groupe Fundación Colombia",
        src: "/src/assets/images/renault_group_logo.jpg",
      },
      {
        title: "Ternium",
        src: "/src/assets/images/ternium_logo.jpg",
      },
    ],
  },
};
//
