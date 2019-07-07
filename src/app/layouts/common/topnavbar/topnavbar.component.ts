import { Component, OnInit } from '@angular/core';
import { smoothlyMenu } from '../../../app-helpers-inspinia';
import * as $ from 'jquery';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  toggleNavigation(): void {
    $('body').toggleClass('mini-navbar');
    smoothlyMenu();
  }
}
