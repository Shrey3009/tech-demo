import { Box, Button, Heading, Input, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (username && password) {
      alert('Registered (simulated)! Please login.');
      navigate('/');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.100">
      <Box p={8} bg="white" borderRadius="xl" boxShadow="lg" textAlign="center">
        <Heading mb={4}>Register</Heading>
        <Stack spacing={3} mb={6}>
          <Input placeholder="Choose a Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder="Choose a Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Stack>
        <Button colorScheme="green" onClick={handleRegister}>Register</Button>
        <Text mt={4} onClick={() => navigate('/')} color="blue.500" cursor="pointer">Back to Login</Text>
      </Box>
    </Box>
  );
}
