import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { contrasteF } from '../shared/contraste';
import { inicializarContraste } from '../shared/contraste';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(titleService, renderer) {
        this.titleService = titleService;
        this.renderer = renderer;
        this.contrasteActivo = false;
    }
    HeaderComponent.prototype.ngAfterViewInit = function () {
        this.titleService.setTitle('Fondo Nacional del Ahorro');
        this.setFavicon('assets/fna/img/logo.png');
        inicializarContraste();
        var contrasteGuardado = localStorage.getItem('contraste');
        this.contrasteActivo = contrasteGuardado === '1';
        var contraste = document.getElementById('contraste');
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
    };
    HeaderComponent.prototype.toggleContraste = function () {
        this.contrasteActivo = !this.contrasteActivo;
        var valor = this.contrasteActivo ? 1 : 0;
        var contraste = document.getElementById('contraste');
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
    };
    HeaderComponent.prototype.aumentarFuente = function () {
        // aquí puedes llamar tu función TS aumentar() si la exportaste
    };
    HeaderComponent.prototype.disminuirFuente = function () {
        // aquí puedes llamar tu función TS reducir() si la exportaste
    };
    HeaderComponent.prototype.setFavicon = function (iconUrl) {
        var link = document.querySelector("link[rel*='icon']");
        if (!link) {
            link = this.renderer.createElement('link');
            link.rel = 'icon';
            this.renderer.appendChild(document.head, link);
        }
        link.type = 'image/png';
        link.href = iconUrl;
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-header',
                    template: "<div class=\"row\">\n  <a\n    href=\"https://www.gov.co\"\n    target=\"_blank\"\n    title=\"V\u00EDnculo al sitio web del Gobierno de Colombia\"\n    class=\"linkGob\"\n    rel=\"noopener noreferrer\"\n  >\n    <div id=\"seccionGOV\">\n      <div class=\"containerr\">\n        <img\n          id=\"logoGOV\"\n          src=\"assets/fna/img/logo_gov_co.png\"\n          alt=\"Logo Gobierno de Colombia\"\n        />\n      </div>\n    </div>\n  </a>\n</div>\n\n<header>\n  <div class=\"containerr\" id=\"headerFNAT\">\n    <div id=\"seccionFna\">\n      <a\n        href=\"https://www.fna.gov.co\"\n        target=\"_blank\"\n        title=\"V\u00EDnculo al sitio web del Fondo Nacional del Ahorro\"\n        rel=\"noopener noreferrer\"\n      >\n        <img\n          src=\"assets/fna/img/logo_new.png\"\n          alt=\"Logo FNA\"\n          class=\"img logofna\"\n        />\n      </a>\n    </div>\n\n    <div class=\"controls\">\n      <table>\n        <tr>\n          <td style=\"width: 20px;\">\n            <span\n              id=\"fontMas\"\n              style=\"font-size: xx-large; color: white;\"\n              title=\"Aumentar tama\u00F1o de fuente\"\n              tabindex=\"0\"\n              (click)=\"aumentarFuente()\"\n              (keydown.enter)=\"aumentarFuente()\"\n            >\n              A\n            </span>\n          </td>\n          <td style=\"width: 30px; text-align: center; color: white;\">\n            <span\n              id=\"fontMenos\"\n              title=\"Reducir tama\u00F1o de fuente\"\n              tabindex=\"0\"\n              (click)=\"disminuirFuente()\"\n              (keydown.enter)=\"disminuirFuente()\"\n            >\n              A\n            </span>\n          </td>\n          <td style=\"width: 30px; text-align: center;\">\n            <img\n              id=\"contraste\"\n              src=\"assets/fna/img/contraste.png\"\n              class=\"img img-responsive\"\n              alt=\"Modo alto contraste\"\n              title=\"Modo alto contraste\"\n              tabindex=\"0\"\n              (click)=\"toggleContraste()\"\n              (keydown.enter)=\"toggleContraste()\"\n            />\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</header>",
                    styles: ["body,html{margin:0;padding:0}.alto-contraste{filter:contrast(1.4);background-color:#000!important;color:#fff!important}#headerFNAT,#seccionGOV,.containerr{width:100%}.linkGob{text-decoration:none}.logofna{max-width:100%;height:auto}"]
                }] }
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return [
        { type: Title },
        { type: Renderer2 }
    ]; };
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZuYS10ZW1wbGF0ZS11aS8iLCJzb3VyY2VzIjpbImxpYi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUzRDtJQVNFLHlCQUNVLFlBQW1CLEVBQ25CLFFBQW1CO1FBRG5CLGlCQUFZLEdBQVosWUFBWSxDQUFPO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFKckIsb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFLNUIsQ0FBQztJQUVMLHlDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMzQyxvQkFBb0IsRUFBRSxDQUFDO1FBRXZCLElBQU0saUJBQWlCLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsZUFBZSxHQUFHLGlCQUFpQixLQUFLLEdBQUcsQ0FBQztRQUVqRCxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXZELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUU5QyxJQUFJLFNBQVMsRUFBRTtnQkFDYixTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQzVDO1lBRUQsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2Y7YUFBTTtZQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRWpELElBQUksU0FBUyxFQUFFO2dCQUNiLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDL0M7WUFFRCxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDZjtJQUNILENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFFN0MsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV2RCxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVqRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFOUMsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUM1QztTQUNGO2FBQU07WUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUVqRCxJQUFJLFNBQVMsRUFBRTtnQkFDYixTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQy9DO1NBQ0Y7UUFFRCxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELHdDQUFjLEdBQWQ7UUFDRSwrREFBK0Q7SUFDakUsQ0FBQztJQUVELHlDQUFlLEdBQWY7UUFDRSw4REFBOEQ7SUFDaEUsQ0FBQztJQUVPLG9DQUFVLEdBQWxCLFVBQW1CLE9BQWU7UUFDaEMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBa0IsbUJBQW1CLENBQUMsQ0FBQztRQUV4RSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBb0IsQ0FBQztZQUM5RCxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Z0JBdkZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsa3VFQUFzQzs7aUJBRXZDOzs7O2dCQVJRLEtBQUs7Z0JBRHFCLFNBQVM7O0lBNkY1QyxzQkFBQztDQUFBLEFBeEZELElBd0ZDO1NBbkZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IGNvbnRyYXN0ZUYgfSBmcm9tICcuLi9zaGFyZWQvY29udHJhc3RlJztcbmltcG9ydCB7IGluaWNpYWxpemFyQ29udHJhc3RlIH0gZnJvbSAnLi4vc2hhcmVkL2NvbnRyYXN0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBwcml2YXRlIGNvbnRyYXN0ZUFjdGl2byA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGl0bGVTZXJ2aWNlOiBUaXRsZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUoJ0ZvbmRvIE5hY2lvbmFsIGRlbCBBaG9ycm8nKTtcbiAgICB0aGlzLnNldEZhdmljb24oJ2Fzc2V0cy9mbmEvaW1nL2xvZ28ucG5nJyk7XG4gICAgaW5pY2lhbGl6YXJDb250cmFzdGUoKTtcblxuICAgIGNvbnN0IGNvbnRyYXN0ZUd1YXJkYWRvID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbnRyYXN0ZScpO1xuICAgIHRoaXMuY29udHJhc3RlQWN0aXZvID0gY29udHJhc3RlR3VhcmRhZG8gPT09ICcxJztcblxuICAgIGNvbnN0IGNvbnRyYXN0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cmFzdGUnKTtcblxuICAgIGlmICh0aGlzLmNvbnRyYXN0ZUFjdGl2bykge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdhbHRvX2NvbnRyYXN0ZScpO1xuXG4gICAgICBpZiAoY29udHJhc3RlKSB7XG4gICAgICAgIGNvbnRyYXN0ZS5jbGFzc0xpc3QuYWRkKCdjb250cmFzdC1hY3RpdmUnKTtcbiAgICAgIH1cblxuICAgICAgY29udHJhc3RlRigxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdhbHRvX2NvbnRyYXN0ZScpO1xuXG4gICAgICBpZiAoY29udHJhc3RlKSB7XG4gICAgICAgIGNvbnRyYXN0ZS5jbGFzc0xpc3QucmVtb3ZlKCdjb250cmFzdC1hY3RpdmUnKTtcbiAgICAgIH1cblxuICAgICAgY29udHJhc3RlRigwKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVDb250cmFzdGUoKTogdm9pZCB7XG4gICAgdGhpcy5jb250cmFzdGVBY3Rpdm8gPSAhdGhpcy5jb250cmFzdGVBY3Rpdm87XG5cbiAgICBjb25zdCB2YWxvciA9IHRoaXMuY29udHJhc3RlQWN0aXZvID8gMSA6IDA7XG4gICAgY29uc3QgY29udHJhc3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyYXN0ZScpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbnRyYXN0ZScsIFN0cmluZyh2YWxvcikpO1xuXG4gICAgaWYgKHRoaXMuY29udHJhc3RlQWN0aXZvKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2FsdG9fY29udHJhc3RlJyk7XG5cbiAgICAgIGlmIChjb250cmFzdGUpIHtcbiAgICAgICAgY29udHJhc3RlLmNsYXNzTGlzdC5hZGQoJ2NvbnRyYXN0LWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2FsdG9fY29udHJhc3RlJyk7XG5cbiAgICAgIGlmIChjb250cmFzdGUpIHtcbiAgICAgICAgY29udHJhc3RlLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRyYXN0LWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRyYXN0ZUYodmFsb3IpO1xuICB9XG5cbiAgYXVtZW50YXJGdWVudGUoKTogdm9pZCB7XG4gICAgLy8gYXF1w60gcHVlZGVzIGxsYW1hciB0dSBmdW5jacOzbiBUUyBhdW1lbnRhcigpIHNpIGxhIGV4cG9ydGFzdGVcbiAgfVxuXG4gIGRpc21pbnVpckZ1ZW50ZSgpOiB2b2lkIHtcbiAgICAvLyBhcXXDrSBwdWVkZXMgbGxhbWFyIHR1IGZ1bmNpw7NuIFRTIHJlZHVjaXIoKSBzaSBsYSBleHBvcnRhc3RlXG4gIH1cblxuICBwcml2YXRlIHNldEZhdmljb24oaWNvblVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxMaW5rRWxlbWVudD4oXCJsaW5rW3JlbCo9J2ljb24nXVwiKTtcblxuICAgIGlmICghbGluaykge1xuICAgICAgbGluayA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbGluaycpIGFzIEhUTUxMaW5rRWxlbWVudDtcbiAgICAgIGxpbmsucmVsID0gJ2ljb24nO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChkb2N1bWVudC5oZWFkLCBsaW5rKTtcbiAgICB9XG5cbiAgICBsaW5rLnR5cGUgPSAnaW1hZ2UvcG5nJztcbiAgICBsaW5rLmhyZWYgPSBpY29uVXJsO1xuICB9XG59Il19