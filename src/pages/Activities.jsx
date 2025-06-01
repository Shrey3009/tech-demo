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

const initialActivities = [
  { id: 1, name: 'Morning Meditation', status: 'Completed', deadline: '08:00 AM' },
  { id: 2, name: '10k Steps Walked', status: 'In Progress', deadline: '06:00 PM' },
  { id: 3, name: 'Evening Journaling', status: 'Not Started', deadline: '09:00 PM' },
  { id: 4, name: 'Read 10 Pages of Book', status: 'Not Started', deadline: '05:00 PM' },
  { id: 5, name: 'Hydration Goal Met', status: 'In Progress', deadline: '11:59 PM' },
  { id: 6, name: 'Stretching Routine', status: 'Completed', deadline: '07:00 AM' },
  { id: 7, name: 'Breathing Exercise', status: 'Not Started', deadline: '12:00 PM' },
  { id: 8, name: 'Light Yoga', status: 'In Progress', deadline: '08:30 AM' },
  { id: 9, name: 'Digital Detox 1hr', status: 'Completed', deadline: '10:00 PM' }
];

const getTodayDateKey = () => new Date().toISOString().split('T')[0];

export default function Activities() {
  const [activities, setActivities] = useState(initialActivities);
  const [newActivity, setNewActivity] = useState('');
  const [filter, setFilter] = useState('All');
  const [streak, setStreak] = useState(3);
  const [motivationalMessage, setMotivationalMessage] = useState('');
  const toast = useToast();

  const bg = useColorModeValue('#f6f8fa', '#0d1117');
  const text = useColorModeValue('#1a202c', '#e2e8f0');
  const cardBg = useColorModeValue('white', '#161b22');
  const badgeText = useColorModeValue('gray.800', 'white');

  useEffect(() => {
    if (streak >= 14) {
      setMotivationalMessage("👑 You're on fire! Two-week streak unlocked!");
    } else if (streak >= 7) {
      setMotivationalMessage("🏆 Amazing streak! You're building a powerful habit!");
    } else if (streak >= 3) {
      setMotivationalMessage("🔥 Keep going! You're doing great!");
    } else {
      setMotivationalMessage("🌱 Every small step counts. Stay consistent!");
    }
  }, [streak]);

  const getNextRank = () => {
    if (streak < 3) return { rank: 'Consistency Champ', needed: 3 - streak };
    if (streak < 7) return { rank: 'Elite', needed: 7 - streak };
    if (streak < 14) return { rank: 'Legend', needed: 14 - streak };
    return null;
  };

  const cycleStatus = (status) => {
    if (status === 'Not Started') return 'In Progress';
    if (status === 'In Progress') return 'Completed';
    return 'Not Started';
  };

  const handleStatusChange = (id) => {
    setActivities((prev) => {
      return prev.map((act) => {
        if (act.id === id) {
          const newStatus = cycleStatus(act.status);
          if (newStatus === 'Completed') {
            confetti({ particleCount: 75, spread: 90, origin: { y: 0.6 } });
            setStreak((prev) => prev + 1);
          }
          return { ...act, status: newStatus };
        }
        return act;
      });
    });
  };

  const handleAddActivity = () => {
    if (!newActivity.trim()) return;
    const newItem = {
      id: activities.length + 1,
      name: newActivity,
      status: 'Not Started',
      deadline: '08:00 PM'
    };
    setActivities([...activities, newItem]);
    setNewActivity('');
    toast({ title: 'Activity added!', status: 'success', duration: 2000, isClosable: true });
  };

  const filtered = filter === 'All' ? activities : activities.filter(a => a.status === filter);
  const completedCount = activities.filter(a => a.status === 'Completed').length;
  const nextRank = getNextRank();

  return (
    <Box minH="100vh" bg={bg} color={text} p={8}>
      <Heading size="lg" mb={4}>Activities</Heading>

      {/* Daily Streak */}
      <Box mb={4} p={4} bg={cardBg} borderRadius="md" boxShadow="md">
        <Text fontWeight="bold">🔥 Daily Streak</Text>
        <Text>{streak} day streak – keep going!</Text>
        <Badge colorScheme={streak >= 14 ? 'purple' : streak >= 7 ? 'yellow' : 'orange'} mt={2}>
          {streak >= 14 ? <><Icon as={FaCrown} mr={1} />Legend</> : streak >= 7 ? 'Elite' : 'Consistency Champ'}
        </Badge>
        <Text mt={2} fontStyle="italic">{motivationalMessage}</Text>
        {nextRank && (
          <Box mt={2}>
            
            <Text fontSize="3xl" fontWeight="extrabold" color="teal.300" textAlign="center" mt={3}>
  🚀 Only {nextRank.needed} day(s) to <u>{nextRank.rank}</u>!
</Text>
            <Progress value={(streak / (streak + nextRank.needed)) * 100} colorScheme="purple" mt={1} borderRadius="md" />
          </Box>
        )}
      </Box>

      {/* Add New Activity */}
      <HStack mb={6} spacing={4} align="flex-end">
        <Input
          placeholder="Add new activity"
          value={newActivity}
          onChange={(e) => setNewActivity(e.target.value)}
          bg={cardBg}
          color={text}
        />
        <Button onClick={handleAddActivity} colorScheme="teal">Add</Button>
        <Select maxW="200px" value={filter} onChange={(e) => setFilter(e.target.value)} bg={cardBg} color={text}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
          <option value="Not Started">Not Started</option>
        </Select>
      </HStack>

      {/* Wellness Progress */}
      <Box mb={6} p={4} bg={cardBg} borderRadius="md" boxShadow="md">
        <Text fontWeight="bold" mb={2}>Wellness XP</Text>
        <Progress
          value={(completedCount / activities.length) * 100}
          colorScheme="teal"
          borderRadius="md"
        />
        <Text fontSize="sm" mt={1} color={text}>
          {completedCount} of {activities.length} activities completed
        </Text>
      </Box>

      {/* Activities List */}
      <VStack spacing={4} align="stretch">
        {filtered.map((act, index) => (
          <motion.div
            key={act.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Box as={ThemedCard} bg={cardBg} boxShadow="md">
              <HStack justify="space-between" align="center">
                <VStack align="start" spacing={1}>
                  <Text fontWeight="bold" color={text}>{act.name}</Text>
                  <HStack fontSize="sm" color="gray.400">
                    <Icon as={FaClock} />
                    <Text>{act.deadline}</Text>
                  </HStack>
                </VStack>
                <HStack>
                  <Badge
                    colorScheme={
                      act.status === 'Completed' ? 'green' :
                      act.status === 'In Progress' ? 'orange' : 'gray'
                    }
                    color={badgeText}
                  >
                    {act.status}
                  </Badge>
                  <Button size="sm" onClick={() => handleStatusChange(act.id)}>
                    Update
                  </Button>
                </HStack>
              </HStack>
            </Box>
          </motion.div>
        ))}
      </VStack>
    </Box>
  );
}
