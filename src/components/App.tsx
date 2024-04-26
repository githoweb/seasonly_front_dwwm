import RequireAuth from './RequireAuth';
import { Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import Home from './pages/Home';
import FruitLegume from './pages/FruitLegume';
import FruitsLegumes from './pages/FruitsLegumes';
import Recipes from './pages/Recipes';
import Favorites from './pages/Favorites';
import Recipe from './pages/Recipe';
import Contact from './pages/Contact';
import Page404 from './pages/Page404';
import MentionsLegales from './pages/MentionsLegales';
import SommesNous from './pages/SommesNous';
import Login from './pages/Login';
import Register from './pages/Register';
import Resetmdp from './pages/Resetmdp';
import Profil from './pages/Profil';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes (non-authenticated AND members) */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/sommes-nous" element={<SommesNous />} />
        <Route path="/fruits-legumes" element={<FruitsLegumes />} />
        <Route path="/fruits-legumes/:slug" element={<FruitLegume />} />
        <Route path="/recettes" element={<Recipes />} />
        <Route path="/recettes/:slug" element={<Recipe />} />
        <Route path="/resetmdp" element={<Resetmdp />} />

        {/* protected routes : members only */}
        <Route element={<RequireAuth />}>
          <Route path="/profil/:id" element={<Profil />} />
          <Route path="/profil/favoris" element={<Favorites />} />
        </Route>

        {/* routes for non-authenticated only */}
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<Register />} />

        {/* routes for public AND members */}
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
