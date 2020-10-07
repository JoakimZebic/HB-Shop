import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipeModule } from './pipes/pipe-module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeSwitchComponent } from './components/theme-switch/theme-switch.component';

const MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatIconModule,
  MatCheckboxModule,
  MatSelectModule,
  MatStepperModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule.forRoot(),
    RouterModule,
    ...MATERIAL_COMPONENTS,
    TranslateModule,
  ],
  declarations: [SidebarComponent, LoaderComponent, ThemeSwitchComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    SidebarComponent,
    LoaderComponent,
    ThemeSwitchComponent,
    ...MATERIAL_COMPONENTS,
  ],
  providers: [],
  entryComponents: [],
})
export class SharedModule {}
