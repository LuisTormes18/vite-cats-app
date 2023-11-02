import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { FavoritesGrid } from "../components/cats/favorite-grid/FavoritesGrid";
import { ImageGrid } from "../components/cats/image-grid/ImageGrid";

export const CatsPage = () => {
  const [key, setKey] = useState("image-grid");

  return (
    <div className="p-3">
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab eventKey="image-grid" title="Cats">
          <ImageGrid />
        </Tab>
        <Tab eventKey="Favorites" title="Favoritos">
          <FavoritesGrid />
        </Tab>
      </Tabs>
    </div>
  );
};
