import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/services/theme.service';
import { TransService } from 'src/app/services/trans.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  translate:any;
  theme:string = "assets/images/icon2.svg";
  boolean:boolean = false;
  language:string = "assets/images/Btn-Language.svg";
  lang:string =  ""
  list:string="assets/images/list.svg";

  visibleSidebar2: boolean = false;

  hamburger:boolean = false;

  constructor(private translateService: TransService,private themeService:ThemeService){
    this.translate = translateService.getTranslate();
  }

  ngOnInit(): void {
    console.log(this.visibleSidebar2);
    console.log(this.translateService.flags());
  }

  visibile():void {
    this.visibleSidebar2 = true;
  }



  /* translation change */
  changeLanguage(){
    if(!this.translateService.flags()){
      this.translate.use(localStorage.getItem("ru"));
      this.language = "assets/images/russia.png";
    }
    else{
      this.translate.use(localStorage.getItem("uz"));
      this.language = "assets/images/Btn-Language.svg";
    }
  }

  
  changeHamburger(){
    if(!this.hamburger){
      this.list ="assets/images/x.svg";
      this.hamburger = !this.hamburger;
    }
    else {
      this.list="assets/images/list.svg";
      this.hamburger = !this.hamburger;
    }

  }

  /* theme change */
  changeTheme(): void {
    let boolean = this.themeService.changeTheme();
    if(!boolean){
      this.theme = "assets/images/icon2.svg";
    }
    else if (boolean){
      this.theme = "assets/images/icon3.svg";
    }

  }


}
