import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import SignUpPage from './Components/SignUpPage';
import SignInPage from './Components/SignInPage';
import AboutPage from './Components/About';
import Body from './Components/Body';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignInPage />} />
        <Route path="/home" element={<Home />} >
          <Route index element={<Body />} />
          <Route path="about" element={<AboutPage />} />
        </Route>

        {/* Define nested routes within the AboutPage */}
        {/* <Route path="feature1" element={<Feature1Page />} />
      <Route path="feature2" element={<Feature2Page />} /> */}
        {/* Add more nested routes as needed */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        {/* </Route> */}
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter >
  )
    ;
}

export default App;
