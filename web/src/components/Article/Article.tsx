import type { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface Props {
    article: Post
}
const truncate = (text: string, length: number) => {
    return text.substring(0, length) + '...'
}
interface Props {
    article: Omit<Post, 'createdAt'>
    summary?: boolean
}
const Article = ({ article, summary = false }: Props) => {
    return (
        <article key={article.id}>
            <header>
                <h2 className="text-xl font-semibold text-blue-700">
                    <Link to={routes.article({ id: article.id })}>
                        {article.title}
                    </Link>
                </h2>
            </header>
            <div className="mt-2 font-light text-gray-900">
                {summary ? truncate(article.body, 100) : article.body}
            </div>
            <div className="mt-3 text-sm font-light text-gray-500">
                Posted at: {article.createdAt}
            </div>
        </article>
    )
}

export default Article
