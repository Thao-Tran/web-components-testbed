import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'theme-variables',
  shadow: false,
  styleUrls: {
    visible: './index.css'
  }
})
export class ThemeVariables {
  // == Rendering ==============================================================
  render() {
    return <Host/>
  }
}
