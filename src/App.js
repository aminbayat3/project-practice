import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import HomePage from "./routes/homepage/homepage.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />}></Route>
          <Route path="shop/*" element={<Shop />}></Route>
          <Route path="auth" element={<Authentication />}></Route>
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
