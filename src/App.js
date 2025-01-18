import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {

  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/> 
    },
    {
      path: "/admin",
      element: <AdminDashboard/>
    }
  ]);

  return (
    <div className="App">
      <h1 className='text-orange-300'>This is Profile Viewer</h1>
    </div>
  );
}

export default App;
