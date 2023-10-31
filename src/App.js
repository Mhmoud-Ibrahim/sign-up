
import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import Signup2 from './components/Signup2';
import Signup3 from './components/Signup3';
import Signup4 from './components/Signup4';
import Finish from './components/Finish';
import { Toaster } from 'react-hot-toast';

function App() {

let routers = createHashRouter([
  {path:'',element:<Layout/> ,children:[
  {index: true ,element: <Signup/> },
  {path: 'Signup' ,element:<Signup/>},
  {path: 'Signup2' ,element:<Signup2/>},
  {path: 'Signup3' ,element:<Signup3/>},
  {path: 'Signup4' ,element:<Signup4/>},
  {path: 'Finish' ,element:<Finish/>},
 
  {path: '*' ,element:<NotFound/>},
]}
]);
return <>
 
 <Toaster/>
  <RouterProvider router={routers} >
  </RouterProvider>
  </>
  
  }
  export default App;
