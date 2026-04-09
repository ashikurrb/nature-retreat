import { Metadata } from "next";
import ForgotPassword from "./ForgotPassword";

export const metadata: Metadata = {
  title: "Forgot Password - Nature Retreat",
  description:
    "Reset your Nature Retreat password to regain access to your account.",
};

export default function ForgotPasswordPage() {
  return (
    <div>
      <ForgotPassword />
    </div>
  );
}
