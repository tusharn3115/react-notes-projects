function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.text;
    // domElement.setAttribute("href", reactElement.props.href);
    // domElement.setAttribute("target", reactElement.props.target);

    // container.appendChild(domElement);



    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.text;

    for (const prop in reactElement.props) {
      domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);

}

const reactElement = {
    type: 'a',
    props: {
        href: "http://google.com",
        target: "_blank",
    },
    text: "Click me to visit google"
}

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);