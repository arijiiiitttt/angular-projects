import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `<button class = "bg-blue-500 text-white border px-5 py-1 flex justify-between items-center rounded-xl hover:bg-blue-600 shadow-md" (click)="btnClicked.emit()">
  {{label()}}
  </button>`,

})
export class PrimaryButton {
label = input('');

btnClicked = output();

// handleButtonClick() {
//   console.log('Button clicked!'); 
// }
}
