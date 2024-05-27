import { Box, Button, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="brand.800" color="white" padding={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">RecipeShare</Heading>
        <HStack spacing={8}>
          <Link href="/">Home</Link>
          <Link href="/recipes">Recipes</Link>
          <Button colorScheme="teal" size="lg" as={Link} href="/submit">Submit a Recipe</Button>
          <Link href="/contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="gray.100" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Welcome to RecipeShare</Heading>
        <Text fontSize="xl" mb={6}>Discover and share amazing recipes from around the world.</Text>
        <Button colorScheme="teal" size="lg" as={Link} href="/submit">Submit a Recipe</Button>
      </Box>

      {/* Featured Recipes Section */}
      <Container maxW="container.xl" py={10}>
        <Heading as="h3" size="xl" mb={6}>Featured Recipes</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://source.unsplash.com/featured/?pasta" alt="Recipe 1" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Delicious Pasta</Heading>
              <Text>Try this amazing pasta recipe with a rich and creamy sauce.</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://source.unsplash.com/featured/?tacos" alt="Recipe 2" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Tasty Tacos</Heading>
              <Text>Enjoy these flavorful tacos with fresh ingredients.</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://source.unsplash.com/featured/?salad" alt="Recipe 3" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Hearty Salad</Heading>
              <Text>A healthy and delicious salad packed with nutrients.</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box bg="brand.900" color="white" py={10}>
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center">
            <Text>&copy; 2023 RecipeShare. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="https://facebook.com" isExternal><FaFacebook size="24px" /></Link>
              <Link href="https://twitter.com" isExternal><FaTwitter size="24px" /></Link>
              <Link href="https://instagram.com" isExternal><FaInstagram size="24px" /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;