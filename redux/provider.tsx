"use client";
import { persistStore } from "redux-persist";
import { store } from "./store";
import { Provider } from "react-redux";
import TopBar from "@/components/layout/TopBar";
import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { PersistGate } from "redux-persist/lib/integration/react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <TopBar /> */}
        <NavBar />
        {children}
        <Footer />
      </PersistGate>
    </Provider>
  );
};
