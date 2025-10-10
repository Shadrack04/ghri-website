import Image from "next/image";
import Link from "next/link";
import { icons } from "@/constants/icons";
import { siteConfig } from "@/constants/site";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import FooterList from "./footer-list";

export default function Footer() {
  return (
    <footer className="w-full bg-background px-4 md:px-2 lg:px-18">
      {/* Top Links */}
      <div className=" py-4">
        <div className=" w-full  flex h-full flex-wrap justify-center px-4 py-6 sm:py-6">
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src={icons.loveIcon}
                  alt="love icon"
                  className="size-6"
                />
                <p>GHRI</p>
              </div>
              <div className=" ">
                <div className="mb-4 flex flex-col gap-1">
                  <p className="">Global Health Care in Nigeria</p>
                  <p>123 GHRI Street, Abuja, Nigeria</p>
                  <p>contact@ghri.org</p>
                </div>
                <div className="text-primary flex items-center gap-4">
                  <Link
                    target="_blank"
                    href={siteConfig.links.linkedin}
                    aria-label="LinkedIn"
                    className="hover:text-white"
                  >
                    <Linkedin size={20} />
                  </Link>
                  <Link
                    target="_blank"
                    href={siteConfig.links.twitter}
                    aria-label="Twitter"
                    className="hover:text-white"
                  >
                    <Twitter size={20} />
                  </Link>
                  <Link
                    target="_blank"
                    href={siteConfig.links.facebook}
                    aria-label="Facebook"
                    className="hover:text-white"
                  >
                    <Facebook size={20} />
                  </Link>

                  <Link
                    target="_blank"
                    href={siteConfig.links.instagram}
                    aria-label="Instagram"
                    className="hover:text-white"
                  >
                    <Instagram size={20} />
                  </Link>
                </div>
              </div>
            </div>
            <FooterList />

            {/* <Image
              src={icons.googleIcon}
              alt="google store badge"
              className="mt-5 md:mt-0"
            /> */}
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-custom-gray-300 border-t-1 px-4">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-4 text-sm text-gray-300 md:flex-row 2xl:px-0">
          <div className="text-custom-gray-300 mb-2 text-sm md:mb-0">
            © All rights reserved 2024.
          </div>
          <div className="text-custom-gray-300 flex items-center gap-4 pr-8 text-sm">
            <p>Terms</p>
            <p>Privacy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ;<div className="container mx-auto flex flex-col items-center justify-center py-6">
//   <nav className="flex flex-wrap items-center justify-center gap-8 text-sm text-white">
//     <Link href={paths.public.term_of_use} className="hover:underline">
//       Term of Use
//     </Link>
//     <Link href={paths.public.privacy_policy} className="hover:underline">
//       Privacy Policy
//     </Link>
//     <Link href={paths.public.contact_us} className="hover:underline">
//       Contact us
//     </Link>
//   </nav>
// </div>

// social links

{
  /* <Link
target="_blank"
href={siteConfig.links.twitter}
aria-label="Twitter"
className="hover:text-white"
>
<Twitter size={20} />
</Link>
<Link
target="_blank"
href={siteConfig.links.facebook}
aria-label="Facebook"
className="hover:text-white"
>
<Facebook size={20} />
</Link>
<Link
target="_blank"
href={siteConfig.links.linkedin}
aria-label="LinkedIn"
className="hover:text-white"
>
<Linkedin size={20} />
</Link>
<Link
target="_blank"
href={siteConfig.links.instagram}
aria-label="Instagram"
className="hover:text-white"
>
<Instagram size={20} />
</Link> */
}
