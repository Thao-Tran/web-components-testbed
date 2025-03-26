import { Component, h, Prop, setMode } from '@stencil/core';

/**
  * This is needed to disable styling from slot fallback theme components when their slots are being used
  * because they're still included in the DOM so their styles are still being applied.
  * Lit has this behaviour built-in by default. This might be related to the fact that I'm using slots in the light DOM so Stencil polyfills the slotting behaviour.
  */
setMode(el => el.checkVisibility() ? 'visible' : undefined)

@Component({
  tag: 'theme-provider',
  shadow: false
})
export class ThemeProvider {
  // == Attributes =============================================================
  @Prop({reflect: true}) theme = 'base'

  // == Rendering ==============================================================
  render() {
    return <slot name="root">
      <slot name="variables">
        <theme-variables theme={this.theme}/>
      </slot>
      <slot name="button">
        <button-theme theme={this.theme}/>
      </slot>

      <slot/>
    </slot>
  }
}
