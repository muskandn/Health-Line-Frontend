import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import LoginD from "../../components/Authentication/LoginD";
import SignupD from "../../components/Authentication/SignupD";
import logo from '../../images/logoRed.png'


function Doctorsign() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");///need to remove if only chats page is rendering
  }, [history]);

  return (
    
    <Container maxW="xl" pb="2rem" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        pb="2rem"
        filter= "drop-shadow(2px 2px 2px #575fa1)"
      >
        <img src={logo} alt="About image" style={{width:"25%", marginLeft:"12rem"}} />
        <Text fontSize="4xl" fontFamily="Work sans" textAlign="center" >
          {/* Health Line: Patient */}
          Health Line : Doctor
        </Text>
        <p style={{marginLeft:"11rem"}}>Your health is our priority</p>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" filter= "drop-shadow(2px 2px 2px #575fa1)">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <LoginD />
            </TabPanel>
            <TabPanel>
              <SignupD />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Doctorsign;