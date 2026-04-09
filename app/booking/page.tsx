import ReservationForm from "@/components/custom/ReservationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking - Nature Retreat",
  description: "Reserve your stay at our tranquil nature retreat.",
};

export default function BookingPage() {
  return (
    <div>
      <ReservationForm />
    </div>
  );
}
