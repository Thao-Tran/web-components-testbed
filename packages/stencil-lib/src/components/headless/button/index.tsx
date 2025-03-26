import { Component, Element, Prop, h } from '@stencil/core';

export type Priority = 'primary' | 'secondary' | 'tertiary'

@Component({
  tag: 'headless-button',
  shadow: true,
})
export class HeadlessButton implements Partial<HTMLButtonElement> {
  // == Attributes =============================================================
  private _priority?: this['priority']
  private _disabled?: this['disabled']

  /**
   * Type of button action
   */
  @Prop({reflect: true})
  get priority (): Priority {
    return this._priority ?? this.properties?.priority
  }
  set priority (value: this['priority'] | undefined) {
    this._priority = value
  }

  /**
   * Indicates whether the control is disabled, meaning that it does not accept any clicks.
   */
  @Prop({reflect: true})
  get disabled (): HTMLButtonElement['disabled'] {
    return this._disabled ?? this.properties?.disabled
  }
  set disabled (value: this['disabled'] | undefined) {
    this._disabled = value
  }

  /**
   * Indicates whether the default slot should override the root element or just provide button content.
   */
  @Prop({reflect: true}) asChild: boolean


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

  // == Rendering ==============================================================
  render() {
    return this.asChild ? <slot/> :
      <button
        part="base"
        {...this.reactiveAttributes}
      >
        {
          this.properties?.text || <slot/>
        }
      </button>
  }
}
