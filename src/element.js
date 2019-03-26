
class Element {
    constructor(type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children;
    }
}

export const createElement = (type, props, children) => {
    return new Element(type, props, children);
}

// 将虚拟dom转化为真实dom
export const renderDom = (virtualDom) => {
    return document.createElement(virtualDom.type);
}