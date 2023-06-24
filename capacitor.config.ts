import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dev.weatherapi',
  appName: 'weatherapi',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
