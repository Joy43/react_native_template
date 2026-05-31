import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AppointmentsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-primary items-center justify-center" edges={['top']}>
      <Ionicons name="calendar-outline" size={52} color="#E8B923" />
      <Text className="text-white font-bold text-xl mt-4">Your Bookings</Text>
      <Text className="text-muted text-sm mt-2">No appointments yet.</Text>
    </SafeAreaView>
  );
}
