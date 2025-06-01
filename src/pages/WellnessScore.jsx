import { Box, Heading, Text, Progress, Stack, Badge } from '@chakra-ui/react';

const mockScore = 72;

const mockBreakdown = [
  { label: "Meditation", score: 8 },
  { label: "Lab Panels", score: 6 },
  { label: "Journals", score: 7 },
  { label: "Bio Markers", score: 9 },
  { label: "Exercise", score: 6 },
  { label: "Diet", score: 8 },
  { label: "Supplements", score: 5 },
  { label: "Medical History", score: 7 }
];

export default function WellnessScore() {
  return (
    <Box p={6}>
      <Heading size="lg" mb={4}>Wellness Score</Heading>
      <Text fontSize="md" mb={4}>
        Admin’s overall wellness score based on data summaries across several pillars.
      </Text>

      <Box mb={6}>
        <Text fontWeight="bold">Total Score</Text>
        <Progress value={mockScore} size="lg" colorScheme="teal" borderRadius="md" />
        <Text mt={2}>{mockScore}%</Text>
      </Box>

      <Stack spacing={4}>
        {mockBreakdown.map((item, idx) => (
          <Box key={idx}>
            <Text fontWeight="medium">{item.label}</Text>
            <Progress value={item.score * 10} colorScheme="blue" size="sm" borderRadius="md" />
            <Badge mt={1}>{item.score}/10</Badge>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
    