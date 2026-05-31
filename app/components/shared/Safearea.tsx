import { useColorScheme } from '@/app/hook/Usecolorscheme';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


interface SafeAreaProps {
  children: React.ReactNode;
  edges?: ('top' | 'right' | 'bottom' | 'left')[];
  className?: string;
}

export const SafeArea: React.FC<SafeAreaProps> = ({
  children,
  edges = ['top', 'bottom'],
  className = '',
}) => {
  const { isDark } = useColorScheme();

  return (
    <SafeAreaView
      edges={edges}
      className={`flex-1 ${isDark ? 'bg-neutral-900' : 'bg-white'} ${className}`}
    >
      {children}
    </SafeAreaView>
  );
};