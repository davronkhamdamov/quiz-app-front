import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./pages/layout/RootLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ProfileInformation from "./components/Profile_information/ProfileInformation";
import Quizes from "./pages/Quizes/Quizes";
import ProfileLayout from "./pages/layout/Profile/ProfileLayout";
import Quizzes from "./components/Quizzes/Quizzes";
import Results from "./components/Results/Results";

const rout = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="quizes" element={<Quizes />} />
      <Route path="profile" element={<ProfileLayout />}>
        <Route path="information" element={<ProfileInformation />} />
        <Route path="quizzes" element={<Quizzes />} />
        <Route path="results" element={<Results />} />
      </Route>
    </Route>
  )
);
export default rout;
