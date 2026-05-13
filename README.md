# FNA Template UI - Web Component

Componente web agnóstico para renderizar el Header y Footer institucional del FNA.

Compatible con:
- Angular
- JavaScript plano
- JSP
- JSF
- Apache Tiles
- HTML tradicional

No depende de la versión Angular de la aplicación consumidora.

---

# Build del componente

```bash
npm install
npm run build:elements
```

Genera:

```txt
dist-webcomponent/
  fna-template-ui/
    fna-template-ui.js
    fna-template-ui.css
    assets/
```

---

# Archivos que se deben copiar

Copiar la carpeta:

```txt
dist-webcomponent/fna-template-ui
```

a la aplicación consumidora.

Ejemplo recomendado:

```txt
src/assets/fna-template-ui/
```

---

# Uso básico

```html
<link rel="stylesheet" href="assets/fna-template-ui/fna-template-ui.css">

<fna-header></fna-header>

<fna-footer></fna-footer>

<script src="assets/fna-template-ui/fna-template-ui.js"></script>
```

---

# Prueba local del componente

El proyecto incluye:

```txt
test/test-local.html
```

Para probar localmente, copiar:

```txt
dist-webcomponent/fna-template-ui
```

dentro de:

```txt
test/
```

Debe quedar:

```txt
test/
  test-local.html
  fna-template-ui/
    fna-template-ui.js
    fna-template-ui.css
    assets/
```

## Ejecutar servidor local

```bash
cd test
npx http-server . -p 4300
```

Abrir:

```txt
http://localhost:4300/test-local.html
```

---

# Consumo en Angular

## index.html

```html
<link rel="stylesheet" href="assets/fna-template-ui/fna-template-ui.css">

<script src="assets/fna-template-ui/fna-template-ui.js"></script>
```

## app.module.ts

```ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

## Uso en templates

```html
<fna-header></fna-header>

<fna-footer></fna-footer>
```

---

# Consumo en HTML / JavaScript

```html
<link rel="stylesheet" href="./fna-template-ui.css">

<fna-header></fna-header>

<fna-footer></fna-footer>

<script src="./fna-template-ui.js"></script>
```

---

# Consumo en JSP

```jsp
<link rel="stylesheet" href="${pageContext.request.contextPath}/assets/fna-template-ui/fna-template-ui.css">

<fna-header></fna-header>

<fna-footer></fna-footer>

<script src="${pageContext.request.contextPath}/assets/fna-template-ui/fna-template-ui.js"></script>
```

---

# Consumo en JSF

```xml
<h:outputStylesheet library="fna-template-ui" name="fna-template-ui.css" />

<fna-header></fna-header>

<fna-footer></fna-footer>

<h:outputScript library="fna-template-ui" name="fna-template-ui.js" target="body" />
```

---

# Consumo en Apache Tiles

```jsp
<link rel="stylesheet" href="${pageContext.request.contextPath}/assets/fna-template-ui/fna-template-ui.css">

<fna-header></fna-header>

<tiles:insertAttribute name="body" />

<fna-footer></fna-footer>

<script src="${pageContext.request.contextPath}/assets/fna-template-ui/fna-template-ui.js"></script>
```

---

# Tags disponibles

```html
<fna-header></fna-header>

<fna-footer></fna-footer>
```

---

# Notas

- No importar componentes Angular.
- No instalar como librería Angular tradicional.
- El consumo se hace mediante JS + CSS + tags HTML.
- El JS debe cargarse una sola vez por página.
- Los assets deben mantenerse dentro de:

```txt
fna-template-ui/assets/
```