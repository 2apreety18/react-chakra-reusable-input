import React, { useState } from 'react';
import { MatLikeInput } from './components/MatLikeInput';
import { Button, Card, Flex, Grid, GridItem, Text } from '@chakra-ui/react';


function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });


  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text", 
      label: "Username",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      label: "Password",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

return (


<Grid
  h='50rem'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={50}
>
  <GridItem rowSpan={2} colSpan={1} bg='purple.400' />
  <GridItem colSpan={4} bg='tomato' mt="10rem" ml="auto" mr="auto" w="70%">
  <Card>
    <form>
    {inputs.map((input) => (
      <MatLikeInput
        key={input.id}
        {...input}
        value={values[input.name]}
        onChange={onChange}
      />
    ))}
    <Flex justifyContent="center" mb="10px">
        <Button colorScheme='purple' variant="solid" onClick={handleSubmit}>Submit</Button>
    </Flex>
  </form>
</Card>
  </GridItem>

</Grid>
)
}

export default App;
