import { MotionConfig } from "framer-motion";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <MainLayout>
        <Home />
      </MainLayout>
    </MotionConfig>
  );
}

export default App;
