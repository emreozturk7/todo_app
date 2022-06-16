import Header from './components/Header';
import { AuthProvider } from './contexts/AuthContext';
import { TodoProvider } from './contexts/TodoContext';
import Routers from './router/Routers';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <TodoProvider>
          <Header />
          <Routers />
        </TodoProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
