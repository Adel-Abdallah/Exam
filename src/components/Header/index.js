import "./index.css";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className='header'>
      <Link to='/' className='logo'>
        APPVENTURE
      </Link>
    </div>
  );
}

export default App;
