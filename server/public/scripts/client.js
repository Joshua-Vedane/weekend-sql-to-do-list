$(document).ready(handleReady);

function handleReady(){
  console.log('jQuery ');
  refreshTodos();
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

//POST NEW TODO TO SERVER

//DELETE TODO FROM SERVER

//PUT(CHANGE) TODO COMPLETION

//render todo to DOM
function renderTodos(todos){
  // console.log('in renderTodos',todos);
  $('#todoList').empty();
  for (let todo of todos) {
    // if need to run condo on complete, use variable for tr and .append for each td
    $('#todoList').append(`
    <tr data-id =${todo.id}>
      <td><button class="completeBtn">DONE</button></td>
      <td>${todo.name}</td>
      <td><button class="deleteBtn">DEL</button></td>
    `)
  }

}
