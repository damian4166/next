import { storyblokEditable } from "@storyblok/react";

export default function Teaser({ blok }: any) {
  return (
    <div {...storyblokEditable(blok)} className="py-10 text-center bg-blue-50 rounded-xl my-4">
      <h2 className="text-3xl font-bold text-blue-700">{blok.headline}</h2>
    </div>
  );
}