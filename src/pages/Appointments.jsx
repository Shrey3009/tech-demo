import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Badge,
  useColorModeValue,
  Input,
  Select,
  FormControl,
  FormLabel,
  Divider,
  useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import ThemedCard from '../components/common/ThemedCard';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const initialAppointments = [
  { id: 1, title: 'Consultation with Oncologist', date: '2025-06-01', status: 'Request' },
  { id: 2, title: 'Therapy Session', date: '2025-06-03', status: 'Pending' },
  { id: 3, title: 'Dietician Follow-up', date: '2025-06-05', status: 'Approved' },
];

export default function Appointments() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [form, setForm] = useState({ title: '', date: new Date() });
  const [statusFilter, setStatusFilter] = useState('');
  const toast = useToast();

  const bg = useColorModeValue('gray.100', 'gray.900');
  const text = useColorModeValue('gray.900', 'whiteAlpha.900');
  const dateColor = useColorModeValue('gray.500', 'gray.400');

  const handleStatusChange = (id) => {
    setAppointments((prev) =>
      prev.map((appt) => {
        if (appt.id !== id) return appt;
        const nextStatus = appt.status === 'Request' ? 'Pending' : 'Approved';
        toast({
          title: `Status updated to ${nextStatus}`,
          status: 'info',
          duration: 2000,
          isClosable: true,
        });
        return { ...appt, status: nextStatus };
      })
    );
  };

  const handleReschedule = (id) => {
    const newDate = window.prompt('Enter new date (YYYY-MM-DD):');
    if (newDate) {
      setAppointments((prev) =>
        prev.map((appt) =>
          appt.id === id ? { ...appt, date: newDate } : appt
        )
      );
      toast({
        title: 'Appointment rescheduled',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleAddAppointment = () => {
    if (!form.title || !form.date) return;
    const newAppt = {
      id: appointments.length + 1,
      title: form.title,
      date: form.date.toISOString().split('T')[0],
      status: 'Request',
    };
    setAppointments([...appointments, newAppt]);
    setForm({ title: '', date: new Date() });
    toast({
      title: 'Appointment scheduled',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  const upcoming = appointments.filter((a) => a.status !== 'Approved');
  const filteredAppointments = statusFilter
    ? appointments.filter((appt) => appt.status === statusFilter)
    : appointments;

  return (
    <Box minH="100vh" bg={bg} color={text} p={8}>
      <Heading size="lg" mb={6}>Appointments (Admin)</Heading>

      <Box mb={10}>
        <Heading size="md" mb={3}>Schedule New Appointment</Heading>
        <HStack spacing={4} mb={2} align="flex-end">
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="e.g. Follow-up with Cardiologist"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Box borderRadius="md" overflow="hidden">
              <DatePicker
                selected={form.date}
                onChange={(date) => setForm({ ...form, date })}
                className="chakra-input css-1c6w6f7"
              />
            </Box>
          </FormControl>
          <Button onClick={handleAddAppointment}>Add</Button>
        </HStack>
      </Box>

      <Divider my={6} />

      <Heading size="md" mb={4}>Upcoming Appointments</Heading>
      <VStack spacing={4} align="stretch">
        {upcoming.map((appt) => (
          <ThemedCard key={appt.id}>
            <HStack justify="space-between">
              <Box>
                <Text fontWeight="bold">{appt.title}</Text>
                <Text fontSize="sm" color={dateColor}>{appt.date}</Text>
              </Box>
              <HStack>
                <Badge colorScheme={
                  appt.status === 'Request' ? 'gray' :
                  appt.status === 'Pending' ? 'orange' : 'green'
                }>
                  {appt.status}
                </Badge>
                {appt.status !== 'Approved' && (
                  <Button size="sm" onClick={() => handleStatusChange(appt.id)}>
                    {appt.status === 'Request' ? 'Submit Request' : 'Approve'}
                  </Button>
                )}
                <Button size="sm" variant="outline" onClick={() => handleReschedule(appt.id)}>Reschedule</Button>
              </HStack>
            </HStack>
          </ThemedCard>
        ))}
      </VStack>

      <Divider my={6} />

      <Heading size="md" mb={4}>All Appointments</Heading>
      <FormControl mb={4} maxW="200px">
        <FormLabel>Status Filter</FormLabel>
        <Select placeholder="All" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="Request">Request</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
        </Select>
      </FormControl>

      <VStack spacing={4} align="stretch">
        {filteredAppointments.map((appt) => (
          <ThemedCard key={appt.id}>
            <HStack justify="space-between">
              <Box>
                <Text fontWeight="bold">{appt.title}</Text>
                <Text fontSize="sm" color={dateColor}>{appt.date}</Text>
              </Box>
              <HStack>
                <Badge colorScheme={
                  appt.status === 'Request' ? 'gray' :
                  appt.status === 'Pending' ? 'orange' : 'green'
                }>
                  {appt.status}
                </Badge>
                {appt.status !== 'Approved' && (
                  <Button size="sm" onClick={() => handleStatusChange(appt.id)}>
                    {appt.status === 'Request' ? 'Submit Request' : 'Approve'}
                  </Button>
                )}
                <Button size="sm" variant="outline" onClick={() => handleReschedule(appt.id)}>Reschedule</Button>
              </HStack>
            </HStack>
          </ThemedCard>
        ))}
      </VStack>
    </Box>
  );
}
