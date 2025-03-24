import { newSpecPage } from '@stencil/core/testing';
import { HeadlessButton } from './index';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [HeadlessButton],
      html: '<headless-button></headless-button>',
    });
    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [HeadlessButton],
      html: `<my-component first="Stencil" middle="'Don't call me a framework'" last="JS"></my-component>`,
    });
    expect(root).toEqualHtml(`
      <my-component first="Stencil" middle="'Don't call me a framework'" last="JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
