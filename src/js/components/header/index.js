import makeElement from "../../utils/makeElement";

const header = function (title = "uiHeader") {
  const template = `<h1 class="temp">${title}</h1>`;

  //element
  //converting to element
  const element = makeElement(template);

  return element;
};

export default header;
