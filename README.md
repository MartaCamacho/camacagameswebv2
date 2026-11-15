# Camaca Games

Home del estudio indie. Construida con Next.js 16 (App Router), Tailwind CSS v4 y TypeScript.

## Comandos

```bash
npm run dev     # servidor local en http://localhost:3000
npm run build   # build de producción
npm start       # servidor de producción (tras build)
npm run lint    # linter
```

## Cómo añadir un juego nuevo

Solo tienes que editar `content/games.json`. No hay que tocar ningún componente.

### 1. Añade una entrada al array

```json
{
  "slug": "nombre-del-juego",
  "title": "Nombre del Juego",
  "subtitle": "Frase corta que lo define",
  "body": "Descripción de 2-3 líneas. Qué es, para quién, qué lo hace especial.",
  "status": "available",
  "statusLabel": "DISPONIBLE",
  "tags": ["Puzzle"],
  "platforms": ["iOS", "Android"],
  "accent": "lila",
  "theme": "light",
  "links": {
    "ios": "https://apps.apple.com/...",
    "android": "https://play.google.com/..."
  }
}
```

### 2. Valores válidos

| Campo | Opciones |
|---|---|
| `status` | `available` · `qa` · `sketch` · `archived` |
| `theme` | `light` · `dark` · `soft` · `coral` |
| `accent` | `lila` · `coral` · `ink` |

- **`tags`**: array de strings. Los tags únicos aparecen automáticamente en los filtros de la sección Juegos.
- **`links`**: todos los campos son opcionales (`ios`, `android`, `more`). Si el objeto está vacío `{}`, no se muestran botones de descarga.
- **`statusLabel`**: texto libre que aparece en la chip de estado (p. ej. `"EN QA"`, `"EN BOCETO · 2027"`).

### 3. Imagen del juego (opcional)

Coloca una imagen en `public/games/<slug>.png` (p. ej. `public/games/nombre-del-juego.png`).  
Los componentes de pixel art son placeholders hasta que añadas imágenes reales.

### 4. Comprueba

```bash
npm run dev
```

El juego aparece automáticamente en la cuadrícula. Si añadiste un tag nuevo, aparece en los filtros.

---

## Sistema de diseño

Los tokens de color y tipografía están en `app/globals.css` dentro del bloque `@theme`.  
No hay `tailwind.config.js` — Tailwind v4 lee los tokens directamente del CSS.

### Fuentes

| Variable CSS | Fuente | Uso |
|---|---|---|
| `--font-display` | Bricolage Grotesque | H1/H2, títulos grandes |
| `--font-sans` | Manrope | Cuerpo de texto |
| `--font-serif` | Newsreader (italic) | Acentos cursivos en títulos |
| `--font-mono` | JetBrains Mono | Etiquetas, metadata, status |

### Colores principales

| Token | Hex | Uso |
|---|---|---|
| `paper` | `#FBF7F2` | Fondo principal |
| `ink` | `#241B2E` | Texto / fondo oscuro |
| `lila` | `#7B6CF6` | Acento primario |
| `coral` | `#F08775` | Acento secundario |

## Deploy (Vercel)

El deploy es automático: el repo de GitHub está conectado a Vercel.

- **Push a `main`** → Vercel hace el build y lo publica en producción (camacagames.com).
- **Push a cualquier otra rama** → deploy de preview con su propia URL `*.vercel.app`, para probar antes de mergear.

No hay que hacer build ni subir nada a mano. El estado de cada deploy se ve en el panel de Vercel y en el commit en GitHub.

Antes de hacer push conviene comprobar que compila en local con `npm run build`: si falla aquí, también fallará en Vercel y producción se queda en la versión anterior.

La config `output: 'export'` + `trailingSlash: true` de `next.config.ts` se mantiene: genera un sitio estático y conserva las URLs con barra final (p. ej. `/cerogluten-lab-qr/`, la de los QR).

### Dominio y DNS

El dominio está registrado en **cdmon** y sus DNS se gestionan en cdmon. Solo hay dos registros que apuntan a Vercel:

| Registro | Valor |
|----------|-------|
| `A` de `camacagames.com` | IP de Vercel (la que muestra Vercel → Settings → Domains) |
| `CNAME` de `www` | CNAME de Vercel (ídem) |

**No tocar** el resto de registros: `MX`, `A` de `mail` y el `TXT` de SPF son del correo `hello@camacagames.com`, que sigue en cdmon. Tampoco hay que cambiar los nameservers a Vercel.

