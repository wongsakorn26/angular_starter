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

  constructor(public translate: TranslateService) {
    // Add languages
    translate.addLangs(['en', 'th']);

    // Set default language
    translate.setDefaultLang('en');

    // Use browser language if available, otherwise use English
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|th/) ? browserLang : 'en');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}