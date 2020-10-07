import { Router } from '@angular/router';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'hb-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit, AfterViewInit {
  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
