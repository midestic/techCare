import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./components/rootLayout/rootComponent/RootLayout";
import DetailsPage from "./components/detailsPage/DetailsPage";
import DataContextFunction from "./components/dataContext/DataContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="infopage" element={<DetailsPage />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <DataContextFunction>
        <RouterProvider router={router} />
      </DataContextFunction>
    </div>
  );
}

export default App;
