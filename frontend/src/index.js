import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
// import { PayPalScriptProvider} from "@paypal/react-paypal-js";
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PrivateRoute from "./components/PrivateRoute";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomeScreen/>}/>
      <Route path='/product/:id' element={<ProductScreen/>}/>
      <Route path='/cart' element={<CartScreen/>}/>
      <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='' element={<PrivateRoute />}>
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/order/:id' element={<OrderScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
        </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        {/*<PayPalScriptProvider deferLoading={true}>*/}
        {/*</PayPalScriptProvider>*/}
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
