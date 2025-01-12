import { Header,Footer } from "./component";
import {AllRoutes} from "./routes/AllRoutes"


function App() {
  return (
    <div className="dark:bg-darkbg">
    <Header />
    
    <AllRoutes />
    <Footer />
   </div>
      
  );
}

export default App;
