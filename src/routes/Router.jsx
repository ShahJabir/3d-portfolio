import HomePage from "../pages/HomePage/HomePage";
import TransitionComponent from "../components/Transition";
import AboutPage from "../pages/AboutPage/AboutPage";
import DevWorkPage from "../pages/DevWorkPage/DevWorkPage";
import { Route, Routes } from "react-router";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SecurityWorkPage from "../pages/SecurityWorkPage/SecurityWorkPage";

const Router = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <TransitionComponent>
            <HomePage />
          </TransitionComponent>
        }
      />
      <Route
        path="about"
        element={
          <TransitionComponent>
            <AboutPage />
          </TransitionComponent>
        }
      />
      <Route
        path="dev-work"
        element={
          <TransitionComponent>
            <DevWorkPage />
          </TransitionComponent>
        }
      />
      <Route
        path="security-work"
        element={
          <TransitionComponent>
            <SecurityWorkPage />
          </TransitionComponent>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
