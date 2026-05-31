export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  profilePhoto?: string;
  preferences?: ClientPreferences;
  createdAt: Date;
}

export interface ClientPreferences {
  favoriteStylists: string[];
  notificationsEnabled: boolean;
  emailNotifications: boolean;
  smsNotifications: boolean;
}

export interface Review {
  id: string;
  appointmentId: string;
  clientId: string;
  stylistId: string;
  rating: number; // 1-5
  comment?: string;
  photos?: string[];
  createdAt: Date;
  response?: StylistResponse;
}

export interface StylistResponse {
  message: string;
  createdAt: Date;
}

export interface ClientNote {
  id: string;
  stylistId: string;
  clientId: string;
  note: string;
  isWarning: boolean;
  createdAt: Date;
  updatedAt: Date;
}