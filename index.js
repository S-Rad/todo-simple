let addtodotextfield;
let addtodobutton;
let todowrapper;
const todos = [];

window.onload = () => {
  addtodotextfield = document.querySelector("#addtodofield");
  addtodobutton = document.querySelector("#addtodobutton");
  todowrapper = document.querySelector("#todowrapper");
  addtodobutton.onclick = addtodolistener;
};

const addtodolistener = () => {
  addtodo(addtodotextfield.value);
  rendertodo(todos[0]);
  debugger;
};

const addtodo = todotext => {
  todos.push({
    id: uuidv4(),
    text: todotext,
    active: true
  });
};

const rendertodo = ({ id, text, active }) => {
  let tododiv = document.createElement("div");
  tododiv.className = "activetodo";
  let todotextnode = document.createTextNode(text);
  tododiv.appendChild(todotextnode);
  todowrapper.appendChild(tododiv);
};

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

/*
 <div class="todo">
        <input type="checkbox" name="done" />This is a ToDo
        <input type="image" class="deletebutton" alt="Login" src="bin.png" />
      </div>

      <div class="donetodo">
        <input type="checkbox" name="done" checked />This is a done ToDo
        <input type="image" class="deletebutton" alt="Loeschen" src="bin.png" />
      </div>*/
