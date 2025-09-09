import Link from "next/link"
import { paths } from "@/constants/paths"

export default function FooterList() {
  return (
    <div className="grid grid-cols-3">
      {/* Home */}
      <div className="flex flex-col items-start">
        <p className="mb-3">Home</p>
        <nav className="text-md flex flex-col flex-wrap justify-center gap-3">
          <Link href={paths.public.about} className="hover:underline">
            About Us
          </Link>
          <Link href={paths.public.contact_us} className="hover:underline">
            Projects
          </Link>
          <Link href="#" className="hover:underline">
            Get Involved
          </Link>
          <Link href="#" className="hover:underline">
            Blog
          </Link>
          <Link href="#" className="hover:underline">
            Contact Us
          </Link>
          <Link href="#" className="hover:underline">
            Podcast
          </Link>
        </nav>
      </div>

      {/* our service */}
      <div className="flex flex-col items-start">
        <p className="mb-3">Our Service</p>
        <nav className="flex flex-col flex-wrap justify-center gap-3 text-sm">
          <Link href={paths.public.about} className="hover:underline">
            Efficiency
          </Link>
          <Link href={paths.public.contact_us} className="hover:underline">
            Solutions
          </Link>
          <Link href="#" className="hover:underline">
            Updates
          </Link>
        </nav>
      </div>

      {/* Socials */}
      <div className="flex flex-col items-start">
        <p className="mb-3">Socials</p>
        <nav className="flex flex-col flex-wrap justify-center gap-3 text-sm">
          <Link href={paths.public.privacy_policy} className="hover:underline">
            Twitter
          </Link>
          <Link href={paths.public.term_of_use} className="hover:underline">
            Instagram
          </Link>
          <Link href={paths.public.term_of_use} className="hover:underline">
            Threads
          </Link>
        </nav>
      </div>
    </div>
  )
}
