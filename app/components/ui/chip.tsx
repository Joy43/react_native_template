import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/app/hook/Usecolorscheme';

interface ChipProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  selected = false,
  onPress,
  icon,
  className = '',
}) => {
  const { colors, isDark } = useColorScheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`px-4 py-2 rounded-full flex-row items-center ${
        selected
          ? isDark
            ? 'bg-primary-400'
            : 'bg-primary-500'
          : isDark
          ? 'bg-neutral-800 border border-neutral-700'
          : 'bg-neutral-100 border border-neutral-300'
      } ${className}`}
      activeOpacity={0.7}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={16}
          color={selected ? '#ffffff' : isDark ? colors.text.primary : colors.text.secondary}
          style={{ marginRight: 6 }}
        />
      )}
      <Text
        className={`text-sm font-medium ${
          selected ? 'text-white' : isDark ? 'text-white' : 'text-neutral-700'
        }`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};