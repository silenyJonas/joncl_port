import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // díky tomu je to singleton přes celou appku
})
export class LanguageService {
  private isEnglishSubject = new BehaviorSubject<boolean>(false); // výchozí jazyk: CZ
  public isEnglish$ = this.isEnglishSubject.asObservable(); // observable pro odběratele

  get isEnglish(): boolean {
    return this.isEnglishSubject.getValue(); // synchronní getter
  }

  toggleLanguage(lang: boolean): void {
    this.isEnglishSubject.next(lang);
  }

  setLanguage(isEnglish: boolean): void {
    this.isEnglishSubject.next(isEnglish);
  }
}
