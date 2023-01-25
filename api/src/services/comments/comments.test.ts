import type { Comment } from '@prisma/client'

import { comments } from './comments'
import type { StandardScenario } from './comments.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('comments', () => {
    scenario('returns all comments', async (scenario: StandardScenario) => {
        const result = await comments()

        expect(result.length).toEqual(Object.keys(scenario.comment).length)
    })
})
