import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfileDetails from "./component/ProfileDetails";
import AdminDashboard from "./pages/AdminDashboard";
import ProfileList from "./component/ProfileList";
import { Provider } from "react-redux";
import appStore from "./utils/store";

const App = () => {

  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>, 
      children: [
        {
          path: "/admin",
          element: <AdminDashboard/>
        },
        {
          path: "/users",
          element: <ProfileList/>
        },
        {
          path: "/profile/:id",
          element: <ProfileDetails/>
        }
      ],
    },
    
  ]);

  return (
    <div className="App">
      <Provider store={appStore}>
          <RouterProvider router={appRoute} />
      </Provider>
        
    </div>
  );
}

export default App;
