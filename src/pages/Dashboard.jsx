import {
  Box,
  Flex,
  Avatar,
  Heading,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  IconButton,
  useColorModeValue,
  VStack,
  Button,
  Badge,
  HStack,
  SimpleGrid,
  chakra
} from '@chakra-ui/react';
import {
  ArrowForwardIcon,
  ExternalLinkIcon,
  CheckCircleIcon,
  InfoIcon,
  TimeIcon
} from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ThemedCard from '../components/common/ThemedCard';

const MotionBox = motion(Box);
const MotionHStack = chakra(motion(HStack));


export default function Dashboard() {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const text = useColorModeValue('gray.900', 'whiteAlpha.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const subText = useColorModeValue('gray.600', 'gray.400');
  const linkColor = useColorModeValue('blue.600', 'blue.300');
  const boxBg = useColorModeValue('gray.100', 'blackAlpha.500');
  const badgeBg = useColorModeValue('green.600', 'green.300');
  const badgeColor = useColorModeValue('white', 'black');
  const conciergeTextColor = useColorModeValue('gray.600', 'whiteAlpha.800');

  const navigate = useNavigate();
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 19.4;
    const duration = 1000;
    const increment = end / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < end) {
        setAnimatedValue(parseFloat(start.toFixed(1)));
        requestAnimationFrame(animate);
      } else {
        setAnimatedValue(end);
      }
    };

    animate();
  }, []);

  return (
    <Box minH="100vh" bg={bg} color={text} p={8}>
      <Flex direction={{ base: 'column', md: 'row' }} gap={6}>
        <MotionBox as={ThemedCard} flex={{ base: '1 1 100%', md: '2' }} p={6} borderRadius="2xl" position="relative" overflow="hidden" bg={cardBg} backgroundImage="url('/jellyfish.png')" backgroundSize="cover" backgroundPosition="center" color={text} whileHover={{ scale: 1.02 }}>
          <Box position="relative" zIndex={1}>
            <Text fontSize="sm" mb={1} color={subText}>Welcome back,</Text>
            <Heading size="lg" mb={1}>Admin</Heading>
            <Text fontSize="md" mb={4}>Glad to see you again!<br />Talk to me anytime, about anything</Text>
            <Flex align="center" gap={3}>
              <Avatar size="lg" name="Admin" src="/avatar.png" bg="pink.200" />
              <Box>
                <Text fontWeight="bold">Chat With Concierge →</Text>
                <Text fontSize="xs" color={conciergeTextColor}>Over iMessage or Here</Text>
              </Box>
            </Flex>
          </Box>
        </MotionBox>

        <MotionBox as={ThemedCard} flex={{ base: '1 1 100%', md: '2' }} p={6} bg={cardBg} borderRadius="2xl" whileHover={{ scale: 1.02 }}>
          <Flex justify="space-between" align="center" mb={4}>
            <Heading size="md">Survivorship Score</Heading>
            <Text fontSize="sm" textDecoration="underline" color={linkColor} cursor="pointer">Go To Page</Text>
          </Flex>
          <Flex gap={4} align="center" justify="space-between">
            <Box>
              <Box bg={boxBg} p={4} borderRadius="lg" mb={3} display="flex" justifyContent="space-between" alignItems="center">
                <Stat>
                  <StatLabel fontSize="xs">Biomarkers Analyzed</StatLabel>
                  <StatNumber fontSize="2xl">134</StatNumber>
                </Stat>
                <IconButton icon={<ArrowForwardIcon />} aria-label="Biomarkers" variant="ghost" colorScheme="teal" size="sm" />
              </Box>
              <Box bg={boxBg} p={4} borderRadius="lg" display="flex" justifyContent="space-between" alignItems="center">
                <Stat>
                  <StatLabel fontSize="xs">Next Steps</StatLabel>
                  <StatNumber fontSize="2xl">12</StatNumber>
                </Stat>
                <IconButton icon={<ArrowForwardIcon />} aria-label="Next Steps" variant="ghost" colorScheme="teal" size="sm" />
              </Box>
            </Box>
            <Flex direction="column" align="center" justify="center" w="130px">
              <Box w="110px" h="110px">
                <CircularProgressbar value={animatedValue} maxValue={30} text={`${animatedValue}`} styles={buildStyles({ pathColor: '#00DFA2', textColor: text, trailColor: '#1A202C', textSize: '28px' })} />
              </Box>
              <Text fontSize="sm" mt={2} color={subText} textAlign="center">
                3 years younger than average survivor
              </Text>
            </Flex>
          </Flex>
        </MotionBox>
      </Flex>

 <Flex mt={10} direction={{ base: 'column', md: 'row' }} gap={6} align="stretch">
        <MotionBox as={ThemedCard} flex="1" p={6} bg={cardBg} borderRadius="2xl" whileHover={{ scale: 1.02 }}>
          <Heading size="md" mb={2}>Your Health Timeline</Heading>
          <Text fontSize="sm" color={subText} mb={6}>A look back at your care journey and what’s ahead</Text>
          <VStack align="start" spacing={6} position="relative" pl={6}>
            <Box position="absolute" top="10px" left="12px" height="100%" width="2px" bg="gray.400" />
            {["Initial Consultation", "Lab Work & Imaging", "Results Review", "Care Plan Summary"].map((title, i) => {
              const icons = [CheckCircleIcon, CheckCircleIcon, InfoIcon, TimeIcon];
              const statuses = ["Completed", "Completed", "In Progress", "Pending"];
              const dates = ["Jan 15", "Mar 10", "May 25", "Upcoming"];
              const colors = ["green", "green", "blue", "gray"];
              const Icon = icons[i];
              return (
                <MotionHStack
                  align="start"
                  spacing={4}
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <Box mt={1}><Icon color={`${colors[i]}.400`} /></Box>
                  <Box>
                    <Text fontWeight="bold">{title}</Text>
                    <Text fontSize="xs" color={subText}>{dates[i]}</Text>
                    <Badge mt={1} colorScheme={colors[i]}>{statuses[i]}</Badge>
                  </Box>
                </MotionHStack>
              );
            })}
          </VStack>
        </MotionBox>

        <MotionBox as={ThemedCard} flex="1" p={6} bg={cardBg} borderRadius="2xl" overflowY="auto" maxH="500px" whileHover={{ scale: 1.02 }}>
          <Flex justify="space-between" align="center" mb={2}>
            <Heading size="md">What We Are Fighting</Heading>
            <Button size="xs" variant="link" color={linkColor}>Go To Page</Button>
          </Flex>
          <Text fontSize="sm" color={subText} mb={4} fontStyle="italic">Late Effects From Your Treatments</Text>
          <VStack align="start" spacing={4}>
            {["Adverse psychological/quality of life effects", "Hearing problems (Cisplatin)", "Cardiac dysfunction (Doxorubicin)", "GI Dysfunction (Radiation, Surgery)", "Kidney/Bladder Dysfunction (Cyclophosphamide, Cisplatin, Radiation)", "Gonadal dysfunction/fertility problems (cyclophosphamide, Cisplatin)", "Diabetes (Radiation)"].map((title, i) => {
              const details = [
                "Psychosocial assessment annually,",
                "Audiogram baseline and as indicated",
                "Echocardiogram every 3 years, EKG baseline and as clinically indicated,",
                "Liver Function Test Annually, GI consult as clinically indicated,",
                "Mg, PO4, blood pressure annually, UA as clinically indicated",
                "Semen analysis as clinically indicated",
                "Monitor glucose levels, HbA1C annually"
              ];
              const actions = [
                ["Pathway Therapist Consults"],
                [],
                ["Pathway Lab Panel", "Pathway Protocols"],
                ["Pathway Panel", "Pathway Protocols"],
                ["Pathway Panel"],
                ["Pathway Panel"],
                ["Pathway Panel", "Pathway Protocols"]
              ];
              return (
                <Box key={i}>
                  <Text fontWeight="bold">{title}</Text>
                  <Text fontSize="sm" color={subText}>
                    {details[i]}
                    {actions[i].length > 0 && (
                      <Text as="span" fontWeight="semibold" color="orange.300"> {actions[i].join(", ")}</Text>
                    )}
                  </Text>
                </Box>
              );
            })}
          </VStack>
          <Text fontSize="sm" fontWeight="semibold" color={subText} textAlign="center" mt={6}>We Are Here For Every Step of This Journey</Text>
        </MotionBox>
      </Flex>

      <Box mt={10}>
        <Heading size="md" mb={4}>Health Summary</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
          {[{
            title: 'Pathway Lab Biomarkers',
            subtitle: 'Survivorship Biomarkers',
            value: 124,
            badge: 'Analyzed'
          }, {
            title: 'Medical Records',
            subtitle: 'Actively Syncing',
            value: 300,
            badge: 'Pages Analyzed'
          }, {
            title: 'Wearable Data',
            subtitle: 'Actively Syncing',
            value: 10,
            badge: 'Biomarkers Analyzed'
          }, {
            title: 'Current Care Team',
            subtitle: 'Actively Syncing',
            value: 12,
            badge: 'Specialists Linked'
          }].map((card, i) => (
            <Box key={i} bg={boxBg} p={4} borderRadius="xl" boxShadow="md">
              <Flex justify="space-between" align="center" mb={2}>
                <Text fontWeight="bold">{card.title}</Text>
                <IconButton icon={<ExternalLinkIcon />} size="xs" variant="ghost" aria-label="Go" />
              </Flex>
              <Text fontSize="sm" color={subText} mb={1}>{card.subtitle}</Text>
              <Text fontSize="2xl" fontWeight="bold">{card.value}</Text>
              <Badge mt={1} bg={badgeBg} color={badgeColor}>{card.badge}</Badge>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Flex mt={10} direction={{ base: 'column', md: 'row' }} gap={6}>
        {[{
          title: 'Activities',
          subtitle: 'Daily XP Tasks: Meditation, Journaling, Exercise.',
          badge: '2 Completed Today',
          colorScheme: 'green',
          button: 'Track Now',
          link: '/activities'
        }, {
          title: 'Progress',
          subtitle: 'Wellness improvements across diet, sleep, and more.',
          badge: 'Last synced: 2 days ago',
          colorScheme: 'blue',
          button: 'View Report',
          link: '/progress'
        }, {
          title: 'Appointments',
          subtitle: 'Next: June 17, 2:30 PM – Survivorship Oncology',
          badge: 'Confirmed',
          colorScheme: 'purple',
          buttons: ['Join', 'Message'],
          link: '/appointments'
        }].map((card, i) => (
          <MotionBox
            as={ThemedCard}
            key={i}
            flex="1"
            p={6}
            bg={cardBg}
            borderRadius="2xl"
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate(card.link)}
            cursor="pointer"
          >
            <Heading size="md" mb={2}>{card.title}</Heading>
            <Text fontSize="sm" mb={2} color={subText}>{card.subtitle}</Text>
            <Badge colorScheme={card.colorScheme} mb={2}>{card.badge}</Badge>
            {card.buttons ? (
              <HStack>
                {card.buttons.map(btn => <Button key={btn} size="sm" colorScheme={card.colorScheme} variant={btn === 'Join' ? 'solid' : 'outline'}>{btn}</Button>)}
              </HStack>
            ) : (
              <Button size="sm" colorScheme={card.colorScheme} variant="outline">{card.button}</Button>
            )}
          </MotionBox>
        ))}
      </Flex>
    </Box>
  );
}
