import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hb-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
