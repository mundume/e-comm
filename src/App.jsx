import { Suspense } from "react";
import Home from "./pages/Home.jsx";

const App = () => {
  return( 
    <Suspense fallback={ <div>loading</div>}>
      <Home />
    </Suspense>
  
  
  
  
  )};

export default App;