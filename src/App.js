import './App.css';
import { Route } from 'react-router-dom';
import HomepageP from './pages/Patient-Sign/Patientsign';
import Chatpage from './pages/Chatpage';
import Frontpage from './pages/Front/Front'
import HomepageD from './pages/Doctor-Sign/Doctorsign'
import ChatpageD from './pages/ChatpageD';
import About2nd from './pages/About2nd/About2nd';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Frontpage}/>
      <Route exact path="/signp" component={HomepageP}/>
      <Route exact path="/signd" component={HomepageD}/>
      <Route exact path="/chats" component={Chatpage}/>
      <Route exact path="/chatsD" component={ChatpageD}/>
      <Route exact path="/about" component={About2nd}/>
    </div>
  )
}

export default App;