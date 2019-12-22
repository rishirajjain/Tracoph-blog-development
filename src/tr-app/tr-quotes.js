import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/app-layout/app-grid/app-grid-style.js';

class MyView3 extends PolymerElement {
  static get template() {
    return html`
      <style include="app-grid-style">
      :host {
      --app-grid-columns:3 ;
      --app-grid-item-height:50%;
      --app-grid-gutter:10px;
        }
        h1,h4{
        font-weight:lighter;
        color:#ff4081;
        font-family: 'Quicksand', sans-serif; 
        }
        .crd{
        background-color:#4f5b62;
        width:250px;
        height:150px;
        padding:5px;        
        }
        .crd:hover{
        -webkit-box-shadow: -1px 2px 15px 3px rgba(255,64,129,1);
        -moz-box-shadow: -1px 2px 15px 3px rgba(255,64,129,1);
        box-shadow: -1px 2px 15px 3px rgba(255,64,129,1);
        }
        .quote{
        text-align:center;
        position: relative;
        
        }
        .quote p{
          font-size: 16px;
        }
        .app-grid{
          text-align:center;
        }
        .cred{
        font-size: 12px;
        text-align: justify;
        width: 100px;
        height: 30px;
        position: relative;
        left: 60%;
        bottom:0;
        color:#ff4081;
        }
       
        @media (max-width:780px) {
        .crd{
          width:220px;
        }
      }     
     
      @media (max-width: 640px) {
        :host {
          --app-grid-columns: 2;
        }
        .crd{
          width:240px;
          height:100px ;
        }
        .cred{
          font-size:12px;
        }
        .quote p{
          font-size:12px;
        }
      }
      @media(max-width:500px){
      
        .crd{
          width:160px;
          height:100px ;
        
      }
      .cred{
        width:80px;
        left:40%;
        font-size:10px;
        }
        .quote p{
          font-size:10px;
        }
    }
    @media(max-width:370px){
      .crd{
          width:140px;
          height:80px ;
        
      }
      .cred{
        width:60px;
        left:40%;
        font-size:9px;
        }
        .quote p{
          font-size:9px;
        }
        }
       
      </style>
      <iron-ajax 
          auto
          url="/data/quotes.json"
          handle-as="json"
          last-response="{{quotes}}">
      </iron-ajax>
      <div>
        <h1>Quotes</h1>
        <h4>Thoughts that inspire</h4>
     </div>
        
     <div class="app-grid">
  
        <template is="dom-repeat"  items="[[quotes]]">
        <div>     
           <paper-card class="crd">
             <div class="quote">
              <p>[[item.quote]]</p>
             </div>
             <div class="cred">--[[item.by]]</div>
           </paper-card>   
            </div>
        </template>
  
     </div>
     
    `;
  }
}

window.customElements.define('tr-quotes', MyView3);