import {LitElement, html} from '@polymer/lit-element';
import '@vaadin/vaadin-select/vaadin-select.js';

class ItemView extends LitElement {

  static get properties(){
    return {
      selectArr: {type: Array},
      selectedValue: {type: String}
    }
  }

  constructor(){
    super();

    this.selectArr = [
      { selectId: 1, selectValue: "Значение №1" },
      { selectId: 2, selectValue: "Значение №2" },
      { selectId: 3, selectValue: "Значение №3" },
      { selectId: 4, selectValue: "Значение №4" },
      { selectId: 5, selectValue: "Значение №5" },
    ]

    this.selectedValue = 'Значение №1';

  }


  render(){
    return html`
      <style>
        .item-title {
          color: red;
        }

        #vaadin-select-text-field-input-0 {
          background: white;
        }
      </style>

      <div>
        <h3 class="item-title">Выбрать из списка select</h3>
        <vaadin-select placeholder="Значение №n" class="item-select"
          @change=${ this.selectValue.bind(this)}
        >
          <template>
            <vaadin-list-box>
              ${
                this.selectArr.map( (item) => html`
                  <vaadin-item value="${ item.selectValue }">${ item.selectValue }</vaadin-item>
                `)
              }
            </vaadin-list-box>
          </template>
        </vaadin-select>
        <div>Вы выбрали: <span>${this.selectedValue}</span></div>
      </div>
      <hr>
    `;
  }

  selectValue(then){
    console.log(then);
    //this.selectedValue = then.options[then.selectedIndex].value;
    console.log(then.options[then.selectedIndex].value)
  }


}

customElements.define('item-view',ItemView);

