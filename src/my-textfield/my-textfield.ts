import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('my-textfield')
export class MyTextfield extends LitElement {
  @property()
  placeholder: string = ''

  @property()
  errorMessage: string = ''

  render() {
    return html`
      <input placeholder=${this.placeholder} class=${this.errorMessage ? 'error' : ''}>
      ${this.errorMessage ?
        html`<span class="error-message">${this.errorMessage}</span>`
      : null}
    `
  }

  static styles = css`
    input {
      appearance: none;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }
    .error {
      border-color: #d00;
    }
    .error-message {
      color: #d00;
    }
  `
}
