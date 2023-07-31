import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Heading, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import TextField from "./TextField";

const SignUp = () => {
  const navigate = useNavigate();
  
  //Event handlers
  const handleSubmit = async (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    actions.resetForm();
const vals = {...values}
try{
    const response = await fetch('http://localhost:4000/register', {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(vals)
    })
    if (!response.ok || response.status >= 400) {
        return;
      }
  
      const data = await response.json();
      if(!data) return
      console.log(data);
} catch(error){
    console.error('Error', error)
}
  }

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Username required!")
          .min(6, "Username too short!")
          .max(28, "Username too long!"),
        password: Yup.string()
          .required("Password required!")
          .min(6, "Password too short!")
          .max(28, "Password too long!"),
      })}
      onSubmit={handleSubmit}
    >
      <VStack
        as={Form}
        w={{ base: "90%", md: "500px" }}
        m="auto"
        justify="center"
        h="100vh"
        spacing="1rem"
      >
        <Heading>Sign Up</Heading>
        <TextField
          name="username"
          placeholder="Enter username"
          autoComplete="off"
          label="Username"
        />

        <TextField
          name="password"
          placeholder="Enter password"
          autoComplete="off"
          label="Password"
        />

        <ButtonGroup pt="1rem">
          <Button colorScheme="teal" type="submit">
            Create Account
          </Button>
          <Button onClick={() => navigate("/")} leftIcon={<ArrowBackIcon />}>
            Back
          </Button>
        </ButtonGroup>
      </VStack>
    </Formik>
  );
};

export default SignUp;