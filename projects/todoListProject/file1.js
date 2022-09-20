
const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");


todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();      // this method prevents the webpage from getting refresh.
    
    const newTodoText = todoInput.value;   // this property gives the value of the input[text] element.
    const newLi = document.createElement("li");
    const newLiInnerHtml =  `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value = "";
});


/// event delegation
todoList.addEventListener("click", (e)=>{
    // console.log(e.target);
    // check if user clicked on done button
    if(e.target.classList.contains('remove')){
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }

    if(e.target.classList.contains('done')){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through 2px black";
    }
});



// = +
////////////////// form validation ////////////


const form = document.querySelector(".signup-form");

const userName = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const aboutYourself = document.getElementById("about");


form.addEventListener("submit", (e)=> {
    e.preventDefault();

    console.log(userName.value);
    console.log(password.value);
    console.log(confirmPassword.value);
    console.log(phone.value);
    console.log(email.value);
    console.log(aboutYourself.value);

    console.log(form.confirmPassword);
    console.dir(form);
})
