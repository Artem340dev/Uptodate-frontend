'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import './globals.css';
import clsx from "clsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from 'react-redux';
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

import { NextIntlClientProvider } from 'next-intl';
import { defaultLocale, locales } from "@/next-intl.config";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

const queryClient = new QueryClient();

const RootLayout = ({ 
  children 
}: Readonly<{children: React.ReactNode}>) => {
  return (
    <html className="bg-backgroundColor" lang="en">
      <body
        className={clsx(
          'bg-backgroundColor',
          'antialiased'
        )}
      >
        <NextUIProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </PersistGate>
          </Provider>
        </NextUIProvider>
      </body>
    </html>
  );
}

export default RootLayout;