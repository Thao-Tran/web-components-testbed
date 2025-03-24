import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'theme-variables',
  shadow: false,
  styleUrl: './index.css'
})
export class ThemeVariables {
  // == Attributes =============================================================
  @Prop({reflect: true}) theme = 'base'

  // == Rendering ==============================================================
  render() {
    return <slot/>
  }
}
