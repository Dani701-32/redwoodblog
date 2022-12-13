import type { Post } from 'types/graphql'

interface Props {
  article: Post
}
const Article = ({ article }: Props) => {
  return (
    <article key={article.id}>
      <header>
        <h2>{article.title}</h2>
      </header>
      <p>{article.body}</p>
      <div>Posted ad: {article.createdAt}</div>
    </article>
  )
}

export default Article
