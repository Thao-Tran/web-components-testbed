import { Component, h, Prop } from '@stencil/core';

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
