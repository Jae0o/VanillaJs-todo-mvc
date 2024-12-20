import { ALERT_MESSAGE, MIN_CHAR, TODO_FORM_PLACE_HOLDER } from "../../Constants.js";

export default function TodoForm({ target, state, onSubmit }) {
  const formElement = document.createElement("form");
  formElement.setAttribute("class", "header__form");
  target.appendChild(formElement);

  const inputElement = document.createElement("input");
  inputElement.setAttribute("class", "header__input");
  inputElement.setAttribute("placeholder", TODO_FORM_PLACE_HOLDER);
  formElement.appendChild(inputElement);

  this.state = state;

  this.setState = (newState) => {
    this.state = newState;
  };

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const { isEditMode } = this.state;
    if (isEditMode) {
      alert(ALERT_MESSAGE.EDIT);
      return;
    }

    const newTodo = inputElement.value.trim();

    if (newTodo.length < MIN_CHAR) {
      alert(ALERT_MESSAGE.INPUT);
      return;
    }

    onSubmit(newTodo);
    target.value = "";
  });
}
