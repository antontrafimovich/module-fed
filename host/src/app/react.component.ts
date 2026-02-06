import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { loadReactRemoteMountModule } from './federation';

@Component({
  selector: 'app-react',
  standalone: true,
  template: `
    <section class="react-component-page">
      <h1>React Component</h1>
      <div #reactHost class="react-host"></div>
    </section>
  `,
  styles: [
    `
      .react-component-page {
        display: grid;
        gap: 12px;
      }

      .react-host {
        min-height: 320px;
      }
    `
  ]
})
export class ReactComponent implements AfterViewInit, OnDestroy {
  @ViewChild('reactHost', { static: true })
  private reactHostRef!: ElementRef<HTMLDivElement>;

  private unmountReactApp?: () => void;

  private destroyed = false;

  async ngAfterViewInit(): Promise<void> {
    try {
      const remoteModule = await loadReactRemoteMountModule();

      if (this.destroyed) {
        return;
      }

      this.unmountReactApp = remoteModule.mount(this.reactHostRef.nativeElement);
    } catch (error) {
      console.error('Could not load remote React component.', error);
    }
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.unmountReactApp?.();
  }
}
