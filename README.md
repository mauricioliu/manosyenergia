# 🌙 Manos y Energía - Landing Page

Landing page de alta conversión para sesiones de quiromancia terapéutica con Marcelo Amigo.

## 📋 Descripción

Página web diseñada para convertir visitantes en clientes, orientada a la reserva y pago de sesiones online de lectura de manos con enfoque terapéutico y humano.

## 🎨 Características

### Diseño
- **Paleta de colores**: Malva, lavanda, gris cálido, beige y blanco
- **Estilo**: Minimalista, limpio, con mucho espacio en blanco
- **Tipografía**: Playfair Display (títulos) e Inter (cuerpo)
- **Responsive**: Optimizado para móviles, tablets y desktop

### Secciones

1. **Hero**: Título impactante con CTA principal visible
2. **Beneficios**: 5 beneficios clave con iconos
3. **Temas más consultados**: Carrera/Propósito y Amor/Relaciones
4. **Sobre Marcelo Amigo**: Presentación del terapeuta
5. **Cómo funciona**: 4 pasos claros con micro-CTAs
6. **Testimonios**: 6 testimonios emocionales y reales
7. **CTA Final**: Gran cierre con botón destacado

### Funcionalidades

- Scroll suave entre secciones
- Animaciones al entrar elementos en viewport
- Efecto parallax en hero
- Hover mejorado en cards
- Tracking de clics en CTAs (preparado para analytics)
- Lazy loading de imágenes
- Accesibilidad mejorada

## 🚀 Instalación y Uso

### Opción 1: Abrir directamente
Simplemente abre el archivo `index.html` en tu navegador.

### Opción 2: Servidor local
Si necesitas probar con un servidor local:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego abre tu navegador en `http://localhost:8000`

## 🔧 Configuración

### Modificar el enlace de reserva

En `index.html`, línea 200, modifica el href del botón final:

```html
<a href="TU_ENLACE_DE_CALENDLY_O_SISTEMA_DE_RESERVAS"
   class="cta-button cta-large"
   target="_blank"
   rel="noopener">
   Agendar mi lectura con Marcelo
</a>
```

### Agregar foto de Marcelo

Reemplaza el placeholder en la sección "Sobre Marcelo":

```html
<div class="about-image">
    <img src="ruta/a/foto-marcelo.jpg" alt="Marcelo Amigo" />
</div>
```

### Integrar Google Analytics (opcional)

Agrega antes del cierre de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU_ID');
</script>
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: < 480px

## 🎯 Optimización para conversión

### CTAs estratégicamente ubicados
- Hero (principal)
- Cada tema consultado (2)
- Cada paso del proceso (4)
- CTA final (más prominente)

### Principios aplicados
- Jerarquía visual clara
- Espaciado generoso
- Colores que transmiten calma
- Lenguaje empático y cercano
- Reducción de fricción en el flujo

## 🛠️ Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Grid, Flexbox, animaciones
- **JavaScript Vanilla**: Sin dependencias externas
- **Fonts**: Google Fonts (Playfair Display e Inter)

## 📂 Estructura de archivos

```
manosyenergia/
├── index.html      # Estructura principal
├── styles.css      # Estilos y diseño
├── script.js       # Interactividad
└── README.md       # Esta documentación
```

## ✅ Checklist de implementación

- [ ] Agregar foto real de Marcelo Amigo
- [ ] Configurar enlace de Calendly/sistema de reservas
- [ ] Agregar imágenes de manos reales (opcional)
- [ ] Configurar Google Analytics (opcional)
- [ ] Configurar píxel de Facebook (opcional)
- [ ] Pruebas en diferentes dispositivos
- [ ] Configurar dominio personalizado
- [ ] SSL activado (certificado HTTPS)

## 🌐 Próximos pasos sugeridos

1. **Sistema de reservas**: Integrar Calendly, Setmore o SimplyBook.me
2. **Pasarela de pago**: Stripe, PayPal o MercadoPago
3. **Optimización SEO**: Meta tags, Open Graph, Schema.org
4. **Email marketing**: Captura de leads con descuento
5. **A/B Testing**: Probar variaciones de CTAs y titulares

## 📞 Soporte

Para modificaciones o consultas técnicas, contacta al desarrollador.

---

Desarrollado con ✨ para Marcelo Amigo - Manos y Energía

© 2025 Todos los derechos reservados
