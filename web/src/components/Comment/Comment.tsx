const formattedDate = (datetime: ConstructorParameters<typeof Date>[0]) => {
    const parseDate = new Date(datetime)
    const month = parseDate.toLocaleString('default', { month: 'long' })
    return `${parseDate.getDate()} ${month} ${parseDate.getFullYear()}`
}

interface Props {
    comment: {
        name: string
        createdAt: string
        body: string
    }
}

const Comment = ({ comment }: Props) => {
    return (
        <div className="rounded-lg bg-gray-200 p-8">
            <header className="flex justify-between">
                <h2 className="font-semibold text-gray-700">{comment.name}</h2>
                <time
                    className="text-xs text-gray-500"
                    dateTime={comment.createdAt}
                >
                    {formattedDate(comment.createdAt)}
                </time>
            </header>
            <p className="mt-2 text-sm">{comment.body}</p>
        </div>
    )
}

export default Comment
