import makeElement from "../../utils/makeElement";

const button = function (title = "button") {
  const template = `<button class="btn">${title}</button>`;
  return makeElement(template);
};

export default button;
