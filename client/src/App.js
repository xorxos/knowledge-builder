import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error, Register, ProtectedRoute } from "./pages";
import {AllArticles, CreateArticle, Profile, SharedLayout} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AllArticles />} />
          <Route path='add-article' element={<CreateArticle />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path="/" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
