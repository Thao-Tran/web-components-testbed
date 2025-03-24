import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'button-theme',
  shadow: false,
  styleUrl: './index.css'
})
export class ButtonTheme {
  // == Attributes =============================================================
  @Prop({reflect: true}) theme = 'base'

  // == Rendering ==============================================================
  render() {
    return <slot/>
  }
}
