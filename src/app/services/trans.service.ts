import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class TransService {

  translate:any;
  flag:boolean =false;

  constructor(private translateService:TranslateService) {
    translateService.addLangs(["uz","ru"]);

    translateService.setDefaultLang("uz");
    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang?.match(/en|en/) ? browserLang: 'uz');
    localStorage.setItem('uz',this.translateService.getLangs()[0]);
    localStorage.setItem('ru',this.translateService.getLangs()[1]);
    this.translate = translateService;

   }

   getTranslate(){
     return this.translate;
   }

   flags(){
     return this.flag = !this.flag;
   }













   
  
}
