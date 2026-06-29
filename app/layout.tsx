import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "./components/Page"; // stworzymy za chwilę
import Teaser from "./components/Teaser"; // stworzymy za chwilę

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}