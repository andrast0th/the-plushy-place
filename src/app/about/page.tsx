import ContactInfo from "@/components/ContactInfo";
import Reviews from "@/components/Reviews";

export const metadata = {
  title: "About Us - The Plushy Place",
  description: "Learn more about The Plushy Place, our mission, and what we offer.",
};

export default function About() {
  return (
    <div>
      <div className="bg-pink-500 p-5 rounded-lg mt-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <ContactInfo />
      <Reviews />
    </div>
  );
}
