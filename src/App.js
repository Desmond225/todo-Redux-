import AddTodo from './containers/addtodo';
import Footer from './components/footer';
import VisibleTodoList from './containers/visibletodolist';
import React from 'react';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App