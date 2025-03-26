import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'button-theme',
  shadow: false,
  styleUrls: {
    visible: './index.css'
  }
})
export class ButtonTheme {
  // == Rendering ==============================================================
  render() {
    return <Host/>
  }
}
