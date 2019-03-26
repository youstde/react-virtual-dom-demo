import { createElement, renderDom } from './element';

const virtualDom = createElement('ul', {class: 'list'}, [
    createElement('li', {class: 'item'}, ['a']),
    createElement('li', {class: 'item'}, ['b']),
    createElement('li', {class: 'item'}, ['c'])
]);

const el = renderDom(virtualDom);
console.log(el)