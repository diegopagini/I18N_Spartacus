import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { ConfigModule, I18nConfig } from '@spartacus/core';
import { tranlationOverwrites } from './i18n-exercise.config';
import { CustomSearchboxModule } from './custom-searchbox/custom-searchbox.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CustomSearchboxModule,
    ConfigModule.withConfig({
      i18n: {
        resources: tranlationOverwrites,
      },
    }),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443',
          prefix: '/occ/v2/',
        },
      },
      context: {
        currency: ['USD'],
        language: ['en', 'de', 'ja'],
        baseSite: ['powertools-spa'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'de',
      },
      features: {
        level: '2.1',
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
