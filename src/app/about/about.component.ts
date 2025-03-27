import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
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
