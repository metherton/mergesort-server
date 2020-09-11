export class MyParagraph extends HTMLElement {
    constructor() {
      super();



//      const template = document.getElementById('my-paragraph');
//      const templateContent = template.content;
//
//      this.attachShadow({mode: 'open'}).appendChild(
//        templateContent.cloneNode(true)
//      );
    }
        connectedCallback() {
            this.innerHTML = `<style> p {color: red;}</style><p>My web component</p>`;
        }
}