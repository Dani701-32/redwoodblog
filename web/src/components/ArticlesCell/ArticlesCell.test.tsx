import { render, screen, within } from '@redwoodjs/testing/web'

import { Loading, Empty, Failure, Success } from './ArticlesCell'
import { standard } from './ArticlesCell.mock'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//        https://redwoodjs.com/docs/testing#testing-cells
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('ArticlesCell', () => {
    it('renders Loading successfully', () => {
        expect(() => {
            render(<Loading />)
        }).not.toThrow()
    })

    it('renders Empty successfully', async () => {
        expect(() => {
            render(<Empty />)
        }).not.toThrow()
    })

    it('renders Failure successfully', async () => {
        expect(() => {
            render(<Failure error={new Error('Oh no')} />)
        }).not.toThrow()
    })

    // When you're ready to test the actual output of your component render
    // you could test that, for example, certain text is present:
    //
    // 1. import { screen } from '@redwoodjs/testing/web'
    // 2. Add test: expect(screen.getByText('Hello, world')).toBeInTheDocument()

    it('renders Success successfully', async () => {
        const articles = standard().articles
        render(<Success articles={articles} />)
        articles.forEach((article) => {
            const truncatedBody = article.body.substring(0, 10)
            const matchedBody = screen.getByText(truncatedBody, {
                exact: false,
            })
            const ellipsis = within(matchedBody).getByText('...', {
                exact: false,
            })

            expect(screen.getByText(article.title)).toBeInTheDocument()
            expect(screen.queryByText(article.body)).not.toBeInTheDocument()
            expect(ellipsis).toBeInTheDocument()
        })
    })
})
