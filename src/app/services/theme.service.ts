import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor() { }
  
  changeTheme(){
    return document.body.classList.toggle("dark-theme");
  }


}
