import './App.css';
import Counter from './components/Counter';
import Parent from './components/Parent';
import Todo from './components/Todo';
import Login from './components/login';
function App() {
  return (
    <div className="App">
      <div className='box'>
        <h2>Question 1 & Question 2</h2>
        A. Create a counter component with a button.<br />
        B. Create a counter with increment and decrement buttons.

        <Counter />
      </div>
      <div className='box'>
        <h2>Question 3</h2>
        <Parent />
      </div>
      <div className='box'>
        <h2>Question 4</h2>
        <Todo />
      </div>
      <div className='box'>
        <h2>Question 5</h2>
        <Login />
      </div>

    </div>
  );
}

export default App;
