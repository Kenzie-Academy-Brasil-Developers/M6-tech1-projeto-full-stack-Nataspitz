"use client"
import { ContactsProvider } from '@/contexts/contacts/contactsContext';
import { ClientsProvider } from '../contexts/clients/clientsContext';
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
          <ClientsProvider>
            <ContactsProvider>
              <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                />
                {children}
            </ContactsProvider>
          </ClientsProvider>
      </body>
    </html>
  )
}
