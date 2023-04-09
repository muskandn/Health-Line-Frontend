// import { Button, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
// import React, { useState } from "react";
// import axios from "axios"
// import {
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
// } from '@chakra-ui/react'
// import { useToast } from '@chakra-ui/react'
// import {useHistory} from "react-router-dom"

// const Signup = () => {

//     const toast = useToast()

//     const [name,setName]=useState();
//     const [email,setEmail]=useState();
//     const [password,setPassword]=useState();
//     const [Cpassword,setCpassword]=useState();
//     const [show,setShow]=useState();
//     const [phoneno,setPhonono]=useState();
//     const [gender,setGender]=useState();
//     const [pic,setPic]=useState();
//     const [city,setCity]=useState();
//     const [age,setAge]=useState();
//     const [aadhaarNo,setAadhaarNo]=useState();
//     const [loading,setLoading]=useState()

//     const history=useHistory();

//     const handleClick=()=>{
//         setShow(!show)
//     }

//     const postDetails=(pics)=>{};

//     const submitHandler=async()=>{
//         setLoading(true);
//         if(!name||!password||!Cpassword||!phoneno||!email||!gender||!city||!age||!aadhaarNo){
//         toast({
//             title: 'Please Fill all the feilds.',
//             status: 'warning',
//             duration: 5000,
//             isClosable: true,
//             position: "bottom"
//         });
//         setLoading(false);
//         return;
//         }

//         if(password!==Cpassword){
//         toast({
//             title: 'Passwords are not matching.',
//             status: 'warning',
//             duration: 5000,
//             isClosable: true,
//             position: "bottom"
//         }); 
//         return;
//         }

//         try{
//             const config={
//                 headers:{
//                     "Content-type":"application/json",
//                 },
//             };
//             const {data}=await axios.post(
//                 "api/user",
//                 {name,password,Cpassword,phoneno,email,gender,city,age,aadhaarNo},
//                 config
//             ) ;

//             console.log(data);
//             toast({
//             title: 'Account created.',
//             description: "We've created your account for you.",
//             status: 'success',
//             duration: 9000,
//             isClosable: true,
//             position: "bottom"
//         });
//         localStorage.setItem("userInfo",JSON.stringify(data));

//         setLoading(false);
//         history.push('/login')
//         }
//         catch(err){
//             toast({
//             title: 'Error Occured.',
//             description:err.response.data.message,
//             status: 'warning',
//             duration: 5000,
//             isClosable: true,
//             position: "bottom"
//         });
//         setLoading(false);
//         }

//     }
//     return (
//       <VStack spacing='5px'>
//         <FormControl id='Name' isRequired>
//             <FormLabel>Name</FormLabel>
//             <Input
//             placeholder="Enter your Name"
//             onChange={(e)=>setName(e.target.value)}
//             />
//         </FormControl>

        

//         <FormControl id='Password' isRequired>
//             <FormLabel>Password</FormLabel>
//             <InputGroup>
//             <Input
//             type={show?"text":"password"}
//             placeholder="Enter your Password"
//             onChange={(e)=>setPassword(e.target.value)}
//             />

//             <InputRightElement width="4.5rem">
//                 <Button h="1.75rem" size="sm" onClick={handleClick}>
//                     {show?"Hide":"Show"}

//                 </Button>
            
//             </InputRightElement>
//             </InputGroup>
            
//         </FormControl>
//         <FormControl id='Cpassword' isRequired>
//             <FormLabel>Confirm password</FormLabel>
//             <InputGroup>
//             <Input
//             type={show?"text":"password"}
//             placeholder="Enter your comfirmed Password"
//             onChange={(e)=>setCpassword(e.target.value)}
//             />

//             <InputRightElement width="4.5rem">
//                 <Button h="1.75rem" size="sm" onClick={handleClick}>
//                     {show?"Hide":"Show"}

//                 </Button>
            
//             </InputRightElement>
//             </InputGroup>
//         </FormControl>
//         <FormControl id='Phonono' isRequired>
//             <FormLabel>Phonono</FormLabel>
//             <Input
//             placeholder="Enter your Phonono"
//             onChange={(e)=>setPhonono(e.target.value)}
//             />
//         </FormControl>

//         <FormControl id='Email' isRequired>
//             <FormLabel>Email</FormLabel>
//             <Input
//             placeholder="Enter your Email"
//             onChange={(e)=>setEmail(e.target.value)}
//             />
//         </FormControl>

//         <FormControl id='Gender' isRequired>
//             <FormLabel>Gender</FormLabel>
//             <Input
//             placeholder="Enter your Gender"
//             onChange={(e)=>setGender(e.target.value)}
//             />
//         </FormControl>
//         {/* <FormControl id='Picture' isRequired>
//             <FormLabel>Picture</FormLabel>
//             <Input
//             type="file"
//             p={1.5}
//             accept="image/*"
//             onChange={(e) => postDetails(e.target.files[0])}
//         />
//         </FormControl> */}
//         <FormControl id='City' isRequired>
//             <FormLabel>City</FormLabel>
//             <Input
//             placeholder="Enter your City"
//             onChange={(e)=>setCity(e.target.value)}
//             />
//         </FormControl>

//         <FormControl id='Age' isRequired>
//             <FormLabel>Age</FormLabel>
//             <Input
//             placeholder="Enter your Age"
//             onChange={(e)=>setAge(e.target.value)}
//             />
//         </FormControl>
//         <FormControl id='AadhaarNo' isRequired>
//             <FormLabel>AadhaarNo</FormLabel>
//             <Input
//             placeholder="Enter your AadhaarNo"
//             onChange={(e)=>setAadhaarNo(e.target.value)}
//             />
//         </FormControl>
//         <Button
//         colorScheme="blue"
//         width="100%"
//         style={{ marginTop: 15 }}
//         onClick={submitHandler}
//         isLoading={loading}
//         // isLoading={picLoading}
//         >Sign Up</Button>
        
//       </VStack>
//     );
// };

// export default Signup;

import { Button, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"
const Signup = () => {

    const toast = useToast()

    // const [name,setName]=useState();
    // const [email,setEmail]=useState();
    // const [password,setPassword]=useState();
    // const [Cpassword,setCpassword]=useState();
    
    // const [phoneno,setPhonono]=useState();
    // const [gender,setGender]=useState();
    // const [pic,setPic]=useState();
    // const [city,setCity]=useState();
    // const [age,setAge]=useState();
    // const [aadhaarNo,setAadhaarNo]=useState();
    const [show,setShow]=useState();
    const [image,setImage]=useState();
    const [imageUrl,setImageUrl]=useState();

    const [user,setUser]=useState({
        name:"",email:"",password:"",Cpassword:"",
        phoneno:"",gender:"",pic:"",city:"",age:"",aadhaarNo:""
    })
    const [loading,setLoading]=useState()

    const history=useHistory();

    const handleClick=()=>{
        setShow(!show)
    }

    // const postDetails=(pics)=>{};



    const submitHandler=async()=>{


        setLoading(true);
        if(!user.name||!user.email||!user.password||!user.Cpassword||!user.phoneno||!user.gender||!user.city||!user.age||!user.aadhaarNo){
        toast({
            title: 'Please Fill all the feilds.',
            status: 'warning',
            duration: 5000,
            isClosable: true,
            position: "bottom"
        });
        setLoading(false);
        return;
        }

        if(user.password!==user.Cpassword){
        toast({
            title: 'Passwords are not matching.',
            status: 'warning',
            duration: 5000,
            isClosable: true,
            position: "bottom"
        }); 
        return;
        }

        try{
            const config={
                headers:{
                    "Content-type":"application/json",
                },
            };
            const {data}=await axios.post(
                "api/user",
                {name:user.name,
                email:user.email,
                password:user.password,
                Cpassword:user.Cpassword,
                phoneno:user.phoneno,
                email:user.email,
                gender:user.gender,
                pic:imageUrl,
                city:user.city,
                age:user.age,
                aadhaarNo:user.aadhaarNo},
                config
            ) ;

            console.log(data);
            toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: "bottom"
        });
        localStorage.setItem("userInfo",JSON.stringify(data));

        setLoading(false);
        history.push('/chats')
        }
        catch(err){
            toast({
            title: 'Error Occured.',
            description:err.response.data.message,
            status: 'warning',
            duration: 5000,
            isClosable: true,
            position: "bottom"
        });
        setLoading(false);
        }

    }



    // const submitHandler=async()=>{

    // }


    let name,value;
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value})
    }



  //  for uploading image
    const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    };

  // functionality of the button to upload the image
    const handleImageUpload = async () => {
    try {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "health_care");
        formData.append("cloud_name","du4zcw1bp")

        const response = await axios.post(
            "https://api.cloudinary.com/v1_1/du4zcw1bp/image/upload",
            formData
        );

        setImageUrl(response.data.secure_url);
        } catch (error) {
        console.error(error);
        }
    };

    //handle and convert it in base 64
    // const handleImage = (e) =>{
    //     const file = e.target.files[0];
    //     setFileToBase(file);
    //     console.log(file);
    // }

    // const setFileToBase = (file) =>{
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onloadend = () =>{
    //         setImage(reader.result);
    //     }

    

    
    return (
      <VStack spacing='5px'>
        <FormControl id='Name' isRequired>
            <FormLabel>Name</FormLabel>
            <Input
            placeholder="Enter your Name"
            name="name"
            value={user.name}
            onChange={handleInputs}
            />
        </FormControl>

        <FormControl id='Email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input
            placeholder="Enter your Email"
            name="email"
            value={user.email}
            
            onChange={handleInputs}
            />
        </FormControl>

        <FormControl id='Password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input
            type={show?"text":"password"}
            placeholder="Enter your Password"
            name="password"
            value={user.password}
            
            onChange={handleInputs}
            />

            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show?"Hide":"Show"}

                </Button>
            
            </InputRightElement>
            </InputGroup>
            
        </FormControl>

        <FormControl id='Cpassword' isRequired>
            <FormLabel>Confirm password</FormLabel>
            <InputGroup>
            <Input
            type={show?"text":"password"}
            placeholder="Enter your comfirmed Password"
            name="Cpassword"
            value={user.Cpassword}
            
            onChange={handleInputs}
            />

            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show?"Hide":"Show"}

                </Button>
            
            </InputRightElement>
            </InputGroup>
        </FormControl>

        <FormControl id='Phonono' isRequired>
            <FormLabel>Phonono</FormLabel>
            <Input
            placeholder="Enter your Phonono"
            name="phoneno"
            value={user.phoneno}
            
            onChange={handleInputs}
            />
        </FormControl>

        

        <FormControl id='Gender' isRequired>
            <FormLabel>Gender</FormLabel>
            <Input
            placeholder="Enter your Gender"
            name="gender"
            value={user.gender}
            
            onChange={handleInputs}
            />
        </FormControl>




        <FormControl id="pic">
        <FormLabel>Upload your picture </FormLabel>
        <Input
            type="file"
            p={1.5}
            accept="image/*"
            value={user.pic}
            onChange={handleImageChange}
        />
        <Button onClick={handleImageUpload}>Upload Image</Button> 
        {imageUrl && <img src={imageUrl} alt="Uploaded" />}
        
        </FormControl>



        <FormControl id='City' isRequired>
            <FormLabel>City</FormLabel>
            <Input
            placeholder="Enter your City"
            name="city"
            value={user.city}
            
            onChange={handleInputs}
            />
        </FormControl>

        <FormControl id='Age' isRequired>
            <FormLabel>Age</FormLabel>
            <Input
            placeholder="Enter your Age"
            name="age"
            value={user.age}
            
            onChange={handleInputs}
            />
        </FormControl>
        <FormControl id='AadhaarNo' isRequired>
            <FormLabel>AadhaarNo</FormLabel>
            <Input
            placeholder="Enter your AadhaarNo"
            name="aadhaarNo"
            value={user.aadhaarNo}
            
            onChange={handleInputs}
            />
        </FormControl>


        <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}

        >Sign Up</Button>
        <Button
        variant="solid"
        // colorScheme="indigo"
        width="100%"
        color="#030c46"
        
        // isLoading={picLoading}
      ><Link to="/" >
        Go to Home Page
      </Link>
        
      </Button>
    </VStack>
    );
};

export default Signup;
