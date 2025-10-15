import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <h1 class="text-3xl font-bold underline bg-amber-300">
      Hello world!
    </h1>
  `
})
export class App {
  title = signal('ecom');
}
