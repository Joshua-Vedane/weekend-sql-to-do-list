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



//render todo to DOM
function renderTodos(todos){
  console.log('in renderTodos',todos);
}
