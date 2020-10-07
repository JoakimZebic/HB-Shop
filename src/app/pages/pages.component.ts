import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hb-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  pageTitle: string;

  constructor() {}

  ngOnInit(): void {}
}
