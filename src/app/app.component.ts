import { Component, OnInit, AfterViewInit } from '@angular/core';
import { correctHeight, detectBody } from './app-helpers-inspinia';

import * as jQuery from 'jquery';

// declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'CLIENTE-APP-ANGULAR-FRONT-END';

  constructor() {}

  OnInit() {

  }

  ngAfterViewInit() {
    // Run correctHeight function on load and resize window event
    jQuery(window).bind('load resize', function() {
      correctHeight();
      detectBody();
    });

    // Correct height of wrapper after metisMenu animation.
    jQuery('.metismenu a').click(() => {
      setTimeout(() => {
        correctHeight();
      }, 300);
    });
  }
}
