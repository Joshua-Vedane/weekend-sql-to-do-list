$(document).ready(handleReady);

function handleReady(){
  console.log('jQuery ');
  addClickListeners();
  refreshTodos();
}

//CLICK LISTENERS
function addClickListeners(){
  // $('.btnSubmit').on('click', handleSubmit);
  $('.btnSubmit').on('click',function(event){
    event.preventDefault();
    handleSubmit();
  })
  $('#todoList').on('click', '.deleteBtn', handleDelete);
  // put listener
  $('#todoList').on('click', '#completeStatus', completeStatus);
}

// get todos from server
function refreshTodos() {
  $.ajax({
    type: 'GET',
    url: '/todos'
  }).then(function(response){
    console.log('in refreshTodos',response);
    //send data to render function
    renderTodos(response);
  }).catch(function(error){
    console.log('error in GET', error);
  });
}

//submit click, package data for POST
function handleSubmit(){
  // console.log('clicked submit');
  let todo = {};
  todo.name = $('#nameIn').val();
  addTodo(todo);
}

//POST NEW TODO TO SERVER
function addTodo(todoToAdd){
  
  // console.log(todoToAdd);
  $.ajax({
    type: 'POST',
    url: '/todos',
    data: todoToAdd,
  }).then(function(response){
    console.log('response from server',response);
    //update DOM
    refreshTodos();
  }).catch(function(error){
    console.log('ERROR in POST', error);
    alert('Unable to add ToDo at this time. Please try again later');
  });
};

//DELETE TODO FROM SERVER
function handleDelete(){
  // console.log('clicked delete');
  const id = $(this).closest('tr').data('id');
  // console.log(id);
  $.ajax({
    type: 'DELETE',
    url: `/todos/${id}`,
  }).then(function(response){
    console.log(response);
    refreshTodos();
  }).catch(function(error){
    alert(`error in delete`, error);
  });
};

//PUT(CHANGE) TODO COMPLETION
function completeStatus(){
  const id = $(this).closest('tr').data('id');
  const dataToSend = {
    // gets boolean value of completed status. 
    status: $(this).parent().data('complete')
  }
  console.log('change btn clicked id : ', id);
  console.log(`change btn clicked status complete : ${dataToSend.status}`);
  $.ajax({
    type: 'PUT',
    url: `/todos/${id}`,
    data: dataToSend,
  }).then(function(response){
    console.log('updated');
    refreshTodos();
  }).catch(function(error){
    alert('error in updating song', error);
  });
  //toggle display class on click. 
  $(this).closest('tr').addClass("markComplete");
};


//render todo to DOM
function renderTodos(todos){
  // console.log('in renderTodos',todos);
  $('#todoList').empty();
  for (let todo of todos) {
    // if need to run condo on complete, use variable for tr and .append for each td
      // store data-complete to keep logic in JS and off DB
    let $tr = $(`<tr data-id=${todo.id}></td>`)

    //keep checked if true 
    if(todo.complete === true){
      //for toggle class
      $tr = $(`<tr class="markComplete" data-id=${todo.id}></td>`)
      $tr.append(`<td class="text-center" data-complete=${todo.complete}><input type="checkbox" name="completeStatus" id="completeStatus" checked ></td>`);
    }else {
      $tr.append(`<td class="text-center" data-complete=${todo.complete}><input type="checkbox" name="completeStatus" id="completeStatus"></td>`);
    };
    $tr.append(`<td class="text-start">${todo.name}</td>`);
    $tr.append(`<td class="text-center"><button class="btn btn-dark deleteBtn">DELETE</button></td>`);
    $('#todoList').append($tr);
  }
}
