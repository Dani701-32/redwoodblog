import type { ComponentMeta } from '@storybook/react'

import ArticlePage from './ArticlePage'

export const generated = () => {
  return <ArticlePage />
}

export default {
  title: 'Pages/ArticlePage',
  component: ArticlePage,
} as ComponentMeta<typeof ArticlePage>
