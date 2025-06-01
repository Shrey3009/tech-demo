import {
  Box,
  Flex,
  Avatar,
  Heading,
  Text,
  Stack,
  Divider,
  useColorModeValue
} from '@chakra-ui/react';
import ThemedCard from '../components/common/ThemedCard';

export default function Profile() {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.900', 'whiteAlpha.900');
  const subText = useColorModeValue('gray.600', 'gray.400');
  const cardBg = useColorModeValue('white', 'gray.800');
  const dividerColor = useColorModeValue('gray.300', 'gray.600');

  return (
    <Box minH="100vh" bg={bg} color={textColor} p={8}>
      <Box
        as={ThemedCard}
        maxW="md"
        mx="auto"
        textAlign="center"
        bg={cardBg}
        borderRadius="xl"
        p={6}
        boxShadow="md"
      >
        <Avatar name="Admin" size="xl" mb={4} mx="auto" />
        <Heading size="lg">Admin</Heading>
        <Text fontSize="md" mt={2} color={subText}>admin@dev.com</Text>

        <Divider my={6} borderColor={dividerColor} />

        <Stack spacing={3} textAlign="left">
          <Box>
            <Text fontWeight="bold">Age</Text>
            <Text>34</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Gender</Text>
            <Text>Male</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Health Goals</Text>
            <Text>Reduce stress, Improve fitness</Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
