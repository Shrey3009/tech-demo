import { Box, useColorModeValue } from '@chakra-ui/react';

export default function ThemedCard({ children, ...props }) {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Box bg={bg} color={color} borderRadius="lg" boxShadow="md" p={6} {...props}>
      {children}
    </Box>
  );
}
