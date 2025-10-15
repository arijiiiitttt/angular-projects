import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Body } from './components/body/body';
import { Fooder } from './components/fooder/fooder';

@Component({
  selector: 'app-root',
  imports: [Header, Body, Fooder],
  template: `
    <app-header/>
    <app-body/>
    <app-fooder/>
  `
})
export class App {
  title = signal('ecom');
}
