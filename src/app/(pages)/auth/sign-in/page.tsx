import { SignInWithExternalProviderButton } from "@/features/auth/sign-in";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-20 w-full max-w-[400px] rounded border border-border p-4">
        <h2 className="mb-6 text-center font-bold">Sign in</h2>
        <SignInWithExternalProviderButton provider="google" variant="google" />
      </div>
    </div>
  );
}
