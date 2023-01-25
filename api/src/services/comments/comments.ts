import type { QueryResolvers, CommentRelationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const comments: QueryResolvers['comments'] = () => {
    return db.comment.findMany()
}

export const comment: QueryResolvers['comment'] = ({ id }) => {
    return db.comment.findUnique({
        where: { id },
    })
}

export const Comment: CommentRelationResolvers = {
    post: (_obj, { root }) => {
        return db.comment.findUnique({ where: { id: root?.id } }).post()
    },
}
