import { NgModule } from '@angular/core';
import { ImageUrlPipe } from './image-url.pipe';
import { SpaceThousandsPipe } from './spaceThousands.pipe';

@NgModule({
  imports: [],
  declarations: [ImageUrlPipe, SpaceThousandsPipe],
  exports: [ImageUrlPipe, SpaceThousandsPipe],
})
export class PipeModule {
  static forRoot() {
    return {
      ngModule: PipeModule,
      providers: [],
    };
  }
}
