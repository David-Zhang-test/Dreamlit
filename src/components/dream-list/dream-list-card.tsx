import { type Component, component$ } from "@builder.io/qwik";

type DreamListCardProps = {
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

export const DreamList : Component<DreamListCardProps> = component$(({ dreams }) => {
  return <div>{ dreams.map(({ id, title }) => (<div key = { id }>
    { title }
  </div>)) }</div>
})