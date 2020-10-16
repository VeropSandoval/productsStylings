import React from "react";
import Header from "./components/Header";
import ProductStylingPage from "./components/ProductStylingPage";

function App() {
  const user = {
    name: "Jose López López",
  };

  const defaultProductId = "04369248800-V2020";

  return (
    <div className="App">
      <Header user={user}></Header>
      <ProductStylingPage defaultProductId={defaultProductId} />
    </div>
  );
}

export default App;
