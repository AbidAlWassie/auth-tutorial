"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function signUpEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirm-password") as string;

  if (password !== confirmPassword) {
    return;
  }

  await auth.api.signUpEmail({
    body: { name, email, password },
    headers: await headers(),
  });
}

export async function signInEmail(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirm-password") as string;

  if (password !== confirmPassword) {
    throw new Error("Passwords do not match");
  }

  await auth.api.signInEmail({
    body: { email, password },
    headers: await headers(),
  });
}

export async function signOut() {
  await auth.api.signOut({
    headers: await headers(),
  });
}
