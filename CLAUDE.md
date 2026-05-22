@AGENTS.md
# CLAUDE.md — Next.js Web Project

## Stack
- Next.js 14+ con App Router
- Tailwind CSS
- Zustand para estado global
- next-intl para i18n (o next-i18next si es Pages Router)
- TypeScript strict mode

---

## Antes de escribir código
Explica brevemente qué vas a hacer y por qué. Si hay varias opciones, menciona cuál eliges y el motivo.

---

## Convenciones generales

- **Comentarios en español**
- Componentes en PascalCase, archivos en kebab-case
- Un componente por archivo
- Exportaciones nombradas salvo para páginas (default export)
- Evita `any`; tipado explícito siempre

---

## Estructura de carpetas
src/
app/               # Rutas (App Router)
[locale]/        # Segmento de idioma
components/
ui/              # Componentes genéricos (Button, Input…)
features/        # Componentes de dominio
store/             # Stores de Zustand
lib/               # Utilidades, helpers
messages/          # Archivos de traducción (en.json, es.json…)
types/             # Tipos globales TypeScript

---

## Tailwind

- Usa clases de Tailwind directamente; evita CSS custom salvo para cosas que Tailwind no cubra
- Extrae variantes repetidas con `cva` (class-variance-authority) o `cn` (clsx + tailwind-merge)
- No uses `@apply` excepto en casos muy justificados
- Dark mode vía `class` strategy

```ts
// Patrón recomendado para cn()
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Zustand

- Un archivo por store en `src/store/`
- Nombrado: `use[Nombre]Store.ts`
- Define siempre la interfaz del estado antes del store
- Usa `immer` middleware si hay estado anidado complejo
- No pongas lógica de servidor en los stores

```ts
// Estructura base de un store
interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>()((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
```

---

## i18n (next-intl)

- Todos los textos visibles al usuario pasan por `useTranslations` o `getTranslations`, nunca hardcodeados
- Archivos en `src/messages/[locale].json`, organizados por namespace
- Usa `useLocale()` para detectar idioma activo
- Rutas localizadas con el segmento `[locale]` en App Router
- Manejo de plurales y parámetros con la API de next-intl (`{count, plural, ...}`)

---

## Next.js App Router

- Client Components por defecto; añade `"use client"` siempre que sea posible
- Data fetching en Server Components con `fetch` y revalidación explícita
- `loading.tsx` y `error.tsx` en cada ruta que lo necesite
- Metadata dinámica con `generateMetadata`
- Variables de entorno: públicas con `NEXT_PUBLIC_`, privadas sin prefijo

---

## Tests

- Tests unitarios para lógica de negocio y helpers (`vitest`)
- Tests de integración para stores de Zustand
- No es necesario cubrir componentes puramente de presentación al 100%

---

## Lo que NO hacer

- No uses `useEffect` para derivar estado; calcula en render o usa `useMemo`
- No llames stores de Zustand desde Server Components
- No mezcles lógica de negocio con JSX; extrae a hooks o funciones
- No ignores errores de TypeScript con `// @ts-ignore`