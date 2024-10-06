import './globals.css';
import { UserProvider } from './userContext';

export default function RootLayout({ children }) {
  console.log('UserProvider is wrapping the app'); 
  return (
    <html lang="en">
      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
