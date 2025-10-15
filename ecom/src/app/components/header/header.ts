import { Component, signal } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';
@Component({
  selector: 'app-header',
  imports: [PrimaryButton],
  template: `

  <div class="bg-slate-100 px-4 py-3 shadow-md  flex justify-between">
  <span class = "text-md ">My Store</span>
  <app-primary-button label="Cart" (btnClicked)="showButtonClicked()"/>
  </div>

`
})
export class Header {
title = signal(' My Store ');
showButtonClicked() {
  console.log('Button clicked!'); 
}
}
