// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Article> = (args) => {
//   return <Article {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Article from './Article'

const ARTICLE = {
    id: 1,
    title: 'Praesent sollicitudin velit non ligula. ',
    body: 'Phasellus rhoncus dolor sodales, rutrum est quis, varius nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin finibus eros, et tristique nisi auctor eget. Quisque ornare metus ac dolor ornare, in dignissim felis congue. Nam lacinia maximus gravida. Vivamus scelerisque velit a risus congue finibus. Aenean mollis, libero at semper fringilla, arcu lectus pellentesque risus, eu sollicitudin odio turpis vitae massa. ',
    createdAt: '2022-12-14T13:22:37.005Z',
}
export const full = () => {
    return <Article article={ARTICLE} />
}

export const summary = () => {
    return <Article article={ARTICLE} summary={true} />
}
export default {
    title: 'Components/Article',
    component: Article,
} as ComponentMeta<typeof Article>
