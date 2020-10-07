import { LocalStorageService } from './../../services/local-storage/local-storage.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hb-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
})
export class ThemeSwitchComponent implements OnInit {
  @Input() style: string;
  darkMode = false;

  constructor(private ls: LocalStorageService) {}

  ngOnInit(): void {
    const themePref = this.ls.get('themePref');
    if (themePref && themePref === 'dark') {
      this.darkMode = true;
      document.documentElement.classList.add('dark');
    }
  }

  toggleTheme(): void {
    if (this.darkMode) {
      this.darkMode = false;
      this.ls.delete('themePref');
      document.documentElement.classList.remove('dark');
    } else {
      this.darkMode = true;
      this.ls.add('themePref', 'dark');
      document.documentElement.classList.add('dark');
    }
  }
}
