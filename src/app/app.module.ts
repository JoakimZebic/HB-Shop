import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from './shared/services/local-storage/local-storage.service';
import { SessionStorageService } from './shared/services/session-storage/session-storage.service';
import { NotFoundModule } from './404/not-found.module';
import {
  HttpBackend,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MatCarouselModule } from '@ngbmodule/material-carousel';

export function translateHttpLoaderFactory(
  httpBackend: HttpBackend
): TranslateHttpLoader {
  return new TranslateHttpLoader(
    new HttpClient(httpBackend),
    './assets/i18n/',
    '.json'
  );
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    NotFoundModule,
    MatCarouselModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpBackend],
      },
    }),
  ],
  providers: [LocalStorageService, SessionStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
