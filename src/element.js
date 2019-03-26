import { checkType } from './utils/utils';

class Element {
    constructor(type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children;
    }
}

const createElement = (type, props, children) => {
    return new Element(type, props, children);
}

// 设置属性
const setAttr = (node, key, value) => {
    switch(key) {
        case 'value':
            if(node.tagName.toLocaleUpperCase() === 'INPUT' || node.tagName.toLocaleUpperCase() === 'TEXTAREA') {
                node.value = value;
            } else {
                node.setAttribute(key, value);
            }
            break;
        case 'style':
            node.style.cssText = value;
            break;
        default:
            node.setAttribute(key, value);
        break;
    }
}

// 将虚拟dom转化为真实dom
const _renderDom = (virtualDom) => {
    const { type, children, props } = virtualDom;
    const el = document.createElement(type);
    Object.keys(props).forEach((key) => {
        setAttr(el ,key, props[key]);
    });
    if(children && checkType(children, 'Array')) {
        children.forEach(child => {
            const _child = (child instanceof Element)? _renderDom(child): document.createTextNode(child);
            el.appendChild(_child);
        });
    }
    return el;
    
}

// 渲染真实dom
const render = (virtualDom, target) => {
    const el = _renderDom(virtualDom);
    console.log(virtualDom)
    target.appendChild(el);
}

export {
    render,
    createElement
}