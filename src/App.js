import { Toaster } from 'react-hot-toast';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <TodoList />
      <Toaster 
        position='bottom-right'
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          }
        }}
      />
    </div>
  );
}

export default App;
