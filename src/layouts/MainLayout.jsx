import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/ui/Loader";

export default function MainLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <main>{children}</main>
    </>
  );
}
