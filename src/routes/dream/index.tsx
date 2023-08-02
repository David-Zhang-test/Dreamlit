import { component$ } from "@builder.io/qwik";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";
import { SearchBar } from "~/components/search-bar/search-bar";

export default component$(() => {
  return (
    <>
      <Header></Header>
      <SearchBar />
      <Footer></Footer>
    </>
  );
});