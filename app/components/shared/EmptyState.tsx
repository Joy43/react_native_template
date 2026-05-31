import React from 'react';
import { View, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/app/hook/Usecolorscheme';


interface EmptyStateProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  actionLabel,
  onAction,
}) => {
  const { colors, isDark } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center px-8 py-12">
      <View className={`w-20 h-20 rounded-full items-center justify-center mb-4 ${
        isDark ? 'bg-neutral-800' : 'bg-neutral-100'
      }`}>
        <Ionicons
          name={icon}
          size={40}
          color={isDark ? colors.text.tertiary : colors.text.secondary}
        />
      </View>
      
      <Text className={`text-xl font-bold mb-2 text-center ${isDark ? 'text-white' : 'text-neutral-900'}`}>
        {title}
      </Text>
      
      <Text className={`text-base mb-6 text-center ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
        {description}
      </Text>
      
      {actionLabel && onAction && (
        <Button onPress={onAction} title={actionLabel} />
      )}
    </View>
  );
};