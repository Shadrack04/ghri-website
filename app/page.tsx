import { paths } from "@/constants/paths";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(paths.public.home);
}
