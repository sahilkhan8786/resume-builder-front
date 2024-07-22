import { Outlet } from "react-router-dom";
import Header from "./components/custom/Header";
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
      <Header />

      <Outlet />
      <Toaster />
    </>
  )
}
