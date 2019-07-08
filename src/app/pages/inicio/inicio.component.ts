import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#fecha-inicio').datepicker();
  }

}