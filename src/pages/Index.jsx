import { Box, Button, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaStar } from "react-icons/fa";
import { useState } from "react";

const Rating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(null);

  return (
    <HStack spacing={1}>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <IconButton
            key={index}
            icon={<FaStar />}
            color={ratingValue <= (hover || rating) ? "teal.500" : "gray.300"}
            onClick={() => setRating(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
            variant="ghost"
            size="lg"
          />
        );
      })}
    </HStack>
  );
};

const Index = () => {
  const [ratings, setRatings] = useState({
    recipe1: 0,
    recipe2: 0,
    recipe3: 0,
  });

  const handleRatingChange = (recipe, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [recipe]: rating,
    }));
  };
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
              <Rating rating={ratings.recipe1} setRating={(rating) => handleRatingChange('recipe1', rating)} />
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://source.unsplash.com/featured/?tacos" alt="Recipe 2" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Tasty Tacos</Heading>
              <Text>Enjoy these flavorful tacos with fresh ingredients.</Text>
              <Rating rating={ratings.recipe2} setRating={(rating) => handleRatingChange('recipe2', rating)} />
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://source.unsplash.com/featured/?salad" alt="Recipe 3" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Hearty Salad</Heading>
              <Text>A healthy and delicious salad packed with nutrients.</Text>
              <Rating rating={ratings.recipe3} setRating={(rating) => handleRatingChange('recipe3', rating)} />
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