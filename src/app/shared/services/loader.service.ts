import { LoaderComponent } from '../components/loader/loader.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  readonly CONFIRM_DIALOG_WIDTH = '60rem';
  readonly CONFIRM_DIALOG_HEIGHT = '50rem';
  readonly CONFIRM_DIALOG_PANEL_CLASS = 'hb-loader';

  constructor(public dialog: MatDialog) {}

  showLoader() {
    // Remove height from body - ( 'h-unset' is class form _spellbook.scss that sets 'height: unset')
    // This fixes visual bug with scrolled content
    document.querySelector('body').classList.add('h-unset');

    // Open loader
    return this.dialog.open(LoaderComponent, {
      width: this.CONFIRM_DIALOG_WIDTH,
      panelClass: this.CONFIRM_DIALOG_PANEL_CLASS,
      disableClose: true,
      autoFocus: false,
    });
  }

  closeLoader() {
    // Remove 'h-unset' from body
    document.querySelector('body').classList.remove('h-unset');

    // Close loader
    this.dialog.closeAll();
  }
}
