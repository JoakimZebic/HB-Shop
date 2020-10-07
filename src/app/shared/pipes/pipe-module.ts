import {NgModule} from '@angular/core';
import {ImageUrlPipe} from './image-url.pipe';

@NgModule({
  imports: [],
  declarations: [ImageUrlPipe],
  exports: [ImageUrlPipe],
})
export class PipeModule {
  static forRoot() {
    return {
      ngModule: PipeModule,
      providers: [],
    };
  }
}
