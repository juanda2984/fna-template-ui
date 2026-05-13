import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { HeaderComponent } from './app/pages/header/header.component';
import { FooterComponent } from './app/pages/footer/footer.component';

createApplication()
  .then((app) => {
    const injector = app.injector;

    if (!customElements.get('fna-header')) {
      customElements.define(
        'fna-header',
        createCustomElement(HeaderComponent, { injector })
      );
    }

    if (!customElements.get('fna-footer')) {
      customElements.define(
        'fna-footer',
        createCustomElement(FooterComponent, { injector })
      );
    }
  })
  .catch(console.error);