import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error, Landing, Register, ProtectedRoute } from "./pages";
import {AllArticles, CreateArticle, Profile, SharedLayout, Stats} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path='profile' element={<Profile />} />
          <Route index element={<AllArticles />} />
          <Route path='create-article' element={<CreateArticle />} />
          <Route path='stats' element={<Stats />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
