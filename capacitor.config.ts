import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'chan.hospital.patient',
  appName: 'HosMan Patient',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
