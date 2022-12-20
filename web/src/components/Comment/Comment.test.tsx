import { render, screen } from '@redwoodjs/testing/web'

import Comment from './Comment'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Comment', () => {
    it('renders successfully', () => {
        const comment = {
            name: 'test comment',
            body: 'this is a comment',
            createdAt: '2022-01-02T12:34:56Z',
        }

        render(<Comment comment={comment} />)

        expect(screen.getByText(comment.name)).toBeInTheDocument()
        expect(screen.getByText(comment.body)).toBeInTheDocument()

        const dateExpect = screen.getByText('2 janeiro 2022')
        expect(dateExpect).toBeInTheDocument()
        expect(dateExpect.nodeName).toEqual('TIME')
        expect(dateExpect).toHaveAttribute('datetime', comment.createdAt)
    })
})
