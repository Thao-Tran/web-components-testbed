import { Component, Element, h, Host, Prop, setMode } from '@stencil/core';

/**
  * This is needed to disable styling from slot fallback theme components when their slots are being used
  * because they're still included in the DOM so their styles are still being applied.
  * Lit has this behaviour built-in by default.
  * Pretty hacky though, so I'm gonna see if there's anything else I can do.
  */
setMode(el => el.checkVisibility() ? 'visible' : undefined)

@Component({
  tag: 'theme-provider',
  shadow: true
})
export class ThemeProvider {
  // == Attributes =============================================================
  @Prop({reflect: true}) asChild: boolean

  // == Internal state =========================================================
  @Element() private host!: HTMLElement

  // == Lifecycle hooks ========================================================
  componentDidRender () {
    const {shadowRoot} = this.host

    if (!shadowRoot) {
      return
    }

    shadowRoot.append(...this.host.children)
  }

  // == Rendering ==============================================================
  render() {
    return this.asChild
      ? <slot/>
      : <Host>
        <slot name="variables">
          <theme-variables/>
        </slot>
        <slot name="button">
          <button-theme/>
        </slot>

        <slot/>
      </Host>
  }
}
