import { redirect } from "next/navigation";

export default function LoginPage() {
  // 👇 Change the path below to your workspace or main chat route
  redirect("/en/chat");
}
