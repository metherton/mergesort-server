export { MyParagraph } from './MyParagraph.js';

//class MyParagraph extends HTMLElement {
//    constructor() {
//      super();
//
//      const template = document.getElementById('my-paragraph');
//      const templateContent = template.content;
//
//      this.attachShadow({mode: 'open'}).appendChild(
//        templateContent.cloneNode(true)
//      );
//    }
//}


//module.exports = function mergesort(items) {
//
//    var merge = function    (left, right){
//        var result = [];
//
//        while (left.length > 0 && right.length > 0){
//            if (left[0] < right[0]){
//                result.push(left.shift());
//            } else {
//                result.push(right.shift());
//            }
//        }
//
//        return result.concat(left).concat(right);
//    }
//
//
//    if (items.length == 1) {
//        return items;
//    }
//
//    var middle = Math.floor(items.length / 2),
//        left    = items.slice(0, middle),
//        right   = items.slice(middle);
//
//    return merge(mergesort(left), mergesort(right));
//
//};
