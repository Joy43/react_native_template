// import React from 'react';
// import { View, Text } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useColorScheme } from '@/hooks/useColorScheme';
// import { Card } from '../ui/Card';

// interface StatsCardProps {
//   icon: keyof typeof Ionicons.glyphMap;
//   label: string;
//   value: string | number;
//   trend?: {
//     value: number;
//     direction: 'up' | 'down';
//   };
//   iconColor?: string;
// }

// export const StatsCard: React.FC<StatsCardProps> = ({
//   icon,
//   label,
//   value,
//   trend,
//   iconColor,
// }) => {
//   const { colors, isDark } = useColorScheme();

//   return (
//     <Card className="flex-1">
//       <View className="p-4">
//         <View className="flex-row items-center justify-between mb-2">
//           <View className={`w-10 h-10 rounded-full items-center justify-center ${
//             isDark ? 'bg-neutral-700' : 'bg-neutral-100'
//           }`}>
//             <Ionicons
//               name={icon}
//               size={20}
//               color={iconColor || colors.primary}
//             />
//           </View>
          
//           {trend && (
//             <View className="flex-row items-center">
//               <Ionicons
//                 name={trend.direction === 'up' ? 'trending-up' : 'trending-down'}
//                 size={16}
//                 color={trend.direction === 'up' ? colors.success : colors.error}
//               />
//               <Text className={`ml-1 text-sm font-medium ${
//                 trend.direction === 'up' ? 'text-success-500' : 'text-error-500'
//               }`}>
//                 {trend.value}%
//               </Text>
//             </View>
//           )}
//         </View>
        
//         <Text className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
//           {value}
//         </Text>
        
//         <Text className={`text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
//           {label}
//         </Text>
//       </View>
//     </Card>
//   );
// };