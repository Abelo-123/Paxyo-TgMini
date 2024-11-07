"use client";

import '@telegram-apps/telegram-ui/dist/styles.css';
import { AvatarStack, AppRoot, Avatar } from '@telegram-apps/telegram-ui';// Adjust as necessary
import { useEffect, useState } from "react";
import axios from "axios";

const TELEGRAM_BOT_TOKEN = "7670501487:AAE78RqFbU3dfODb8-LFWNLs7mxBpJ6XnPI"; // Replace with your bot token

// ... existing imports ...
// Create a new TypeScript declaration file (e.g., `telegram.d.ts`)
// Or add this at the top of your `page.tsx` file

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initDataUnsafe: {
          user: {
            id: number; // User ID
            username: string;
            first_name: string;
            last_name: string;
          };
        };
      };
    };
  }
}


const TelegramApp = () => {
  const [userData, setUserData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    userId: undefined, // Initialize userId
  });

  const [ph, setPh] = useState('')
  useEffect(() => {
    // Load the Telegram Web App JavaScript SDK
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-web-app.js?2";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const Telegram = window.Telegram;

      if (Telegram && Telegram.WebApp) {
        const { user } = Telegram.WebApp.initDataUnsafe;
        setUserData({
          username: user.username,
          firstName: user.first_name,
          lastName: user.last_name,
          userId: user.id, // Store user ID
        });

        // Fetch user profile photos
        fetchUserProfilePhotos(user.id);
      } else {
        console.error("Telegram Web App API not loaded");
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const fetchUserProfilePhotos = async (userid) => {
    try {
      const response = await axios.get(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUserProfilePhotos?user_id=${userid}`);

      if (response.data.ok) {
        const file_id = response.data.result.photos[0]?.[0].file_id; // Access the first photo in the first array

        const resp = await axios.get(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getFile?file_id=${file_id}`);

        if (resp.data.ok) {
          setPh(resp.data.result.file_path);
        }
        // Wrap it in an array to match the existing state structure
      }

    } catch (error) {
      console.error("Error fetching user profile photos:", error);
    }
  };

  return (
    <div>
      <h1>Telegram Web App</h1>
      <h2>{userData.firstName} {userData.lastName}</h2>
      <p>Username: @{userData.username}</p>
      <p>User ID: {userData.userId}</p> {/* Display user ID */}

      <h3>User Profile Photos7:</h3>
      <img src={`https://api.telegram.org/file/bot${TELEGRAM_BOT_TOKEN}/${ph}`} style={{ width: '100px', height: '100px', margin: '5px' }} />
      <AppRoot>
        <AvatarStack>
          <Avatar
            size={48}
            src="https://avatars.githubusercontent.com/u/84640980?v=4"
          />
          <Avatar
            size={48}
            src="https://avatars.githubusercontent.com/u/84640980?v=4"
          />
          <Avatar
            size={48}
            src="https://avatars.githubusercontent.com/u/84640980?v=4"
          />
          <Avatar
            size={48}
            src="https://avatars.githubusercontent.com/u/84640980?v=4"
          />
        </AvatarStack>
      </AppRoot>
    </div>
  );
};


export default TelegramApp;