export class MyParagraph extends HTMLElement {
    constructor() {
      super();

        this.innerHTML = `<style> p {color: red;}</style><p>My web component</p>`;

//      const template = document.getElementById('my-paragraph');
//      const templateContent = template.content;
//
//      this.attachShadow({mode: 'open'}).appendChild(
//        templateContent.cloneNode(true)
//      );
    }
}