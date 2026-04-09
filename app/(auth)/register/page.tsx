import { Metadata } from "next";
import Register from "./Register";

export const metadata: Metadata = {
  title: "Create Account - Nature Retreat",
  description:
    "Join Nature Retreat today to explore and book your perfect getaway in the heart of nature.",
};

export default function RegisterPage() {
  return (
    <div>
      <Register />
    </div>
  );
}
