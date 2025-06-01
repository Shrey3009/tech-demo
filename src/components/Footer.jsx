import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const text = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box bg={bg} color={text} py={6} mt={20}>
      <Flex direction="column" align="center" justify="center" gap={4}>
        {/* Navigation Links */}
        <Stack direction="row" spacing={8}>
          <ChakraLink as={RouterLink} to="/" fontWeight="medium">
            Home
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/contact" fontWeight="medium">
            Contact
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/about" fontWeight="medium">
            About Us
          </ChakraLink>
        </Stack>

        {/* Policy Links */}
        <Stack direction="row" spacing={6} fontSize="sm">
          <ChakraLink href="#">Privacy Policy</ChakraLink>
          <ChakraLink href="#">Terms and Conditions</ChakraLink>
          <ChakraLink href="#">Medical Health Information Policy</ChakraLink>
        </Stack>

        <Text fontSize="sm" pt={2}>© Pathway Care, 2025</Text>
      </Flex>
    </Box>
  );
}
