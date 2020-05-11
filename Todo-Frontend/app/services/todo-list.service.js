todoApp.factory('todoListService', function () {

  const API_URL = 'http://localhost:8000';
  const apiEndpoint = `${API_URL}/api/todos`;
  getTodos: async () => {
    try {
      const response = await fetch(`${apiEndpoint}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        },
      });

      const isGetTodoSuccesfull = await response.json();
      console.log(isGetTodoSuccesfull);

      return isGetTodoSuccesfull;
    } catch (error) {
      console.error(error);
    }
  }
  createTodo: async (todo) => {
    try {
      const response = await fetch(`${apiEndpoint}`, {
        method: 'POST',
        body: JSON.stringify({ todo }),
        headers: {
          'Content-type': 'application/json',
        },
      });

      const isCreateTodoOk = await response.json();
      console.log(isCreateTodoOk);
      return isCreateTodoOk;

    } catch (error) {
      console.error(error);
    }
  }
  editTodo: async (id, todo) => {
    try {
      const response = await fetch(`${apiEndpoint}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ todo }),
        headers: {
          'Content-type': 'application/json',
        },
      });

      const isEditTodoOk = await response.json();

      return isEditTodoOk;

    } catch (error) {
      console.error(error);
    }
  }
  deleteTodo: async (id) => {
    try {
      const response = await fetch(`${apiEndpoint}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      });

      const isDeleteTodook = await response.json();

      console.log(isDeleteTodoOk);

      return isDeleteTodook;

    } catch (error) {
      console.error(error);
    }
  }

  test: (msg = 'Holaaaaaa') => console.log(msg);
});

