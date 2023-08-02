import { type Component, component$ } from "@builder.io/qwik";

type DreamListProps = {
  dreams : {
    id : string,
    title : string,
    description : string,
    avatar : string,
    views : number,
    nodes : number,
    image : string,
  }[]
}

export const DreamList : Component<DreamListProps> = component$(({ dreams }) => {
  return <div>{ dreams.map(({ id, title }) => (<div key = { id }>
    { title }
  </div>)) }</div>
})