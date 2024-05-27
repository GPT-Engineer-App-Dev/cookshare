import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Textarea, VStack, Image, Text } from "@chakra-ui/react";

const SubmitRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">Submit a Recipe</Heading>
      {submitted ? (
        <Box textAlign="center">
          <Text fontSize="xl" mb={4}>Thank you for your submission!</Text>
          <Button colorScheme="teal" onClick={() => setSubmitted(false)}>Submit Another Recipe</Button>
        </Box>
      ) : (
        <Box as="form" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="title" isRequired>
              <FormLabel>Recipe Title</FormLabel>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl id="ingredients" isRequired>
              <FormLabel>Ingredients</FormLabel>
              <Textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
            </FormControl>
            <FormControl id="instructions" isRequired>
              <FormLabel>Instructions</FormLabel>
              <Textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} />
            </FormControl>
            <FormControl id="image">
              <FormLabel>Image Upload</FormLabel>
              <Input type="file" accept="image/*" onChange={handleImageChange} />
              {image && <Image src={image} alt="Recipe Image" mt={4} />}
            </FormControl>
            <Button colorScheme="teal" type="submit">Submit</Button>
          </VStack>
        </Box>
      )}
    </Container>
  );
};

export default SubmitRecipe;