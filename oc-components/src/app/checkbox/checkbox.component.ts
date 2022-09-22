import { Component, OnInit } from '@angular/core';
import {MDCFoundation} from '@material/base/foundation';

import {MDCBannerAdapter} from '@material/banner/adapter';
import {CloseReason, cssClasses, numbers} from '@material/banner/constants';

const {OPENING, OPEN, CLOSING} = cssClasses;

export class MDCBannerFoundation extends MDCFoundation<MDCBannerAdapter> {
  static override get defaultAdapter(): MDCBannerAdapter {
    //@ts-ignore
    return {
      addClass: () => undefined,
      getContentHeight: () => 0,
      notifyClosed: () => undefined,
      notifyClosing: () => undefined,
      notifyOpened: () => undefined,
      notifyOpening: () => undefined,
      releaseFocus: () => undefined,
      removeClass: () => undefined,
      setStyleProperty: () => undefined,
      trapFocus: () => undefined,
    };
  }

  private isOpened = false;
  // Request id for open animation, used to cancel the refresh callback
  // request on close() and destroy().
  private animationFrame = 0;
  // Timer id for close and open animation, used to cancel the timer on
  // close() and destroy().
  private animationTimer = 0;

  constructor(adapter?: Partial<MDCBannerAdapter>) {
    super({...MDCBannerFoundation.defaultAdapter, ...adapter});
  }

  override destroy() {
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = 0;
    clearTimeout(this.animationTimer);
    this.animationTimer = 0;
  }

  open() {
    this.isOpened = true;
    this.adapter.notifyOpening();
    this.adapter.removeClass(CLOSING);
    this.adapter.addClass(OPENING);

    const contentHeight = this.adapter.getContentHeight();
    this.animationFrame = requestAnimationFrame(() => {
      this.adapter.addClass(OPEN);
      this.adapter.setStyleProperty('height', `${contentHeight}px`);
 //@ts-ignore
      this.animationTimer = setTimeout(() => {
        this.handleAnimationTimerEnd();
        this.adapter.trapFocus();
        this.adapter.notifyOpened();
      }, numbers.BANNER_ANIMATION_OPEN_TIME_MS);
    });
  }

  /**
   * @param reason Why the banner was closed. Value will be passed to
   *     events.CLOSING and events.CLOSED via the `event.detail.reason`
   *     property. Standard values are CloseReason.PRIMARY and
   *     CloseReason.SECONDARY, but CloseReason.UNSPECIFIED is provided for
   *     custom handling of programmatic closing of the banner.
   */
  close(reason: CloseReason) {
    if (!this.isOpened) {
      // Avoid redundant close calls (and events), e.g. repeated interactions as
      // the banner is animating closed
      return;
    }

    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = 0;

    this.isOpened = false;
    this.adapter.notifyClosing(reason);
    this.adapter.addClass(CLOSING);
    this.adapter.setStyleProperty('height', '0');
    this.adapter.removeClass(OPEN);
    this.adapter.removeClass(OPENING);

    clearTimeout(this.animationTimer);
     //@ts-ignore
    this.animationTimer = setTimeout(() => {
      this.adapter.releaseFocus();
      this.handleAnimationTimerEnd();
      this.adapter.notifyClosed(reason);
    }, numbers.BANNER_ANIMATION_CLOSE_TIME_MS);
  }

  isOpen(): boolean {
    return this.isOpened;
  }

  handlePrimaryActionClick() {
    this.close(CloseReason.PRIMARY);
  }

  handleSecondaryActionClick() {
    this.close(CloseReason.SECONDARY);
  }

  layout() {
    const contentHeight = this.adapter.getContentHeight();
    this.adapter.setStyleProperty('height', `${contentHeight}px`);
  }

  private handleAnimationTimerEnd() {
    this.animationTimer = 0;
    this.adapter.removeClass(OPENING);
    this.adapter.removeClass(CLOSING);
  }
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

}
