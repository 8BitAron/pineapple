import { AuthProvider } from "./auth";
import { AppRouter } from "./router";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
