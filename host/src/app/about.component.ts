import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section>
      <h1>About</h1>
      <p>
        This Angular host demonstrates route setup for local pages and a
        React-oriented route prefix.
      </p>
    </section>
  `
})
export class AboutComponent {}
