import localFont from "next/font/local";

const NeueHaas = localFont({
  src: [
    {
      path: "../assets/fonts/neue_haas/NHaasGroteskTXPro-55Rg.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/neue_haas/NHaasGroteskTXPro-65Md.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/neue_haas/NHaasGroteskTXPro-75Bd.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

const Flaviotte = localFont({
  src: "../assets/fonts/flaviotte/Flaviotte.ttf",
});

export { NeueHaas, Flaviotte };
