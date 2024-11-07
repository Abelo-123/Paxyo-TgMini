
import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';


import '@telegram-apps/telegram-ui/dist/styles.css';


export const metadata: Metadata = {
    title: 'Your Application Title Goes Here',
    description: 'Your application description goes here',
};

export default async function RootLayout({ children }: PropsWithChildren) {

    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    );
}
