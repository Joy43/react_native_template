import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/app/hook/Usecolorscheme';


interface IconButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  size?: number;
  color?: string;
  variant?: 'default' | 'filled' | 'outlined';
  disabled?: boolean;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  size = 24,
  color,
  variant = 'default',
  disabled = false,
  className = '',
}) => {
  const { colors, isDark } = useColorScheme();

  const variantClasses = {
    default: '',
    filled: isDark ? 'bg-neutral-800 p-2 rounded-full' : 'bg-neutral-100 p-2 rounded-full',
    outlined: `border ${isDark ? 'border-neutral-700' : 'border-neutral-300'} p-2 rounded-full`,
  };

  const iconColor = color || (isDark ? colors.text.primary : colors.text.primary);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`${variantClasses[variant]} ${disabled ? 'opacity-50' : ''} ${className}`}
      activeOpacity={0.6}
    >
      <Ionicons name={icon} size={size} color={iconColor} />
    </TouchableOpacity>
  );
};