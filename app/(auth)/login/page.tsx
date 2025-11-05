import { RectangleGoggles } from "lucide-react";

import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 bg-linear-to-br from-background via-muted/30 to-background">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="flex w-full max-w-sm flex-col gap-6">
        <a
          href="#"
          className="flex items-center gap-2.5 self-center font-display text-lg font-semibold tracking-tight hover:opacity-90 transition-opacity"
        >
          <div className="bg-primary text-primary-foreground flex size-7 items-center justify-center rounded-md shadow-lg shadow-primary/20">
            <RectangleGoggles className="size-4" />
          </div>
          oneManDev
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
