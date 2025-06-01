import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  Spacer,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Text,
  Switch
} from '@chakra-ui/react';
import { HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const NavbarPublic = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.900', 'whiteAlpha.900');
  const contentBg = useColorModeValue('gray.50', 'gray.800');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box bg={bg} px={6} py={3} boxShadow="md" position="sticky" top="0" zIndex="1000">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Left Side: Logo + Brand */}
          <Link to="/">
            <HStack spacing={3} align="center" _hover={{ cursor: 'pointer' }}>
              <Box boxSize="30px">
                <img src="/logo.png" alt="Pathway Logo" style={{ height: '100%' }} />
              </Box>
              <Text fontWeight="bold" fontSize="lg">Pathway</Text>
            </HStack>
          </Link>

          {/* Right Side: Nav Items + Theme Toggle + Auth Buttons */}
          <HStack spacing={4} alignItems="center">
            <Button as={Link} to="/faq" variant="ghost" color={textColor}>FAQ</Button>
            <Button as={Link} to="/about" variant="ghost" color={textColor}>About</Button>

            <HStack>
              <SunIcon color={colorMode === 'light' ? 'yellow.500' : 'gray.500'} />
              <Switch colorScheme="teal" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
              <MoonIcon color={colorMode === 'dark' ? 'teal.300' : 'gray.500'} />
            </HStack>

            <HStack spacing={2} display={{ base: 'none', md: 'flex' }}>
              <Button as={Link} to="/auth" state={{ mode: 'login' }} variant="outline" bg="brand.primary" _hover={{ bg: 'brand.primaryDark' }} color="black">
                Login
              </Button>
              <Button as={Link} to="/auth" state={{ mode: 'register' }} bg="brand.primary" _hover={{ bg: 'brand.primaryDark' }} color="black">
                Register
              </Button>
            </HStack>
          </HStack>
        </Flex>
      </Box>

      {/* Filler Box to separate navbar visually from the main content */}
      <Box h={{ base: 6, md: 8 }} bg={contentBg} />

      {/* Mobile Drawer */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start">
              <Button as={Link} to="/faq" variant="ghost" onClick={onClose}>FAQ</Button>
              <Button as={Link} to="/about" variant="ghost" onClick={onClose}>About</Button>
              <Button as={Link} to="/auth" state={{ mode: 'login' }} variant="outline" bg="brand.primary" _hover={{ bg: 'brand.primaryDark' }} color="black" onClick={onClose}>
                Login
              </Button>
              <Button as={Link} to="/auth" state={{ mode: 'register' }} bg="brand.primary" _hover={{ bg: 'brand.primaryDark' }} color="black" onClick={onClose}>
                Register
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavbarPublic;
