import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/ChatboxD";//------------------------
import MyChats from "../components/MyChatsD";//----------------------------------------------------------------
import SideDrawer from "../components/miscellaneous/SideDrawerD";//----------------------------------------------------------------
import { ChatState } from "../Context/ChatProvider";

const ChatpageD = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      
        <div style={{display:"flex", justifyContent:"space-around", width:"100%", height:"91.4vh" , padding:"10px"}}>
          {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
        </div>
        
      
    </div>
  );
};

export default ChatpageD;