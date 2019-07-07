import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('#side-menu').metisMenu();
  }

  activeRoute(routename: string): boolean{
    return this.router.url.indexOf(routename) > -1;
  }

}
