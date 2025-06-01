import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  Flex,
  HStack,
  useColorModeValue,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import WithLoveSVG from '../assets/with-love.svg?react';
import DoctorBroSVG from '../assets/Doctor-bro.svg?react';
import CareConciergeSVG from '../assets/concierge.svg?react';
import FriendSupportSVG from '../assets/friend.svg?react';

const MotionBox = motion(Box);

export default function LandingPage() {
  const { isAuthenticated } = useAuth();
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const sectionBg = useColorModeValue('gray.50', 'gray.800');
  const svgFill = useColorModeValue('#2D3748', '#CBD5E0');
  const cardBg = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box minH="100vh" bg={sectionBg}>
      {/* Visual Separation from Navbar */}
      <Box h={{ base: 6, md: 8 }} bg={sectionBg} />

      {/* Empowering Your Health Journey */}
      <VStack spacing={6} mt={{ base: 20, md: 24 }} textAlign="center" px={6}>
        <Heading size="2xl">Empowering Your Health Journey</Heading>
        <Text fontSize="lg" color={textColor} maxW="3xl">
          Our physician-led platform helps survivors live longer, healthier lives with personalized
          plans, proactive care, and holistic support.
        </Text>
      </VStack>

      {/* Personalized Plan & See An Oncologist */}
      <MotionBox
        maxW="6xl"
        mx="auto"
        mt={20}
        px={6}
        textAlign="center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="center"
          align="center"
          gap={12}
        >
          <Box textAlign="center" maxW="sm">
            <Box mx="auto" mb={4} maxW="200px">
              <WithLoveSVG style={{ width: '100%', height: 'auto', fill: svgFill }} />
            </Box>
            <Heading size="lg" mb={2}>A Personalized Plan</Heading>
            <Text fontSize="md" color={textColor}>
              A plan to help you optimize your lifespan, address treatment-related side effects,
              and achieve your biggest health goals.
            </Text>
          </Box>

          <Box textAlign="center" maxW="sm">
            <Box mx="auto" mb={4} maxW="200px">
              <DoctorBroSVG style={{ width: '100%', height: 'auto', fill: svgFill }} />
            </Box>
            <Heading size="lg" mb={2}>See An Oncologist</Heading>
            <Text fontSize="md" color={textColor}>
              Our oncologist meets you where you are—whether addressing concerns or simply talking
              through survivorship. We’re here for it all.
            </Text>
          </Box>
        </Flex>
      </MotionBox>

      {/* Care Concierge & Friend Support */}
      <MotionBox
        maxW="6xl"
        mx="auto"
        mt={20}
        px={6}
        textAlign="center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="center"
          align="center"
          gap={12}
        >
          <Box textAlign="center" maxW="sm">
            <Box mx="auto" mb={4} maxW="200px">
              <CareConciergeSVG style={{ width: '100%', height: 'auto', fill: svgFill }} />
            </Box>
            <Heading size="lg" mb={2}>Care Concierge</Heading>
            <Text fontSize="md" color={textColor}>
              Our Care Concierge team is dedicated to coordinating your appointments, managing follow-ups,
              and ensuring seamless communication between you and your healthcare providers.
            </Text>
          </Box>

          <Box textAlign="center" maxW="sm">
            <Box mx="auto" mb={4} maxW="200px">
              <FriendSupportSVG style={{ width: '100%', height: 'auto', fill: svgFill }} />
            </Box>
            <Heading size="lg" mb={2}>A Friend That Gets You</Heading>
            <Text fontSize="md" color={textColor}>
              Experience compassionate support from professionals who understand your journey, offering
              guidance and empathy every step of the way.
            </Text>
          </Box>
        </Flex>
      </MotionBox>

      {/* Who We Are Section */}
      <MotionBox
        maxW="6xl"
        mx="auto"
        mt={20}
        px={6}
        textAlign="center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading
          textTransform="uppercase"
          fontSize="md"
          fontWeight="bold"
          color="gray.500"
          letterSpacing="wide"
          mb={8}
        >
          Who We Are
        </Heading>

        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="center"
          align="flex-start"
          gap={12}
          px={{ base: 2, md: 6 }}
        >
          <Box maxW="sm" textAlign="center">
            <Text fontSize="md" color={textColor}>
              Your Pathway physician complements your existing care providers by offering additional
              wrap-around support and care management tools.
            </Text>
          </Box>

          <Box maxW="sm" textAlign="center">
            <Text fontSize="md" color={textColor}>
              Founded by cancer survivors for survivors. Here for you every step of the way, whether you
              just completed treatment or are many years out.
            </Text>
          </Box>
        </Flex>
      </MotionBox>
      {/* How It Works Section */}
      <MotionBox maxW="6xl" mx="auto" mt={20} px={6} textAlign="center">
        <Heading size="lg" mb={8}>How It Works</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {[
            { title: 'Meet Your Oncologist', desc: 'Start with a virtual consultation with your survivorship oncologist.' },
            { title: 'Get Your Plan', desc: 'Receive a custom care plan tailored to your lifestyle and medical history.' },
            { title: 'Track and Thrive', desc: 'Use our platform to monitor progress and stay connected with experts.' }
          ].map((item, idx) => (
            <Box key={idx} p={6} rounded="lg" bg={cardBg} shadow="md">
              <Heading size="md" mb={2}>{item.title}</Heading>
              <Text color={textColor}>{item.desc}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </MotionBox>

      {/* Testimonials Section */}
      <MotionBox maxW="6xl" mx="auto" mt={20} px={6} textAlign="center">
        <Heading size="lg" mb={8}>What Our Survivors Say</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box bg={cardBg} p={6} rounded="lg" shadow="lg">
            <HStack mb={4}><Icon as={FaQuoteLeft} color="teal.400" /><Text fontStyle="italic">Pathway gave me peace of mind and real results.</Text></HStack>
            <Text fontWeight="bold">— Emily R.</Text>
          </Box>
          <Box bg={cardBg} p={6} rounded="lg" shadow="lg">
            <HStack mb={4}><Icon as={FaQuoteLeft} color="teal.400" /><Text fontStyle="italic">The care team truly understands survivorship and helped me thrive again.</Text></HStack>
            <Text fontWeight="bold">— James L.</Text>
          </Box>
        </SimpleGrid>
      </MotionBox>

      {/* Backed by Experts Section */}
      <MotionBox maxW="6xl" mx="auto" mt={20} px={6} textAlign="center">
        <Heading size="lg" mb={4}>Backed by Experts</Heading>
        <Text fontSize="md" maxW="2xl" mx="auto" color={textColor}>
          Trusted by leading oncology specialists and built with evidence-based practices, our platform ensures that your care is always in expert hands.
        </Text>
      </MotionBox>

      {/* Lifestyle Message */}
      <MotionBox
        maxW="4xl"
        mx="auto"
        mt={20}
        px={6}
        pb={20}
        textAlign="center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Text fontSize="xl" color={textColor}>
          Our physician-led, lifestyle-first program delivers longevity and proactive medicine for
          those with a history of cancer.
        </Text>
      </MotionBox>

      {/* Survivorship Care Is Flawed */}
      <MotionBox
        mt={20}
        px={6}
        py={12}
        bgGradient="linear(to-b, whiteAlpha.100, purple.800)"
        textAlign="center"
        color="whiteAlpha.900"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Heading fontSize="3xl" fontWeight="bold" color="purple.100" mb={8}>
          Survivorship Care Is <Text as="span" color="purple.300">Flawed</Text>
        </Heading>

        <Flex
          justify="center"
          direction={{ base: 'column', md: 'row' }}
          gap={6}
          mb={10}
        >
          <Box
            bg="purple.700"
            p={6}
            borderRadius="xl"
            boxShadow="lg"
            maxW="sm"
            textAlign="left"
          >
            <HStack mb={2}>
              <Box boxSize={3} bg="yellow.300" borderRadius="full" />
              <Text>
                Survivors face average annual medical costs of over{' '}
                <Text as="span" color="cyan.200" fontWeight="bold">
                  $5,517.60
                </Text>{' '}
                for continued care related to treatment
              </Text>
            </HStack>
          </Box>

          <Box
            bg="purple.700"
            p={6}
            borderRadius="xl"
            boxShadow="lg"
            maxW="sm"
            textAlign="left"
          >
            <HStack mb={2}>
              <Box boxSize={3} bg="yellow.300" borderRadius="full" />
              <Text>
                By age 45, survivors are{' '}
                <Text as="span" color="cyan.200" fontWeight="bold">
                  highly likely
                </Text>{' '}
                to develop a significant health condition related to their cancer treatment
              </Text>
            </HStack>
          </Box>
        </Flex>

        <Text fontSize="lg" mt={4}>
          At Pathway, we know these outcomes are{' '}
          <Text as="span" color="yellow.300" fontWeight="bold">
            UNACCEPTABLE
          </Text>
        </Text>

        <Text fontSize="lg" mt={2}>
          We are here to help survivors live{' '}
          <Text as="span" fontWeight="bold" color="green.200">
            healthier
          </Text>{' '}
          for{' '}
          <Text as="span" fontWeight="bold" color="green.200">
            longer
          </Text>
        </Text>
      </MotionBox>

      {/* Final CTA Section at Bottom */}
<MotionBox
  mt={20}
  px={6}
  pb={20}
  textAlign="center"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <Heading
    as="h1"
    fontSize={{ base: "3xl", md: "5xl" }}
    fontWeight="bold"
    lineHeight="shorter"
  >
    The Next Chapter in Your Health Starts with{' '}
    <Text as="span" color="teal.400" fontStyle="italic">
      a Plan
    </Text>
  </Heading>

  <VStack spacing={4} mt={4}>
    <Text
      fontSize={{ base: "md", md: "lg" }}
      color={textColor}
      maxW="2xl"
      mx="auto"
    >
      Built for survivors. Backed by science. Guided with care.
    </Text>

    <Button
      size="md"
        bg="brand.primary"
  color="black"
      variant="solid"
      px={8}
      py={5}
      fontWeight="semibold"
    >
      Get Started
    </Button>mt={20} 
  </VStack>
</MotionBox>

    </Box>
  );
}
