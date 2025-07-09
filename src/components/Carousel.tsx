import { createEffect, createSignal, type Component } from "solid-js";

export type Video = {
  id: string;
  width: number;
  height: number;
};

export const Carousel: Component<{ videos: readonly Video[] }> = (props) => {
  const [idx, setIdx] = createSignal(0);
  const { videos } = props;
  return (
    <div>
      <div>
        {videos.map((vid, i) => (
          <iframe
            src={`https://www.youtube.com/embed/${vid.id}`}
            title="YouTube video player"
            allowfullscreen
            class={`mx-auto aspect-video w-full ${idx() === i ? "" : "hidden"}`}
          />
        ))}
      </div>
      <div class="mx-auto mt-6 flex w-max items-center gap-5">
        <button
          class="h-10 w-10 rounded-full bg-indigo-700 text-xl text-indigo-200"
          onClick={() => setIdx((idx) => (idx || videos.length) - 1)}
        >
          &larr;
        </button>
        <p class="font-bold text-indigo-700 sm:hidden">
          {idx() + 1} of {videos.length}
        </p>
        {videos.map((_, i) => (
          <button
            class={`hidden h-10 w-10 rounded-full text-indigo-200 sm:block ${idx() === i ? "bg-blue-600" : "bg-indigo-700"}`}
            onClick={() => setIdx(i)}
          >
            {i + 1}
          </button>
        ))}
        <button
          class="h-10 w-10 rounded-full bg-indigo-700 text-xl text-indigo-200"
          onClick={() => setIdx((idx) => (idx + 1) % videos.length)}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};
