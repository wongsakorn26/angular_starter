import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_starter';
  constructor(private translateService: TranslateService) {
    const userLang = navigator.language || 'en'
    const language = userLang.split('-')[0]
    this.translateService.setDefaultLang(language)
    this.translateService.use(language)
  }
  changeLanguage(lang: string) {
    this.translateService.use(lang)
  }
}
