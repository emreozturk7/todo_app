import Header from './components/Header';
import { AuthProvider } from './contexts/AuthContext';
import Routers from './router/Routers';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routers />
      </AuthProvider>
    </div>
  );
}

export default App;
