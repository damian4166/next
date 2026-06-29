import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";

// Funkcja asynchronicznie pobierająca dane ze Storyblok API
async function fetchStoryblokData() {
  let storyblokApi = getStoryblokApi();
  
  return storyblokApi.get("cdn/stories/home", {
    version: "draft", // pobieramy wersję roboczą dla edytora
  });
}

export default async function Home() {
  const { data } = await fetchStoryblokData();
  const story = data.story;

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <header className="text-center mb-8">
        <p className="text-xs text-emerald-600 font-mono tracking-widest uppercase">Connected to Headless CMS</p>
      </header>
      
      // Renderuje główny komponent mapujący (page)
      <StoryblokComponent blok={story.content} />
    </div>
  );
}