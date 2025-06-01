import {
  Box,
  Heading,
  Text,
  Stack,
  Divider,
  Badge,
  List,
  ListItem,
  ListIcon
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const mockBioMarkers = [
  { name: "Blood Pressure", value: "120/80 mmHg" },
  { name: "Heart Rate", value: "72 bpm" },
  { name: "Glucose Level", value: "95 mg/dL" },
  { name: "Vitamin D", value: "30 ng/mL" },
];

const careTeam = [
  { role: "Primary Physician", name: "Dr. Asha Patel" },
  { role: "Therapist", name: "Dr. Ravi Kumar" },
  { role: "Dietician", name: "Neha Shah" },
];

export default function HealthSummary() {
  return (
    <Box p={6}>
      <Heading size="lg" mb={4}>Health Summary</Heading>

      <Box mb={6}>
        <Text fontWeight="bold">Latest Bio Markers</Text>
        <Stack spacing={3} mt={2}>
          {mockBioMarkers.map((marker, idx) => (
            <Box key={idx} p={3} borderWidth="1px" borderRadius="md">
              <Text>{marker.name}: <strong>{marker.value}</strong></Text>
            </Box>
          ))}
        </Stack>
      </Box>

      <Divider my={6} />

      <Box>
        <Text fontWeight="bold">Care Team</Text>
        <List spacing={3} mt={2}>
          {careTeam.map((member, idx) => (
            <ListItem key={idx}>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              {member.role}: <strong>{member.name}</strong>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
