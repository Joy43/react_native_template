export const Icons = {
  // Navigation
  home: 'home-outline',
  homeActive: 'home',
  search: 'search-outline',
  searchActive: 'search',
  calendar: 'calendar-outline',
  calendarActive: 'calendar',
  person: 'person-outline',
  personActive: 'person',
  
  // Actions
  add: 'add',
  close: 'close',
  checkmark: 'checkmark',
  edit: 'create-outline',
  delete: 'trash-outline',
  share: 'share-social-outline',
  more: 'ellipsis-horizontal',
  filter: 'options-outline',
  
  // Communication
  call: 'call-outline',
  message: 'chatbubble-outline',
  mail: 'mail-outline',
  notifications: 'notifications-outline',
  
  // Status
  success: 'checkmark-circle',
  error: 'close-circle',
  warning: 'warning-outline',
  info: 'information-circle-outline',
  
  // Services
  cut: 'cut-outline',
  scissors: 'cut',
  color: 'color-palette-outline',
  brush: 'brush-outline',
  
  // Other
  star: 'star',
  starOutline: 'star-outline',
  heart: 'heart',
  heartOutline: 'heart-outline',
  location: 'location-outline',
  time: 'time-outline',
  image: 'image-outline',
  camera: 'camera-outline',
  lock: 'lock-closed-outline',
  eye: 'eye-outline',
  eyeOff: 'eye-off-outline',
  arrowBack: 'arrow-back',
  arrowForward: 'arrow-forward',
  chevronBack: 'chevron-back',
  chevronForward: 'chevron-forward',
  menu: 'menu-outline',
  settings: 'settings-outline',
  help: 'help-circle-outline',
  logout: 'log-out-outline',
  
  // Social
  instagram: 'logo-instagram',
  facebook: 'logo-facebook',
  tiktok: 'logo-tiktok',
  twitter: 'logo-twitter',
  google: 'logo-google',
  apple: 'logo-apple',
  
  // Payment
  card: 'card-outline',
  cash: 'cash-outline',
  wallet: 'wallet-outline',
} as const;

export type IconName = keyof typeof Icons;