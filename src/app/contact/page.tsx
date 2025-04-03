import Reviews from "@/components/Reviews";
import { getContactInfo } from "@/db/db";
import { unstable_cache } from "next/cache";

const ContactPage = async () => {
  const getCachedContactInfo = unstable_cache(
    async () => {
      return getContactInfo();
    },
    ["contact-info"], // add the user ID to the cache key
    {
      tags: ["contact-info"],
      revalidate: 5,
    }
  );

  const contactInfo = await getCachedContactInfo();

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      Contact
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div>
        <h1>Contact Information</h1>
        <p>Name: {contactInfo.name}</p>
        <p>Email: {contactInfo.email}</p>
        <p>Phone: {contactInfo.phone}</p>
      </div>
      <div>
        <Reviews />
      </div>
    </div>
  );
};

export default ContactPage;
