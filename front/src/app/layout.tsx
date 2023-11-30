import { ClientsProvider } from '../contexts/clients/clientsContext';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kenzie Contacts',
  description: 'contact management',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
          <ClientsProvider>
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
          </ClientsProvider>
      </body>
    </html>
  )
}
