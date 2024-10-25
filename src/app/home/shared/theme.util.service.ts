import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeUtilService {
  isLightTheme = false;
  private themeSubject = new BehaviorSubject<boolean>(this.isLightTheme);
  isLightThemeChanged$ = this.themeSubject.asObservable();

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    this.isLightTheme = savedTheme === 'light-theme';
    document.body.className = this.isLightTheme ? 'light-theme' : '';
    this.themeSubject.next(this.isLightTheme);
  }

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
    const themeClass = this.isLightTheme ? 'light-theme' : '';
    document.body.className = themeClass;
    localStorage.setItem('theme', themeClass);
    this.themeSubject.next(this.isLightTheme);
  }
}
