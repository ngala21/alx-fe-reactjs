import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TodoList from './TodoList';

test('calls onTodoAdded when a new todo is added', async () => {
  const onTodoAdded = jest.fn();  // Create a mock function
  
  render(<TodoList onTodoAdded={onTodoAdded} />);  // Pass the mock function as a prop
  
  // Simulate user typing a new todo
  fireEvent.change(screen.getByPlaceholderText(/add a new todo/i), {
    target: { value: 'Write tests' },
  });

  // Simulate form submission (clicking 'Add Todo' button)
  fireEvent.click(screen.getByText(/add todo/i));

  // Verify the new todo is added in the DOM
  await waitFor(() => {
    expect(screen.getByText(/write tests/i)).toBeInTheDocument();
  });

  // Verify the mock function was called once with the correct argument
  expect(onTodoAdded).toHaveBeenCalledTimes(1);
  expect(onTodoAdded).toHaveBeenCalledWith('Write tests');
});



