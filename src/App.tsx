import { Suspense } from "react";
import * as Layouts from "@/layouts";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "./routes/routes";

function App() {
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
