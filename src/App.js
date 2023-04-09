import './App.css';
import { Route } from 'react-router-dom';
import HomepageP from './pages/Patient-Sign/Patientsign';
import Chatpage from './pages/Chatpage';
import Frontpage from './pages/Front/Front'
import HomepageD from './pages/Doctor-Sign/Doctorsign'
import ChatpageD from './pages/ChatpageD';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Frontpage}/>
      <Route exact path="/signp" component={HomepageP}/>
      <Route exact path="/signd" component={HomepageD}/>
      <Route exact path="/chats" component={Chatpage}/>
      <Route exact path="/chatsD" component={ChatpageD}/>
    </div>
  )
}

export default App;