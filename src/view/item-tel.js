import {LitElement, html} from '@polymer/lit-element';
import $ from "jquery";
import "intl-tel-input";



class ItemTel extends LitElement {

  static get properties(){
    return {
      selectedInput: {type: String}
    }
  }

  constructor(){
    super();

    this.selectedInput = '';

  }


  render(){
    return html`

      <div>
        <h3 class="item-title">Ввод телефона</h3>
        <form action="">
          <input value="" @change=${ this.getNumer} id="phone" type="tel">
        </form>

        <div>Вы ввели номер: <span>${this.selectedInput}</span></div>
      </div>
      <hr>
    `;
  }

  firstUpdated(changedProperties) {
    let input = this.shadowRoot.querySelector('#phone');
    //console.log($('#phone')[0]);

    window.intlTelInput(input, {
        onlyCountries: ["ru", "by"],
        utilsScript: "../../build/js/utils.js" // just for formatting/placeholders etc
      });
    }

  getNumer(e){
    this.selectedInput = e.target.value;
  }


}

customElements.define('item-tel',ItemTel);

