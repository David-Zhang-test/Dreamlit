import { Resource, component$, useResource$, useSignal } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { faker } from "@faker-js/faker";
import { Carousel } from "~/components/carousel/carousel";
import { DreamList } from "~/components/dream-list/dream-list";
import { Footer } from "~/components/footer/footer";
import { GenreFilter } from "~/components/genre-filter/genre-filter";
import { GenreSelector } from "~/components/genre-selector/genre-selector";
import { Header } from "~/components/header/header";
import { SearchBar } from "~/components/search-bar/search-bar";

export const useCarouselImages = routeLoader$(() => {
  return Array(faker.number.int({ min: 4, max: 6 })).fill(0).map(() => faker.image.url())
})

export const useGenres = routeLoader$(() => {
  return ["Recommended", "Fan Fiction", "Science Fiction", "RPG"].concat(Array(faker.number.int({ min: 10, max: 12 })).fill(0).map(() => faker.lorem.word()))
})

export const useGenreFilter = routeLoader$(() => {
  return ["Default", "Recent", "Hot", "Nodes"]
})



export default component$(() => {
  const images = useCarouselImages();
  const genres = useGenres();
  const genreFilter = useGenreFilter();
  const selectedGenre = useSignal("");
  const selectedFilter = useSignal("");

  const dreamsResource = useResource$(async ({ track }) => {
    track(() => selectedFilter.value);
    track(() => selectedGenre.value);

    // make fake call now
    return Array(faker.number.int({ min : 10, max : 30 })).fill(0).map(() => ({
      id : faker.database.mongodbObjectId(),
      title : faker.lorem.words({ min : 1, max : 2 }),
      description : faker.lorem.sentence(),
      avatar : faker.image.avatar(),
      views : faker.number.int({ min : 0, max : 1000 }),
      nodes : faker.number.int({ min : 0, max : 1000 }),
      image : faker.image.url(),
    }))
  })

  return (
    <>
      <Header></Header>
      <SearchBar />
      <Carousel images = { images.value } />
      <GenreSelector genres = { genres.value } selected = { selectedGenre } />
      <div style = {{
        padding : "6px 20px 8px",
        display : "flex",
      }}>
        <div style = {{
          borderBottom : "1px solid rgb(237, 237, 237)",
          flexGrow : 1
        }}></div>
      </div>
      <GenreFilter filters = { genreFilter.value } selected = { selectedFilter } />
      <Resource value = { dreamsResource } onResolved = {(dreams) => (
        <DreamList dreams = { dreams } />
      )} />
      <Footer></Footer>
    </>
  );
});

export const head: DocumentHead = {
  title: "DreamLit",
  meta: [
    {
      name: "DreamLit AI",
      content: "DreamLit AI is a platform for creating and sharing AI generated dreams!",
    },
  ],
};
