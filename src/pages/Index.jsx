import { Box, Container, Flex, VStack, Text, Link, Image, HStack, Spacer } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaHome, FaSearch, FaBook, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.900" color="white" p={4} align="center">
        <HStack spacing={8}>
          <NavLink to="/" exact>
            <HStack>
              <FaHome />
              <Text>Home</Text>
            </HStack>
          </NavLink>
          <NavLink to="/browse">
            <HStack>
              <FaSearch />
              <Text>Browse</Text>
            </HStack>
          </NavLink>
          <NavLink to="/library">
            <HStack>
              <FaBook />
              <Text>Library</Text>
            </HStack>
          </NavLink>
          <NavLink to="/profile">
            <HStack>
              <FaUser />
              <Text>Profile</Text>
            </HStack>
          </NavLink>
        </HStack>
      </Flex>

      <Box as="main" p={4}>
        <VStack spacing={4} align="start">
          <Text fontSize="3xl" fontWeight="bold">Featured Playlists</Text>
          <Flex wrap="wrap" justify="space-around">
            <Box bg="gray.700" color="white" p={4} borderRadius="md" w="200px" h="200px" m={2}>
              <Text>Playlist 1</Text>
            </Box>
            <Box bg="gray.700" color="white" p={4} borderRadius="md" w="200px" h="200px" m={2}>
              <Text>Playlist 2</Text>
            </Box>
            <Box bg="gray.700" color="white" p={4} borderRadius="md" w="200px" h="200px" m={2}>
              <Text>Playlist 3</Text>
            </Box>
            <Box bg="gray.700" color="white" p={4} borderRadius="md" w="200px" h="200px" m={2}>
              <Text>Playlist 4</Text>
            </Box>
          </Flex>
        </VStack>
      </Box>

      <Box as="footer" bg="gray.900" color="white" p={4} mt={8}>
        <Flex justify="space-between" wrap="wrap">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/terms">Terms of Service</Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;