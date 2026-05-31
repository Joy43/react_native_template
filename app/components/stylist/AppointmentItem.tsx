// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useColorScheme } from '@/hooks/useColorScheme';
// import { Card } from '../ui/Card';
// import { Avatar } from '../ui/Avatar';
// import { Badge } from '../ui/Badge';
// import { AppointmentWithDetails } from '@/types';

// interface AppointmentItemProps {
//   appointment: AppointmentWithDetails;
//   onPress?: () => void;
//   showActions?: boolean;
//   onComplete?: () => void;
//   onCancel?: () => void;
// }

// export const AppointmentItem: React.FC<AppointmentItemProps> = ({
//   appointment,
//   onPress,
//   showActions = true,
//   onComplete,
//   onCancel,
// }) => {
//   const { colors, isDark } = useColorScheme();

//   return (
//     <Card onPress={onPress} className="mb-3">
//       <View className="p-4">
//         <View className="flex-row items-center mb-3">
//           <Text className={`text-2xl font-bold mr-3 ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>
//             {appointment.time}
//           </Text>
          
//           <View className="flex-1">
//             <View className="flex-row items-center mb-1">
//               <Avatar
//                 imageUrl={appointment.client.profilePhoto}
//                 name={appointment.client.name}
//                 size="xs"
//               />
//               <Text className={`ml-2 font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
//                 {appointment.client.name}
//               </Text>
//             </View>
            
//             <Text className={`text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
//               {appointment.service.name} • {appointment.duration} min
//             </Text>
//           </View>
          
//           <Text className={`text-lg font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
//             ${appointment.price}
//           </Text>
//         </View>
        
//         {showActions && appointment.status !== 'completed' && appointment.status !== 'cancelled' && (
//           <View className="flex-row space-x-2">
//             {onComplete && (
//               <TouchableOpacity
//                 onPress={onComplete}
//                 className="flex-1 py-2 rounded-lg bg-success-500"
//               >
//                 <Text className="text-center text-sm font-semibold text-white">
//                   Complete
//                 </Text>
//               </TouchableOpacity>
//             )}
            
//             {onCancel && (
//               <TouchableOpacity
//                 onPress={onCancel}
//                 className={`flex-1 py-2 rounded-lg border ${
//                   isDark ? 'border-neutral-600' : 'border-neutral-300'
//                 }`}
//               >
//                 <Text className={`text-center text-sm font-medium ${isDark ? 'text-white' : 'text-neutral-900'}`}>
//                   Cancel
//                 </Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         )}
//       </View>
//     </Card>
//   );
// };