# projecteTodorremolques
Redisseny de la web de todo remolques la seva web corporativa de lloguer de remolcs.

L'objectiu del projecte és proporcionar una plataforma ràpida, fàcil de mantenir i sense dependències complexes per mostrar la flota de remolcs disponibles, els serveis oferts i les vies de contacte amb l'empresa.

# Filosofia del projecte
Aquest projecte ha estat desenvolupat amb una arquitectura simple basada en tecnologies web natives.
La web funciona íntegrament del costat client mitjançant HTML, CSS i JavaScript Vanilla.

# Funcionament general

El lloc està estructurat com una web corporativa estàtica.
Les dades dels remolcs es carreguen des d'un fitxer JSON centralitzat.

# Flux de funcionament:

Plain Text
Usuari
│
▼
index.html
│
▼
trailers.json
│
▼
Renderitzat dinàmic
│
▼
Catàleg de remolcs

No existeix persistència de dades ni funcionalitats de reserva.

Qualsevol actualització del catàleg es realitza modificant directament el fitxer de dades.

# Estructura del projecte

todo remoques.com/
│
├── css/
│ ├── variables.css
│ ├── layout.css
│ ├── catalog.css
│ └── contact.css
│
├── data/
│ └── trailers.json
│
├── images/
│ ├── hero/
│ ├── trailers/
│ └── icons/
│
├── js/
│ ├── app.js
│ ├── catalog.js
│ └── gallery.js
│
├── docs/
│ ├── requisits.md
│ └── branding.md
│
├── index.html
├── contacte.html
└── README.md
``
# Gestió del catàleg

Tota la informació dels remolcs es troba a:

Plain Text
/data/trailers.json
``

Exemple:

JSON
{
"id": 1,
"nom": "Remolc Plataforma 750kg",
"capacitat": "750 kg",
"dimensions": "250x130 cm",
"imatge": "images/trailers/remolc-01.avif"
}
Afegir un nou remolc
Afegir les imatges a:
Plain Text
/images/trailers/
Crear una nova entrada a:
JSON
trailers.json
Verificar que la targeta es renderitza correctament.

No són necessàries modificacions al codi JavaScript.

# Gestió d'imatges

Les imatges s'han d'optimitzar abans de publicar-les.

Formats recomanats:

AVIF (preferent)
WebP

Evitar:

PNG innecessaris
Fotografies superiors a 300 KB
Imatges duplicades
Tecnologies utilitzades
Frontend
HTML5
CSS3
JavaScript ES6
Altres
JSON com a font de dades
SVG per iconografia
AVIF / WebP per imatges
Criteris de desenvolupament

Qualsevol modificació futura ha de respectar:

Rendiment
Evitar biblioteques externes si no són imprescindibles.
Minimitzar peticions HTTP.
Mantenir la càrrega inicial lleugera.
Simplicitat
Prioritzar solucions natives.
Evitar dependències innecessàries.
Mantenir l'estructura comprensible.
Escalabilitat

Tot i ser una web estàtica, l'estructura permet:

Afegir noves categories de remolcs.
Afegir filtres.
Incorporar galeries avançades.
Connectar amb un futur sistema de reserves.
Manteniment

Abans de publicar canvis:

Revisar responsive.
Comprovar enllaços.
Validar imatges.
Verificar SEO bàsic.
Comprovar rendiment Lighthouse.
Limitacions actuals

# El projecte actualment no inclou:

Reserves online
Àrea privada
Gestió d'usuaris
Base de dades
Sistema de pagament

Aquestes funcionalitats es contemplen únicament com a possibles ampliacions futures.

Futures millores
Formulari de pressupost.
Integració amb WhatsApp.
Filtres de cerca.
Multiidioma.
Sistema de reserves.
Integració amb Google Business Profile.

Envieu els vostres comentaris sobre el BizChat
