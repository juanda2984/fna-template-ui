import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FnaTemplateUiComponent } from './fna-template-ui.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    FnaTemplateUiComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FnaTemplateUiComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class FnaTemplateUiModule {}