import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";

import { Routes, Route } from "react-router-dom";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";

import Navigation from "./routes/navigation/navigation.component";
import HomePage from "./routes/homepage/homepage.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { setCurrentUser } from "./store/user/user.action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        const userSnapshot = await createUserDocumentFromAuth(user);

        dispatch(setCurrentUser({id: userSnapshot.id,...userSnapshot.data()}));
      } else {
        dispatch(setCurrentUser(user));
      }
    });

    return () => unsubscribe();
  }, []);

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
