import Login from './components/Login';
import Header from './components/Header';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Login />
      </AuthProvider>
    </div>
  );
}

export default App;
