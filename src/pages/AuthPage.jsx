import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const MotionBox = motion(Box);

export default function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();

  const initialMode = location.state?.mode || 'login';
  const [isLogin, setIsLogin] = useState(initialMode === 'login');

  useEffect(() => {
    if (location.state?.mode) {
      setIsLogin(location.state.mode === 'login');
    }
  }, [location.state]);

  const toggleMode = () => setIsLogin(prev => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;

    if (isLogin) {
      if (username === 'admin' && password === '123') {
        login();
        navigate('/dashboard');
      } else {
        alert('Invalid credentials');
      }
    } else {
      login(); 
      navigate('/dashboard');
    }
  };

 
  const pageBg = useColorModeValue('gray.100', 'gray.900');
  const boxBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'whiteAlpha.900');

  return (
    <Flex height="100vh" align="center" justify="center" bg={pageBg}>
      <Box bg={boxBg} p={8} rounded="xl" shadow="lg" width="400px">
        <Heading size="md" textAlign="center" mb={6} color={headingColor}>
          {isLogin ? 'Login to Pathway' : 'Register an Account'}
        </Heading>

        <AnimatePresence mode="wait">
          <MotionBox
            key={isLogin ? 'login' : 'register'}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <Input placeholder="Username" name="username" required />
                <Input placeholder="Password" name="password" type="password" required />
                {!isLogin && (
                  <Input placeholder="Confirm Password" type="password" required />
                )}
                <Button type="submit" colorScheme="teal">
                  {isLogin ? 'Login' : 'Register'}
                </Button>
              </Stack>
            </form>
          </MotionBox>
        </AnimatePresence>

        <Text mt={4} textAlign="center">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <Button onClick={toggleMode} variant="link" colorScheme="blue">
            {isLogin ? 'Register' : 'Login'}
          </Button>
        </Text>
      </Box>
    </Flex>
  );
}
