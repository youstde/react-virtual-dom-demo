import { createElement, render } from './element';
import diff from './diff';

const oldTree = createElement('ul', {class: 'list'}, [
    createElement('li', {class: 'item', style: 'color: pink'}, ['a']),
    createElement('li', {class: 'item'}, ['b']),
    createElement('li', {class: 'item'}, ['c'])
]);

const newTree = createElement('ul', {class: 'list'}, [
    createElement('li', {class: 'item', style: 'color: pink'}, ['a']),
    createElement('li', {class: 'item'}, ['b']),
    createElement('li', {class: 'item'}, ['c'])
]);

// render(virtualDom, document.getElementById('root'));
const patches = diff(oldTree, newTree);