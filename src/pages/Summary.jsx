import {
  Box,
  Heading,
  Text,
  VStack,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import ThemedCard from '../components/common/ThemedCard';

const summaries = [
  {
    id: 1,
    specialist: 'Dr. Jane Smith (Oncologist)',
    date: '2025-06-01',
    summary:
      'Discussed initial treatment plan. Suggested PET scan and blood tests. Patient asked about side effects of chemotherapy.',
  },
  {
    id: 2,
    specialist: 'Dr. Rahul Mehta (Therapist)',
    date: '2025-06-03',
    summary:
      'Talked about coping strategies. Recommended weekly sessions. Discussed recent stress triggers at work.',
  },
  {
    id: 3,
    specialist: 'Dr. Lina Reyes (Dietician)',
    date: '2025-06-05',
    summary:
      'Reviewed dietary habits. Suggested higher protein intake. Introduced anti-inflammatory foods.',
  },
];

export default function SummaryPage() {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.900', 'whiteAlpha.900');
  const subTextColor = useColorModeValue('gray.600', 'gray.400');
  const dividerColor = useColorModeValue('gray.300', 'gray.600');
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Box minH="100vh" bg={bg} color={textColor} p={8}>
      <Heading size="lg" mb={6}>Consultation Summaries</Heading>
      <VStack spacing={6} align="stretch">
        {summaries.map((entry) => (
          <Box
            as={ThemedCard}
            key={entry.id}
            bg={cardBg}
            borderRadius="xl"
            p={5}
            boxShadow="md"
          >
            <Text fontWeight="bold">{entry.specialist}</Text>
            <Text fontSize="sm" color={subTextColor}>{entry.date}</Text>
            <Divider my={2} borderColor={dividerColor} />
            <Text>{entry.summary}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
