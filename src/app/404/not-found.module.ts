import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {NotFoundComponent} from './not-found.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule {
}
