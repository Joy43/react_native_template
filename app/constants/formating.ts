export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const formatDate = (date: Date, format: 'short' | 'long' | 'full' = 'short'): string => {
  const options: Intl.DateTimeFormatOptions = {
    short: { month: 'short' as const, day: 'numeric' as const },
    long: { month: 'long' as const, day: 'numeric' as const, year: 'numeric' as const },
    full: { weekday: 'long' as const, month: 'long' as const, day: 'numeric' as const, year: 'numeric' as const },
  }[format];

  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const formatTime = (time: string): string => {
  // Converts "14:00" to "2:00 PM"
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
};

export const formatDuration = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (remainingMinutes === 0) {
    return `${hours} hr`;
  }
  return `${hours} hr ${remainingMinutes} min`;
};

export const formatPhoneNumber = (phone: string): string => {
  // Formats "1234567890" to "(123) 456-7890"
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};

export const truncate = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
};

export const formatRating = (rating: number): string => {
  return rating.toFixed(1);
};