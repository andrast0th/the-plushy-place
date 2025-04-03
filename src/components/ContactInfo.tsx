import { getContactInfo } from "@/db/db";
import { unstable_cache } from "next/cache";

export default async function ContactInfo() {
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
    <div>
      <h1>Contact Information</h1>
      <p>Name: {contactInfo.name}</p>
      <p>Email: {contactInfo.email}</p>
      <p>Phone: {contactInfo.phone}</p>
    </div>
  );
}
