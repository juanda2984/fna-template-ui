import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { contrasteF } from '../shared/contraste';
import { inicializarContraste } from '../shared/contraste';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  private contrasteActivo = false;

  constructor(
    private titleService: Title,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.titleService.setTitle('Fondo Nacional del Ahorro');
    this.setFavicon('assets/fna/img/logo.png');
    inicializarContraste();

    const contrasteGuardado = localStorage.getItem('contraste');
    this.contrasteActivo = contrasteGuardado === '1';

    const contraste = document.getElementById('contraste');

    if (this.contrasteActivo) {
      document.body.classList.add('alto_contraste');

      if (contraste) {
        contraste.classList.add('contrast-active');
      }

      contrasteF(1);
    } else {
      document.body.classList.remove('alto_contraste');

      if (contraste) {
        contraste.classList.remove('contrast-active');
      }

      contrasteF(0);
    }
  }

  toggleContraste(): void {
    this.contrasteActivo = !this.contrasteActivo;

    const valor = this.contrasteActivo ? 1 : 0;
    const contraste = document.getElementById('contraste');

    localStorage.setItem('contraste', String(valor));

    if (this.contrasteActivo) {
      document.body.classList.add('alto_contraste');

      if (contraste) {
        contraste.classList.add('contrast-active');
      }
    } else {
      document.body.classList.remove('alto_contraste');

      if (contraste) {
        contraste.classList.remove('contrast-active');
      }
    }

    contrasteF(valor);
  }

  aumentarFuente(): void {
    // aquí puedes llamar tu función TS aumentar() si la exportaste
  }

  disminuirFuente(): void {
    // aquí puedes llamar tu función TS reducir() si la exportaste
  }

  private setFavicon(iconUrl: string): void {
    let link = document.querySelector<HTMLLinkElement>("link[rel*='icon']");

    if (!link) {
      link = this.renderer.createElement('link') as HTMLLinkElement;
      link.rel = 'icon';
      this.renderer.appendChild(document.head, link);
    }

    link.type = 'image/png';
    link.href = iconUrl;
  }
}