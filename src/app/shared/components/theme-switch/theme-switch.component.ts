import { LocalStorageService } from './../../services/local-storage/local-storage.service';
import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from 'src/assets/theme/theme.service';

@Component({
  selector: 'hb-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
})
export class ThemeSwitchComponent implements OnInit {
  @Input() style: string;
  darkMode = false;

  constructor(private ls: LocalStorageService, private theme: ThemeService) {
    const themePref = this.ls.get('themePref');

    if (themePref) {
      this.darkMode = true;
      this.theme.setThemeColor('dark');
    } else {
      this.theme.setThemeColor('light');
    }
  }

  ngOnInit(): void {}

  toggleTheme(): void {
    if (this.darkMode) {
      this.darkMode = false;
      this.ls.delete('themePref');
      this.theme.setThemeColor('light');
    } else {
      this.darkMode = true;
      this.ls.add('themePref', 'dark');
      this.theme.setThemeColor('dark');
    }
  }
}
