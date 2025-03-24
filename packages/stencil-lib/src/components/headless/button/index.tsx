import { Component, Element, Prop, State, h } from '@stencil/core';

export type Priority = 'primary' | 'secondary' | 'tertiary'

@Component({
  tag: 'headless-button',
  shadow: true,
})
export class HeadlessButton implements Partial<HTMLButtonElement> {
  // == Attributes =============================================================
  /**
   * Type of button action
   */
  @Prop({reflect: true}) priority?: Priority

  /**
   * Indicates whether the control is disabled, meaning that it does not accept any clicks.
   */
  @Prop({reflect: true}) disabled?: HTMLButtonElement['disabled']

  // == Properties =============================================================
  /**
   * Spreadable object for button element properties
   */
  @Prop() properties?: Partial<HeadlessButton> & {text?: string} = {}

  // == Element ================================================================
  @Element() el: HTMLElement

  // == Read-only attributes ===================================================
  @Prop({reflect: true})
  get role (): string {
    return 'button'
  }

  /**
  * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
  */
  @Prop({reflect: true})
  get ariaDisabled (): string | undefined {
    return this.disabled ? 'true' : undefined
  }

  @Prop()
  get reactiveAttributes (): Record<string, any> {
    const attributes = {...this.properties}
    for (const {name, value} of this.el.attributes) {
      attributes[name] = value ? value : 'true'
    }

    return attributes
  }

  @State()
  get basePart (): string {
    const parts = ['base']
    const {properties, priority = properties.priority, disabled = properties.disabled} = this

    if (priority) {
      parts.push(priority)
    }

    if (disabled) {
      parts.push('disabled')
    } else {
      parts.push('enabled')
    }

    return parts.join(' ')
  }

  // == Rendering ==============================================================
  render() {
    return <slot name="root">
      <button
        part={this.basePart}
        {...this.reactiveAttributes}
      >
        {
          this.properties?.text || <slot name="content"/>
        }
      </button>
    </slot>
  }
}
