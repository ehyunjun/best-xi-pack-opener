import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import CardInventoryPage from './pages/CardInventoryPage.jsx';
import HomePage from './pages/HomePage.jsx';
import PackInventoryPage from './pages/PackInventoryPage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import SquadBuilderPage from './pages/SquadBuilderPage.jsx';
import SquadDetailPage from './pages/SquadDetailPage.jsx';
import SquadGalleryPage from './pages/SquadGalleryPage.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/packs" element={<PackInventoryPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cards" element={<CardInventoryPage />} />
        <Route path="/squad-builder" element={<SquadBuilderPage />} />
        <Route path="/gallery" element={<SquadGalleryPage />} />
        <Route path="/gallery/:squadId" element={<SquadDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
