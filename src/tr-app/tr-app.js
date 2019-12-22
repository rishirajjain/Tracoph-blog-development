import {PolymerElement,html} from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';

import '@polymer/iron-image/iron-image.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-tooltip/paper-tooltip.js';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';

setRootPath(MyAppGlobals.rootPath);
setPassiveTouchGestures(true);

class TrApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      
        .cnt{
        background-color:#263238;
        height: 100vh; 
                
        }
        .cnt_2{
        height: 100vh; 
        background-color:#4f5b62;
        }
        
        .navli ul{
        display:flex; 
        list-style:none ; 
        float: right;
        }
        .navli li{
          padding:15px;
          
        }
        .navli a{
          color:white;
          text-decoration:none;
          transition:ease-in-out;
          padding:16px;
          background-color:#4f5b62;
          border-radius:100px;
          -webkit-tap-highlight-color: transparent;
        }
        .navli a:hover{
          box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2);
        }

         .alignright{
         margin-left: auto;
         background-color:white;
         color:black;
         font-family: 'Quicksand', sans-serif;
         text-transform: capitalize;
         } 

        

        .alignright:hover{
         background-color: #000a12;
         color:white;
        }
        
        .card{
        padding: 18px;  
        box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2);
        background-color:#000a12;
        height: 85vh ;
        font-size:18px;      
        }
        .foo{
        background-color:#263238;
        height:80vh;
        }
        
        
        .photo{
        border-radius: 100px;
          }
          
        .photo:hover{
        -webkit-box-shadow: 0px -2px 20px 3px rgba(163,158,163,1);
        -moz-box-shadow: 0px -2px 20px 3px rgba(163,158,163,1);
        box-shadow: 0px -2px 20px 3px rgba(163,158,163,1);
         } 
        
        .pos{
        padding-top:10px;
        text-align: center;
        }
        .icons {
        text-align: center;
        padding-top: 15px;
        }
        .icons a{
        padding:30px;
        }
        paper-icon-button.pink{
        width: 60px;
        height: 60px;
        background-color: white;
        border-radius: 100px;
        border:solid #ff4081;
        }
        paper-icon-button.pink:hover {
        background-color:#ff94c2;
        border-radius: 100px;
        }
        .down{
        position: fixed;
        top:80%;
        left:90%;
        z-index:1;
        }
        .typin h1 {
        text-align:center;
        font-weight:lighter;
        text-transform: uppercase;  
        padding:10px;  
        font-size:50px;
        font-family: 'Quicksand', sans-serif;  
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: .10em solid #ff4081; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: 5px; /* Adjust as needed */
        animation: 
        typing 3.5s steps(30, end),
        blink-caret .5s step-end infinite;
        }
              
        /* The typing effect */
        @keyframes typing {
        from { width: 0 }
        to { width: 85% }
        }
        /* The typewriter cursor effect */
        @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #ff4081 }
        }
        .typin h5{
          text-align:center;
          font-weight:lighter;
        }
        
        .dot {
        height: 5px;
        width: 5px;
        background-color:white;
        border-radius: 50%;
        display: inline-block;
        }
        .tooltip{
        --paper-tooltip-background: #263238;
        --paper-tooltip-text-color: white;       
        }
        
        .span{
        font-size: 15px;
        font-family: 'Open Sans', sans-serif;
        } 
        #email{
        font-size:18px;
        padding:10px 10px 10px 5px;
        display:block;
        width:auto;
        border:none;
        border-bottom:2px solid #757575;
        margin-bottom: 50px;
        font-family: 'Open Sans', sans-serif;
        }
        #email:focus{ outline:none; }
        #textbox{
        font-size:18px;
        padding:10px 10px 10px 5px;
        display:block;
        width:auto;
        height: 70px;
        border:none;
        border-bottom:2px solid #757575;
        margin-bottom: 60px;
        font-family: 'Open Sans', sans-serif;
        }
        
        #textbox:focus{ outline:none; }
        #btn{
        width:76px;
        height: 40px;
        font-size: 16px;
        background-color:#ff4081;
        border-radius: 2px;
        color: white;
        border: 1px solid transparent;
        }

       .buttons{
        text-align: center;
        font-family: 'Open Sans', sans-serif;
        }

        .footer{
        text-align:center;
        position: relative;
        margin-top: 20px;
        font-size:12px;
        }

        @media(max-width:760px){
          .icons a{
        padding:10px;
        }
        }

      @media only screen and (max-width: 600px){
        paper-icon-button.pink{
        width: 50px;
        height: 50px;
        }
        .icons a{
          padding:0px;
        }
        .navli li{
          padding:10px;
        }
        .down{
        left:80%;
        } 
        .typin h1 {
        font-size:40px;   
        }
        .card{
          font-size:14px;
        }
        }
      @media(max-width:320px){
        paper-icon-button.pink{
        width: 40px;
        height: 40px;
        }}
      </style>
      
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

<div class="cnt">

  <div class="card ">

 <div style="display: flex;margin: auto;"><paper-button class="alignright" id="id_10" on-tap="openLink"><span>Blog</span></paper-button>
</div>
        <div class="pos" >
        <a  href="[[rootPath]]"><iron-image src="/images/rishi.png" class="photo" alt="This is me!"></a> 
          </iron-image>
        </div>
        <div class="typin">
          <h1>[[prop1]]</h1>
          <h5>Engineer <span class="dot"></span> Developer <span class="dot"></span> Traveller </h5>
        </div>
    <div class="icons">
      <a on-tap="toggleDialog">
      <paper-icon-button src="/images/icons/email.svg" class="pink" id="id_7" alt="Loading..." ></paper-icon-button></a>
      <a href="https://www.github.com/rishirajjain" target="_blank"><paper-icon-button src="/images/icons/git.svg" alt="Loading..." class="pink" id="id_5"></paper-icon-button></a>
      <a href="https://www.linkedin.com/in/rishiraj-jain" target="_blank">   
      <paper-icon-button src="/images/icons/linkedin.svg" alt="Loading..." class="pink" id="id_6"></paper-icon-button></a>
      <a href="https://www.facebook.com/rishirajjain143" target="_blank" tabindex="-1"> 
      <paper-icon-button src="/images/icons/facebook.svg" alt="Loading..."  class="pink" id="id_1"></paper-icon-button></a>
      <a href="https://twitter.com/rishirajjain319" target="_blank"> 
      <paper-icon-button src="/images/icons/twitter.svg" alt="Loading..."  class="pink" id="id_2"></paper-icon-button></a>
      <a href="https://www.instagram.com/rish._/" target="_blank"> 
      <paper-icon-button src="/images/icons/instagram.svg" alt="Loading..." class="pink" id="id_4" ></paper-icon-button></a>
    </div>
  </div>
</div>
<a href="https://drive.google.com/open?id=1pf5hzBA0PVwwtc_W2TttedhRLxtVk-Ym" target="_blank"><paper-fab src="/images/icons/dwn.svg" class="down" id="id_9" ></paper-fab></a>
<div class="cnt_2">
       
        
  <div class="card foo">
      <nav class="navli">
      <div>
         <iron-selector selected="[[page]]" attr-for-selected="name" >
         <ul>
         <li><a name="about" href="[[rootPath]]about">About</a></li>
         <li><a name="tracoph" href="[[rootPath]]tracoph">Tracoph</a></li>
         <li><a name="quotes" href="[[rootPath]]quotes">Quotes</a></li>
         </ul>
         </iron-selector>
      </div>
      </nav> 
  
      <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <tr-about name="about"></tr-about>
            <tr-tracoph name="tracoph"></tr-tracoph>
            <tr-quotes name="quotes"></tr-quotes>
            <tr-v404 name="v404"></tr-v404>
      </iron-pages>
      
  </div>
  
    <div class="footer">Made with &hearts; by Rishi Raj Jain<br>
      Note: All resources used for making this website are free and open source.
    </div>
</div>

<!--Tooltips -->
<paper-tooltip for="id_1" tabindex="0" animation-delay="0" position="top" class="tooltip"><span class="span">Facebook</span></paper-tooltip>
<paper-tooltip for="id_2" tabindex="0" animation-delay="0" position="top" class="tooltip"><span class="span">Twitter</span></paper-tooltip>
<paper-tooltip for="id_4" tabindex="0" animation-delay="0" position="top" class="tooltip"><span class="span">Instagram</span></paper-tooltip>
<paper-tooltip for="id_5" tabindex="0" animation-delay="0" position="top" class="tooltip"><span class="span">Github</span></paper-tooltip>
<paper-tooltip for="id_6" tabindex="0" animation-delay="0" position="top" class="tooltip"><span class="span">LinkedIn</span></paper-tooltip>
<paper-tooltip for="id_7" tabindex="0" animation-delay="0" position="top" class="tooltip"><span class="span">Email</span></paper-tooltip>
<paper-tooltip for="id_9" tabindex="0" animation-delay="0" position="top" offset="0" class="tooltip"><span class="span">Download Resume</span></paper-tooltip>
<paper-tooltip for="id_10" tabindex="0" animation-delay="0" position="bottom" class="tooltip"><span class="span">Interesting stuff to read, click me!</span></paper-tooltip>

<!--Modal Form Email -->
<paper-dialog id="dialog" modal>
 <form method="POST" action="https://formspree.io/rishirajjain98@gmail.com">
  <input  placeholder="Your Email" type="email" name="email" id="email" required>
  <textarea placeholder="Your Message" name="message" id="textbox" required></textarea>
 
  <div class="buttons">
    
    <paper-button dialog-confirm style="background-color: #263238; color: white;">close</paper-button>
    <button type="submit" id="btn" style="color: white;">Send</button>
    
  </div>
</form>
</paper-dialog>
    
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'Hi, I\'m Rishi'
      },
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

static get observers() {
  return [
    '_routePageChanged(routeData.page)'
  ];
}

_routePageChanged(page) {
   // Show the corresponding page according to the route.
   //
   // If no page was found in the route data, page will be an empty string.
   // Show '/' in that case. And if the page doesn't exist, show 'view404'.
  if (!page) {
    this.page = 'about';
  } else if (['about','tracoph', 'quotes'].indexOf(page) !== -1) {
    this.page = page;
  } else {
    this.page = 'v404';
  }

  
}

_pageChanged(page) {
  // Import the page component on demand.
  //
  // Note: `polymer build` doesn't like string concatenation in the import
  // statement, so break it up.
  switch (page) {
    case 'about':
      import('./tr-about.js');
      break;
    case 'tracoph':
      import('./tr-tracoph.js');
      break;
    case 'quotes':
      import('./tr-quotes.js');
      break; 
    case 'v404':
      import('./tr-v404.js');
      break;
  }
 }
 toggleDialog() {
  this.$.dialog.toggle();
};

openLink(){
   location = "/blog.html"
}
}

window.customElements.define('tr-app', TrApp);