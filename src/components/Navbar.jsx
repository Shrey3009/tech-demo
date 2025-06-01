import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Text,
  HStack,
  Button,
  useColorModeValue,
  Switch
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.900', 'whiteAlpha.900');
  const menuBg = useColorModeValue('white', 'gray.700');
  const menuText = useColorModeValue('gray.800', 'white');
  const border = useColorModeValue('gray.300', 'gray.600');

  const isAuthPage = location.pathname === '/auth';

  return (
    <Flex
      bg={bg}
      color={textColor}
      px={6}
      py={3}
      alignItems="center"
      justifyContent="space-between"
    >
      {/* Logo + Brand , links to Landing Page */}
      <Link to="/">
        <HStack spacing={3} align="center" _hover={{ cursor: 'pointer' }}>
          <Box boxSize="30px">
            <img src="/logo.png" alt="Pathway Logo" style={{ height: '100%' }} />
          </Box>
          <Text fontWeight="bold" fontSize="lg">Pathway</Text>
        </HStack>
      </Link>

      {/*Status Message — Show only if logged in */}
      {!isAuthPage && isAuthenticated && (
        <Text fontSize="sm" color="green.300" fontFamily="Nunito">
          You have 12 new steps to improve your journey →
        </Text>
      )}

      {/*  Nav + Theme Toggle + Avatar */}
      <HStack spacing={4} alignItems="center">
        {!isAuthPage && (
          <>
            <Button as={Link} to="/dashboard" variant="ghost" color={textColor}>
              Dashboard
            </Button>
            <Button as={Link} to="/summary" variant="ghost" color={textColor}>
              Summary
            </Button>
          </>
        )}

        {/* Theme Toggle */}
        <HStack>
          <SunIcon color={colorMode === 'light' ? 'yellow.400' : 'gray.500'} />
          <Switch colorScheme="teal" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
          <MoonIcon color={colorMode === 'dark' ? 'teal.300' : 'gray.500'} />
        </HStack>

        {/* Profile Avatar  */}
        {!isAuthPage && isAuthenticated && (
          <Menu>
            <MenuButton>
              <Avatar name="Admin" size="sm" src="https://bit.ly/broken-link" cursor="pointer" />
            </MenuButton>
            <MenuList bg={menuBg} color={menuText} borderColor={border}>
              <MenuItem as={Link} to="/profile">Profile</MenuItem>
              <MenuItem as={Link} to="/resources">Resources</MenuItem>
              <MenuItem as={Link} to="/activities">Activities</MenuItem>
              <MenuItem as={Link} to="/progress">Progress</MenuItem>
              <MenuItem as={Link} to="/appointments">Appointments</MenuItem>
              <MenuItem onClick={() => { logout(); navigate('/'); }} color="red.400">
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </HStack>
    </Flex>
  );
}
