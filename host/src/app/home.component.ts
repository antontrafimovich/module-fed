import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section>
      <h1>Home</h1>
      <p>
        Welcome to the host Angular application. This page is rendered by the
        HomeComponent route.
      </p>
    </section>
  `
})
export class HomeComponent {}
