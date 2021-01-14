import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSearchboxComponent } from './custom-searchbox.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';

@NgModule({
  declarations: [CustomSearchboxComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SearchBoxComponent: {
          component: CustomSearchboxComponent,
        },
      },
    } as CmsConfig),
  ],
  exports: [CustomSearchboxComponent],
})
export class CustomSearchboxModule {}
