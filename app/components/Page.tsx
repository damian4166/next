import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function Page({ blok }: any) {
  return (
    <main {...storyblokEditable(blok)} className="p-8 max-w-4xl mx-auto">
      {blok.body ? blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      )) : null}
    </main>
  );
}