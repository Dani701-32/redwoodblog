import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
    children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
    const { isAuthenticated, currentUser, logOut } = useAuth()
    return (
        <>
            <header className="relative flex items-center justify-between bg-blue-700 py-4 px-8 text-white">
                <div className="flex-between text-5xl font-semibold tracking-tight">
                    <h1 className="text-5xl font-semibold tracking-tight">
                        <Link
                            to={routes.home()}
                            className="text-blue-400 transition duration-100 hover:text-blue-100"
                        >
                            Redwood Blog
                        </Link>
                    </h1>
                </div>
                <nav>
                    <ul className="relative flex items-center font-light">
                        <li>
                            <Link
                                className="rounded py-2 px-4 transition duration-100 hover:bg-blue-600"
                                to={routes.about()}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="rounded py-2 px-4 transition duration-100 hover:bg-blue-600"
                                to={routes.contact()}
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            {isAuthenticated ? (
                                <div>
                                    <button
                                        type="button"
                                        onClick={logOut}
                                        className="py-2 px-4"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <Link to={routes.login()} className="py-2 px-4">
                                    Login
                                </Link>
                            )}
                        </li>
                    </ul>
                    {isAuthenticated && (
                        <div className="absolute  right-0 mr-12 text-xs text-blue-300">
                            {currentUser.email}
                        </div>
                    )}
                </nav>
            </header>
            <main className="mx-auto max-w-4xl rounded-b bg-white p-12 shadow">
                {children}
            </main>
        </>
    )
}

export default BlogLayout
