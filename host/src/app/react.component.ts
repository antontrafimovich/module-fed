import { Component } from '@angular/core';

@Component({
  selector: 'app-react',
  standalone: true,
  template: `
    <section>
      <h1>React Component</h1>
      <p>
        This is a basic template for the ReactComponent route. It is configured
        to match every URL that starts with <code>/react-component</code>.
      </p>
    </section>
  `
})
export class ReactComponent {}
