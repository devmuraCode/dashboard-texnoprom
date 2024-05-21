import { Suspense } from "react";
import * as Layouts from "@/layouts";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "./routes/routes";

import Login from "@/pages/Login";

import { useAuth } from "./modules/auth/hooks";

import Spinner from "./components/Spinner";

function App() {
  const { isAuthenticated, isFetched, token } = useAuth();

  if (!isFetched) {
    return <Spinner full />;
  }

  if (!isAuthenticated && !token) {
    return (
      <Layouts.Auth>
        <Suspense fallback="">
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layouts.Auth>
    );
  }

  return (
    <Layouts.Main>
      <Suspense fallback="">
        <Routes>
          {routes.map(({ path, Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layouts.Main>
  );
}

export default App;
