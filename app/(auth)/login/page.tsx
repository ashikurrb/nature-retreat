import { Metadata } from "next";
import Login from "./Login";

export const metadata: Metadata = {
  title: "Login - Nature Retreat",
  description:
    "Access your Nature Retreat account to manage your bookings and preferences.",
};

export default function LoginPage() {
  return (
    <div>
      <Login />
    </div>
  );
}
