import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Badge,
  Progress,
  useColorModeValue,
  Input,
  Select,
  useToast,
  Divider,
  Icon
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { FaCrown, FaClock } from 'react-icons/fa';
import ThemedCard from '../components/common/ThemedCard';

const initialProgressData = [
  { label: 'Meditation Sessions', value: 80 },
  { label: 'Diet Log Completion', value: 60 },
  { label: 'Exercise Goals', value: 90 },
  { label: 'Sleep Tracking', value: 70 },
];

const insights = {
  'Meditation Sessions': '🧘‍♀️ You’re maintaining great mental clarity!',
  'Diet Log Completion': '🥗 Logging meals helps boost nutrition awareness.',
  'Exercise Goals': '🏃‍♂️ Excellent consistency with workouts!',
  'Sleep Tracking': '🛌 Aim for consistent sleep hours for recovery.'
};

export default function ProgressPage() {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const text = useColorModeValue('gray.900', 'whiteAlpha.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const [progressData, setProgressData] = useState(initialProgressData);
  const [lowestMetric, setLowestMetric] = useState('');

  useEffect(() => {
    const sorted = [...progressData].sort((a, b) => a.value - b.value);
    setLowestMetric(sorted[0].label);
  }, [progressData]);

  const handleConfetti = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <Box minH="100vh" bg={bg} color={text} p={8}>
      <Heading size="lg" mb={6}>Your Wellness Progress</Heading>

      {/* Progress Bars with Animated Insights */}
      <VStack spacing={4} align="stretch">
        {progressData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Box as={ThemedCard} bg={cardBg} p={4}>
              <HStack justify="space-between" mb={1}>
                <Text fontWeight="bold">{item.label}</Text>
                <Text>{item.value}%</Text>
              </HStack>
              <Progress
                value={item.value}
                colorScheme="teal"
                borderRadius="md"
                onClick={() => {
                  if (item.value === 100) handleConfetti();
                }}
              />
              <Text fontSize="sm" mt={2} color="gray.500">
                {insights[item.label]}
              </Text>
            </Box>
          </motion.div>
        ))}
      </VStack>

      {/* Dynamic Suggestion Box */}
      <Box mt={10} p={6} bg={cardBg} borderRadius="md" boxShadow="md">
        <Heading size="md" mb={2}>📌 Personalized Suggestion</Heading>
        <Text fontSize="sm" color="gray.400">
          Based on your current progress, consider boosting your <strong>{lowestMetric}</strong>.
        </Text>
        <Text fontSize="sm" color="gray.400" mt={1}>
          Try setting a small achievable goal tomorrow to improve this area.
        </Text>
      </Box>
    </Box>
  );
}
