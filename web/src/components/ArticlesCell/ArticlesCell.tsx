import type { ArticlesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Article from 'src/components/Article'

export const QUERY = gql`
    query ArticlesQuery {
        articles: posts {
            id
            title
            body
            createdAt
        }
    }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
    <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
    return (
        <>
            <div className="space-y-10">
                {articles.map((article) => (
                    <Article article={article} key={article.id} />
                ))}
            </div>
        </>
    )
}
