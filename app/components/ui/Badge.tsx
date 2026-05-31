import { useColorScheme } from '@/app/hook/Usecolorscheme';
import React from 'react';
import { View, Text } from 'react-native';


interface BadgeProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const { isDark } = useColorScheme();

  const variantClasses = {
    primary: isDark 
      ? 'bg-primary-400/20 border-primary-400' 
      : 'bg-primary-50 border-primary-200',
    secondary: isDark
      ? 'bg-neutral-700 border-neutral-600'
      : 'bg-neutral-100 border-neutral-300',
    success: isDark
      ? 'bg-success-500/20 border-success-500'
      : 'bg-success-50 border-success-200',
    warning: isDark
      ? 'bg-warning-500/20 border-warning-500'
      : 'bg-warning-50 border-warning-200',
    error: isDark
      ? 'bg-error-500/20 border-error-500'
      : 'bg-error-50 border-error-200',
    info: isDark
      ? 'bg-blue-500/20 border-blue-500'
      : 'bg-blue-50 border-blue-200',
  };

  const textVariantClasses = {
    primary: isDark ? 'text-primary-300' : 'text-primary-700',
    secondary: isDark ? 'text-neutral-300' : 'text-neutral-700',
    success: isDark ? 'text-success-400' : 'text-success-700',
    warning: isDark ? 'text-warning-400' : 'text-warning-700',
    error: isDark ? 'text-error-400' : 'text-error-700',
    info: isDark ? 'text-blue-400' : 'text-blue-700',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5',
    md: 'px-3 py-1',
    lg: 'px-4 py-1.5',
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <View 
      className={`rounded-full border ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <Text className={`${textVariantClasses[variant]} ${textSizeClasses[size]} font-medium`}>
        {label}
      </Text>
    </View>
  );
};