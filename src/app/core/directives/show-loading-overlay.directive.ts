import { Directive, Input, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { LoadingOverlayComponent } from '../components/loading-overlay/loading-overlay.component';
import { LoadingOverlay } from './loading-overlay';

/**
 * Delay for showing the overlay.
 */
const AttachDelayMS = 500;

/**
 * Directive for showing a loader overlay for components.
 *
 * Based on https://github.com/Silvere112/ngx-load.
 */
@Directive({
  selector: '[appShowLoadingOverlay]',
})
export class ShowLoadingOverlayDirective extends LoadingOverlay implements OnDestroy {
  private s?: Subscription;

  @Input()
  set appShowLoadingOverlay(value: boolean | null) {
    if (value) {
      this.attachLoader();
    } else {
      this.detachLoader();
    }
  }

  ngOnDestroy(): void {
    this.detachLoader();
  }

  private attachLoader() {
    this.s?.unsubscribe();
    this.s = timer(AttachDelayMS).subscribe(() => {
      super.attach(overlay => overlay.createWithBackdrop('_loading-overlay-backdrop'), LoadingOverlayComponent);
    });
  }

  private detachLoader() {
    this.s?.unsubscribe();
    super.detach();
  }
}
