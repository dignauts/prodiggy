import { formats } from './i18n/requests.i18n';
import messages from './messages/en.messages.json';
 
declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof messages;
    Formats: typeof formats;
  }
}
