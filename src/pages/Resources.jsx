import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import ThemedCard from '../components/common/ThemedCard';

const resources = [
  { title: 'Cancer Support Community', url: 'https://www.cancersupportcommunity.org/' },
  { title: 'American Cancer Society', url: 'https://www.cancer.org/' },
  { title: 'National Cancer Institute', url: 'https://www.cancer.gov/' },
  { title: 'Mental Health America', url: 'https://mhanational.org/' },
  { title: 'Nutrition & Cancer', url: 'https://www.oncologynutrition.org/' }
];

export default function Resources() {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.900', 'whiteAlpha.900');
  const subText = useColorModeValue('gray.600', 'gray.400');
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Box minH="100vh" bg={bg} color={textColor} p={8}>
      <Heading size="lg" mb={6}>Helpful Resources</Heading>
      <VStack spacing={4} align="stretch">
        {resources.map((res, idx) => (
          <Box
            as={ThemedCard}
            key={idx}
            bg={cardBg}
            borderRadius="xl"
            p={5}
            boxShadow="md"
          >
            <Link href={res.url} isExternal fontWeight="bold" fontSize="lg" color={textColor}>
              {res.title} <Icon as={ExternalLinkIcon} mx={1} />
            </Link>
            <Text fontSize="sm" color={subText}>Click to learn more</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
