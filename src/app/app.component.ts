import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, Output } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'blue-sky-app';


  translate:any;
  constructor(private primengConfig: PrimeNGConfig){
    this.primengConfig.ripple = true;
  }



  ngOnInit(): void {


  }





}
