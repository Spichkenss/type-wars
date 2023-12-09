enum Routes {
  Home = "home",
  SignIn = "signin"
}

export const Pages: Record<Routes, string> = {
  [Routes.Home]: "/",
  [Routes.SignIn]: "/auth/sign-in",
};
