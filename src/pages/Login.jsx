import { Box, Button, Heading, Text, Input, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '123') {
      login();
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.100">
      <Box p={8} bg="white" borderRadius="xl" boxShadow="lg" textAlign="center">
        <Heading mb={4}>Login</Heading>
        <Stack spacing={3} mb={6}>
          <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Stack>
        <Button colorScheme="blue" onClick={handleLogin}>Login</Button>
        <Text mt={4} onClick={() => navigate('/register')} color="blue.500" cursor="pointer">New user? Register here</Text>
      </Box>
    </Box>
  );
}
