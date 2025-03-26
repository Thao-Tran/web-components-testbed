import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'button-theme',
  shadow: false,
  styleUrls: {
    visible: './index.css'
  }
})
export class ButtonTheme {
  // == Attributes =============================================================
  @Prop({reflect: true}) theme = 'base'

  // == Rendering ==============================================================
  render() {
    return <slot/>
  }
}
