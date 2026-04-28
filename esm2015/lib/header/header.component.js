/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { contrasteF } from '../shared/contraste';
import { inicializarContraste } from '../shared/contraste';
export class HeaderComponent {
    /**
     * @param {?} titleService
     * @param {?} renderer
     */
    constructor(titleService, renderer) {
        this.titleService = titleService;
        this.renderer = renderer;
        this.contrasteActivo = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.titleService.setTitle('Fondo Nacional del Ahorro');
        this.setFavicon('assets/fna/img/logo.png');
        inicializarContraste();
        /** @type {?} */
        const contrasteGuardado = localStorage.getItem('contraste');
        this.contrasteActivo = contrasteGuardado === '1';
        /** @type {?} */
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
    /**
     * @return {?}
     */
    toggleContraste() {
        this.contrasteActivo = !this.contrasteActivo;
        /** @type {?} */
        const valor = this.contrasteActivo ? 1 : 0;
        /** @type {?} */
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
    /**
     * @return {?}
     */
    aumentarFuente() {
        // aquí puedes llamar tu función TS aumentar() si la exportaste
    }
    /**
     * @return {?}
     */
    disminuirFuente() {
        // aquí puedes llamar tu función TS reducir() si la exportaste
    }
    /**
     * @private
     * @param {?} iconUrl
     * @return {?}
     */
    setFavicon(iconUrl) {
        /** @type {?} */
        let link = document.querySelector("link[rel*='icon']");
        if (!link) {
            link = (/** @type {?} */ (this.renderer.createElement('link')));
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.contrasteActivo;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.titleService;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZuYS10ZW1wbGF0ZS11aS8iLCJzb3VyY2VzIjpbImxpYi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFPM0QsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBSTFCLFlBQ1UsWUFBbUIsRUFDbkIsUUFBbUI7UUFEbkIsaUJBQVksR0FBWixZQUFZLENBQU87UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUpyQixvQkFBZSxHQUFHLEtBQUssQ0FBQztJQUs1QixDQUFDOzs7O0lBRUwsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzNDLG9CQUFvQixFQUFFLENBQUM7O2NBRWpCLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQzNELElBQUksQ0FBQyxlQUFlLEdBQUcsaUJBQWlCLEtBQUssR0FBRyxDQUFDOztjQUUzQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7UUFFdEQsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRTlDLElBQUksU0FBUyxFQUFFO2dCQUNiLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDNUM7WUFFRCxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDZjthQUFNO1lBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFakQsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUMvQztZQUVELFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQzs7Y0FFdkMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Y0FDcEMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO1FBRXRELFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRWpELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUU5QyxJQUFJLFNBQVMsRUFBRTtnQkFDYixTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQzVDO1NBQ0Y7YUFBTTtZQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRWpELElBQUksU0FBUyxFQUFFO2dCQUNiLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDL0M7U0FDRjtRQUVELFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsY0FBYztRQUNaLCtEQUErRDtJQUNqRSxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLDhEQUE4RDtJQUNoRSxDQUFDOzs7Ozs7SUFFTyxVQUFVLENBQUMsT0FBZTs7WUFDNUIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQWtCLG1CQUFtQixDQUFDO1FBRXZFLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxJQUFJLEdBQUcsbUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQW1CLENBQUM7WUFDOUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNoRDtRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQ3RCLENBQUM7OztZQXZGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLGt1RUFBc0M7O2FBRXZDOzs7O1lBUlEsS0FBSztZQURxQixTQUFTOzs7Ozs7O0lBWTFDLDBDQUFnQzs7Ozs7SUFHOUIsdUNBQTJCOzs7OztJQUMzQixtQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IGNvbnRyYXN0ZUYgfSBmcm9tICcuLi9zaGFyZWQvY29udHJhc3RlJztcbmltcG9ydCB7IGluaWNpYWxpemFyQ29udHJhc3RlIH0gZnJvbSAnLi4vc2hhcmVkL2NvbnRyYXN0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBwcml2YXRlIGNvbnRyYXN0ZUFjdGl2byA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGl0bGVTZXJ2aWNlOiBUaXRsZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUoJ0ZvbmRvIE5hY2lvbmFsIGRlbCBBaG9ycm8nKTtcbiAgICB0aGlzLnNldEZhdmljb24oJ2Fzc2V0cy9mbmEvaW1nL2xvZ28ucG5nJyk7XG4gICAgaW5pY2lhbGl6YXJDb250cmFzdGUoKTtcblxuICAgIGNvbnN0IGNvbnRyYXN0ZUd1YXJkYWRvID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbnRyYXN0ZScpO1xuICAgIHRoaXMuY29udHJhc3RlQWN0aXZvID0gY29udHJhc3RlR3VhcmRhZG8gPT09ICcxJztcblxuICAgIGNvbnN0IGNvbnRyYXN0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cmFzdGUnKTtcblxuICAgIGlmICh0aGlzLmNvbnRyYXN0ZUFjdGl2bykge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdhbHRvX2NvbnRyYXN0ZScpO1xuXG4gICAgICBpZiAoY29udHJhc3RlKSB7XG4gICAgICAgIGNvbnRyYXN0ZS5jbGFzc0xpc3QuYWRkKCdjb250cmFzdC1hY3RpdmUnKTtcbiAgICAgIH1cblxuICAgICAgY29udHJhc3RlRigxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdhbHRvX2NvbnRyYXN0ZScpO1xuXG4gICAgICBpZiAoY29udHJhc3RlKSB7XG4gICAgICAgIGNvbnRyYXN0ZS5jbGFzc0xpc3QucmVtb3ZlKCdjb250cmFzdC1hY3RpdmUnKTtcbiAgICAgIH1cblxuICAgICAgY29udHJhc3RlRigwKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVDb250cmFzdGUoKTogdm9pZCB7XG4gICAgdGhpcy5jb250cmFzdGVBY3Rpdm8gPSAhdGhpcy5jb250cmFzdGVBY3Rpdm87XG5cbiAgICBjb25zdCB2YWxvciA9IHRoaXMuY29udHJhc3RlQWN0aXZvID8gMSA6IDA7XG4gICAgY29uc3QgY29udHJhc3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyYXN0ZScpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbnRyYXN0ZScsIFN0cmluZyh2YWxvcikpO1xuXG4gICAgaWYgKHRoaXMuY29udHJhc3RlQWN0aXZvKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2FsdG9fY29udHJhc3RlJyk7XG5cbiAgICAgIGlmIChjb250cmFzdGUpIHtcbiAgICAgICAgY29udHJhc3RlLmNsYXNzTGlzdC5hZGQoJ2NvbnRyYXN0LWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2FsdG9fY29udHJhc3RlJyk7XG5cbiAgICAgIGlmIChjb250cmFzdGUpIHtcbiAgICAgICAgY29udHJhc3RlLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRyYXN0LWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRyYXN0ZUYodmFsb3IpO1xuICB9XG5cbiAgYXVtZW50YXJGdWVudGUoKTogdm9pZCB7XG4gICAgLy8gYXF1w60gcHVlZGVzIGxsYW1hciB0dSBmdW5jacOzbiBUUyBhdW1lbnRhcigpIHNpIGxhIGV4cG9ydGFzdGVcbiAgfVxuXG4gIGRpc21pbnVpckZ1ZW50ZSgpOiB2b2lkIHtcbiAgICAvLyBhcXXDrSBwdWVkZXMgbGxhbWFyIHR1IGZ1bmNpw7NuIFRTIHJlZHVjaXIoKSBzaSBsYSBleHBvcnRhc3RlXG4gIH1cblxuICBwcml2YXRlIHNldEZhdmljb24oaWNvblVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxMaW5rRWxlbWVudD4oXCJsaW5rW3JlbCo9J2ljb24nXVwiKTtcblxuICAgIGlmICghbGluaykge1xuICAgICAgbGluayA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbGluaycpIGFzIEhUTUxMaW5rRWxlbWVudDtcbiAgICAgIGxpbmsucmVsID0gJ2ljb24nO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChkb2N1bWVudC5oZWFkLCBsaW5rKTtcbiAgICB9XG5cbiAgICBsaW5rLnR5cGUgPSAnaW1hZ2UvcG5nJztcbiAgICBsaW5rLmhyZWYgPSBpY29uVXJsO1xuICB9XG59Il19