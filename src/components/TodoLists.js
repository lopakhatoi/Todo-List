import React from 'react';
import PropTypes from 'prop-types';

const TodoLists = ({ todos, setTodos, setEditTodo, showCompleted }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos
        .filter(todo => showCompleted || !todo.completed)
        .map((todo) => (
        <li className='list-item' key={todo.id}>
          <input
            type='text'
            value={todo.title}
            className={`list ${todo.completed ? 'complete' : ''}`}
            readOnly
          />
          <div>
            <button
              className='button-complete task-button'
              onClick={() => handleComplete(todo)}
            >
              <i className='fa fa-check-circle'></i>
            </button>
            <button
              className='button-edit task-button'
              onClick={() => handleEdit(todo)}
            >
              <i className='fa fa-edit'></i>
            </button>
            <button
              className='button-delete task-button'
              onClick={() => handleDelete(todo)}
            >
              <i className='fa fa-trash'></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

TodoLists.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditTodo: PropTypes.func.isRequired,
  showCompleted: PropTypes.bool.isRequired,
};

export default TodoLists;

