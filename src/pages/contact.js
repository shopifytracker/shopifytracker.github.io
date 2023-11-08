import { initializeApp } from "@firebase/app";
import { addDoc, collection, getFirestore, serverTimestamp } from "@firebase/firestore";
import { FormControl, FormLabel, Input, Button, Box, Heading, useColorMode, Textarea, Text, Flex, Link } from "@chakra-ui/react";

import { useState } from "react";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from 'uuid';

// const firebaseConfig = {
//     apiKey: "AIzaSyCUcqxTcbOssPiKqg6Weg256KkUlT_0Vxg",
//     authDomain: "my-contact-form-5be52.firebaseapp.com",
//     projectId: "my-contact-form-5be52",
//     storageBucket: "my-contact-form-5be52.appspot.com",
//     messagingSenderId: "507303115058",
//     appId: "1:507303115058:web:5d9baf3ca19f238e35ff2b"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contactnum, setContactNum] = useState('');
    const [message, setMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { colorMode } = useColorMode();

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'contactnum':
                setContactNum(value);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                break;
        }
    };

    const getFontAwesomeIcon = (icon) => (
        <FontAwesomeIcon
            icon={icon}
            className={`text-xl mx-2 ${colorMode === "light" ? "text-black" : "text-white"}`}
        />
    );

    const handleSubmit = async (event) => {
        const id = uuidv4();
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "contact"), { id, name, email, contactnum, message, timestamp: serverTimestamp() });
            console.log("Document written with ID: ", docRef.id);
            setName('');
            setEmail('');
            setContactNum('');
            setMessage('');
            setFormSubmitted(true);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <>
            <Flex flexDirection={["column", "row"]} justifyContent={["center","space-around"]} alignItems={["center", "flex-start"]}>
                <Box w={["100%","50%"]} textAlign={["center", "left"]}>
                    {formSubmitted ? (
                        <Heading size='lg' mb={8}>Thank you for filling out the form. I will reply to you via email.</Heading>
                    ) : (
                        <Heading textAlign='center' mb={8}>Get in touch</Heading>
                    )
                    }
                    <form onSubmit={handleSubmit}>
                        <Box mb={5} ms={3} me={3}>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input type='text' name='name' value={name} onChange={handleChange} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input type='email' name='email' value={email} onChange={handleChange} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Contact</FormLabel>
                                <Input type='text' name='contactnum' value={contactnum} onChange={handleChange} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Message</FormLabel>
                                <Textarea name='message' value={message} onChange={handleChange} />
                            </FormControl>
                        </Box>
                        <Button type='submit' onClick={handleSubmit} mt={5} w={["50%","100%"]}>
                            Send Message
                        </Button>
                    </form>
                </Box>
                <Box border="1px" borderRadius={5} p={5} ml={[0,5]} mt={[10,0]}>
                    <Heading mb={5} >Contact Information</Heading>
                    <Box me={5} textAlign={["center", "left"]}>
                        {/* <Text mt={5}>
                            {getFontAwesomeIcon(faPhone)} +1 936 657 1605
                        </Text> */}
                        <Text mt={5}>
                            {getFontAwesomeIcon(faEnvelope)} serhiibuzurnyi@gmail.com
                        </Text>
                        <Text mt={5}>
                            {getFontAwesomeIcon(faLocationDot)} Ukraine, Ukraine
                        </Text>
                    </Box>
                    
                </Box>
                
            </Flex>
           
        </>
    );
}

export default Contact;