import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { contrasteF } from '../shared/contraste';
import { inicializarContraste } from '../shared/contraste';
export class HeaderComponent {
    constructor(titleService, renderer) {
        this.titleService = titleService;
        this.renderer = renderer;
        this.contrasteActivo = false;
    }
    ngAfterViewInit() {
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
        }
        else {
            document.body.classList.remove('alto_contraste');
            if (contraste) {
                contraste.classList.remove('contrast-active');
            }
            contrasteF(0);
        }
    }
    toggleContraste() {
        this.contrasteActivo = !this.contrasteActivo;
        const valor = this.contrasteActivo ? 1 : 0;
        const contraste = document.getElementById('contraste');
        localStorage.setItem('contraste', String(valor));
        if (this.contrasteActivo) {
            document.body.classList.add('alto_contraste');
            if (contraste) {
                contraste.classList.add('contrast-active');
            }
        }
        else {
            document.body.classList.remove('alto_contraste');
            if (contraste) {
                contraste.classList.remove('contrast-active');
            }
        }
        contrasteF(valor);
    }
    aumentarFuente() {
        // aquí puedes llamar tu función TS aumentar() si la exportaste
    }
    disminuirFuente() {
        // aquí puedes llamar tu función TS reducir() si la exportaste
    }
    setFavicon(iconUrl) {
        let link = document.querySelector("link[rel*='icon']");
        if (!link) {
            link = this.renderer.createElement('link');
            link.rel = 'icon';
            this.renderer.appendChild(document.head, link);
        }
        link.type = 'image/png';
        link.href = iconUrl;
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-header',
                template: "<div class=\"row\">\n  <a\n    href=\"https://www.gov.co\"\n    target=\"_blank\"\n    title=\"V\u00EDnculo al sitio web del Gobierno de Colombia\"\n    class=\"linkGob\"\n    rel=\"noopener noreferrer\"\n  >\n    <div id=\"seccionGOV\">\n      <div class=\"containerr\">\n        <img\n          id=\"logoGOV\"\n          src=\"assets/fna/img/logo_gov_co.png\"\n          alt=\"Logo Gobierno de Colombia\"\n        />\n      </div>\n    </div>\n  </a>\n</div>\n\n<header>\n  <div class=\"containerr\" id=\"headerFNAT\">\n    <div id=\"seccionFna\">\n      <a\n        href=\"https://www.fna.gov.co\"\n        target=\"_blank\"\n        title=\"V\u00EDnculo al sitio web del Fondo Nacional del Ahorro\"\n        rel=\"noopener noreferrer\"\n      >\n        <img\n          src=\"assets/fna/img/logo_new.png\"\n          alt=\"Logo FNA\"\n          class=\"img logofna\"\n        />\n      </a>\n    </div>\n\n    <div class=\"controls\">\n      <table>\n        <tr>\n          <td style=\"width: 20px;\">\n            <span\n              id=\"fontMas\"\n              style=\"font-size: xx-large; color: white;\"\n              title=\"Aumentar tama\u00F1o de fuente\"\n              tabindex=\"0\"\n              (click)=\"aumentarFuente()\"\n              (keydown.enter)=\"aumentarFuente()\"\n            >\n              A\n            </span>\n          </td>\n          <td style=\"width: 30px; text-align: center; color: white;\">\n            <span\n              id=\"fontMenos\"\n              title=\"Reducir tama\u00F1o de fuente\"\n              tabindex=\"0\"\n              (click)=\"disminuirFuente()\"\n              (keydown.enter)=\"disminuirFuente()\"\n            >\n              A\n            </span>\n          </td>\n          <td style=\"width: 30px; text-align: center;\">\n            <img\n              id=\"contraste\"\n              src=\"assets/fna/img/contraste.png\"\n              class=\"img img-responsive\"\n              alt=\"Modo alto contraste\"\n              title=\"Modo alto contraste\"\n              tabindex=\"0\"\n              (click)=\"toggleContraste()\"\n              (keydown.enter)=\"toggleContraste()\"\n            />\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</header>",
                styles: ["body,html{margin:0;padding:0}.alto-contraste{filter:contrast(1.4);background-color:#000!important;color:#fff!important}#headerFNAT,#seccionGOV,.containerr{width:100%}.linkGob{text-decoration:none}.logofna{max-width:100%;height:auto}"]
            }] }
];
/** @nocollapse */
HeaderComponent.ctorParameters = () => [
    { type: Title },
    { type: Renderer2 }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZuYS10ZW1wbGF0ZS11aS8iLCJzb3VyY2VzIjpbImxpYi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQU8zRCxNQUFNLE9BQU8sZUFBZTtJQUkxQixZQUNVLFlBQW1CLEVBQ25CLFFBQW1CO1FBRG5CLGlCQUFZLEdBQVosWUFBWSxDQUFPO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFKckIsb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFLNUIsQ0FBQztJQUVMLGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMzQyxvQkFBb0IsRUFBRSxDQUFDO1FBRXZCLE1BQU0saUJBQWlCLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsZUFBZSxHQUFHLGlCQUFpQixLQUFLLEdBQUcsQ0FBQztRQUVqRCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXZELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUU5QyxJQUFJLFNBQVMsRUFBRTtnQkFDYixTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQzVDO1lBRUQsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2Y7YUFBTTtZQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRWpELElBQUksU0FBUyxFQUFFO2dCQUNiLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDL0M7WUFFRCxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDZjtJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFFN0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV2RCxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVqRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFOUMsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUM1QztTQUNGO2FBQU07WUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUVqRCxJQUFJLFNBQVMsRUFBRTtnQkFDYixTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQy9DO1NBQ0Y7UUFFRCxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELGNBQWM7UUFDWiwrREFBK0Q7SUFDakUsQ0FBQztJQUVELGVBQWU7UUFDYiw4REFBOEQ7SUFDaEUsQ0FBQztJQUVPLFVBQVUsQ0FBQyxPQUFlO1FBQ2hDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQWtCLG1CQUFtQixDQUFDLENBQUM7UUFFeEUsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQW9CLENBQUM7WUFDOUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNoRDtRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQ3RCLENBQUM7OztZQXZGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLGt1RUFBc0M7O2FBRXZDOzs7O1lBUlEsS0FBSztZQURxQixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBjb250cmFzdGVGIH0gZnJvbSAnLi4vc2hhcmVkL2NvbnRyYXN0ZSc7XG5pbXBvcnQgeyBpbmljaWFsaXphckNvbnRyYXN0ZSB9IGZyb20gJy4uL3NoYXJlZC9jb250cmFzdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgcHJpdmF0ZSBjb250cmFzdGVBY3Rpdm8gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKCdGb25kbyBOYWNpb25hbCBkZWwgQWhvcnJvJyk7XG4gICAgdGhpcy5zZXRGYXZpY29uKCdhc3NldHMvZm5hL2ltZy9sb2dvLnBuZycpO1xuICAgIGluaWNpYWxpemFyQ29udHJhc3RlKCk7XG5cbiAgICBjb25zdCBjb250cmFzdGVHdWFyZGFkbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb250cmFzdGUnKTtcbiAgICB0aGlzLmNvbnRyYXN0ZUFjdGl2byA9IGNvbnRyYXN0ZUd1YXJkYWRvID09PSAnMSc7XG5cbiAgICBjb25zdCBjb250cmFzdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJhc3RlJyk7XG5cbiAgICBpZiAodGhpcy5jb250cmFzdGVBY3Rpdm8pIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYWx0b19jb250cmFzdGUnKTtcblxuICAgICAgaWYgKGNvbnRyYXN0ZSkge1xuICAgICAgICBjb250cmFzdGUuY2xhc3NMaXN0LmFkZCgnY29udHJhc3QtYWN0aXZlJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRyYXN0ZUYoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYWx0b19jb250cmFzdGUnKTtcblxuICAgICAgaWYgKGNvbnRyYXN0ZSkge1xuICAgICAgICBjb250cmFzdGUuY2xhc3NMaXN0LnJlbW92ZSgnY29udHJhc3QtYWN0aXZlJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRyYXN0ZUYoMCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQ29udHJhc3RlKCk6IHZvaWQge1xuICAgIHRoaXMuY29udHJhc3RlQWN0aXZvID0gIXRoaXMuY29udHJhc3RlQWN0aXZvO1xuXG4gICAgY29uc3QgdmFsb3IgPSB0aGlzLmNvbnRyYXN0ZUFjdGl2byA/IDEgOiAwO1xuICAgIGNvbnN0IGNvbnRyYXN0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cmFzdGUnKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb250cmFzdGUnLCBTdHJpbmcodmFsb3IpKTtcblxuICAgIGlmICh0aGlzLmNvbnRyYXN0ZUFjdGl2bykge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdhbHRvX2NvbnRyYXN0ZScpO1xuXG4gICAgICBpZiAoY29udHJhc3RlKSB7XG4gICAgICAgIGNvbnRyYXN0ZS5jbGFzc0xpc3QuYWRkKCdjb250cmFzdC1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdhbHRvX2NvbnRyYXN0ZScpO1xuXG4gICAgICBpZiAoY29udHJhc3RlKSB7XG4gICAgICAgIGNvbnRyYXN0ZS5jbGFzc0xpc3QucmVtb3ZlKCdjb250cmFzdC1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250cmFzdGVGKHZhbG9yKTtcbiAgfVxuXG4gIGF1bWVudGFyRnVlbnRlKCk6IHZvaWQge1xuICAgIC8vIGFxdcOtIHB1ZWRlcyBsbGFtYXIgdHUgZnVuY2nDs24gVFMgYXVtZW50YXIoKSBzaSBsYSBleHBvcnRhc3RlXG4gIH1cblxuICBkaXNtaW51aXJGdWVudGUoKTogdm9pZCB7XG4gICAgLy8gYXF1w60gcHVlZGVzIGxsYW1hciB0dSBmdW5jacOzbiBUUyByZWR1Y2lyKCkgc2kgbGEgZXhwb3J0YXN0ZVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRGYXZpY29uKGljb25Vcmw6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MTGlua0VsZW1lbnQ+KFwibGlua1tyZWwqPSdpY29uJ11cIik7XG5cbiAgICBpZiAoIWxpbmspIHtcbiAgICAgIGxpbmsgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKSBhcyBIVE1MTGlua0VsZW1lbnQ7XG4gICAgICBsaW5rLnJlbCA9ICdpY29uJztcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuaGVhZCwgbGluayk7XG4gICAgfVxuXG4gICAgbGluay50eXBlID0gJ2ltYWdlL3BuZyc7XG4gICAgbGluay5ocmVmID0gaWNvblVybDtcbiAgfVxufSJdfQ==