import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-siryus',
  template: `
    <h3>It's component from lib</h3>
  `,
  styles: [ 'h3 {border: 1px solid orange}']
})
export class SiryusLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
