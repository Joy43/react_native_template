import { useColorScheme } from '@/app/hook/Usecolorscheme';
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';


interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  className = '',
}) => {
  const { colors, isDark } = useColorScheme();

  const baseClasses = 'rounded-xl flex-row items-center justify-center';
  
  const variantClasses = {
    primary: isDark 
      ? 'bg-primary-400' 
      : 'bg-primary-500',
    secondary: isDark
      ? 'bg-neutral-700'
      : 'bg-neutral-100',
    outline: isDark
      ? 'border-2 border-neutral-600 bg-transparent'
      : 'border-2 border-neutral-300 bg-transparent',
    ghost: 'bg-transparent',
    danger: 'bg-error-500',
  };

  const sizeClasses = {
    sm: 'px-4 py-2',
    md: 'px-6 py-3',
    lg: 'px-8 py-4',
  };

  const textVariantClasses = {
    primary: 'text-white',
    secondary: isDark ? 'text-white' : 'text-neutral-900',
    outline: isDark ? 'text-white' : 'text-neutral-900',
    ghost: isDark ? 'text-primary-400' : 'text-primary-600',
    danger: 'text-white',
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const disabledClass = disabled || loading ? 'opacity-50' : '';
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClass} ${widthClass} ${className}`}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'primary' || variant === 'danger' ? '#ffffff' : colors.primary} 
          size="small"
        />
      ) : (
        <>
          {icon && <View className="mr-2">{icon}</View>}
          <Text className={`${textVariantClasses[variant]} ${textSizeClasses[size]} font-semibold`}>
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};