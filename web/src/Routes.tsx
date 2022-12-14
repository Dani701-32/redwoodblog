// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import BlogLayout from './layouts/BlogLayout/BlogLayout'

const Routes = () => {
    return (
        <Router>
            <Route path="/login" page={LoginPage} name="login" />
            <Route path="/signup" page={SignupPage} name="signup" />
            <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
            <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
            <Private unauthenticated="home">
                <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
                    <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
                    <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
                    <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
                    <Route path="/admin/posts" page={PostPostsPage} name="posts" />
                </Set>
            </Private>
            <Set wrap={BlogLayout}>
                <Route path="/contact" page={ContactPage} name="contact" />
                <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
                <Route path="/about" page={AboutPage} name="about" />
                <Route path="/" page={HomePage} name="home" />
            </Set>
            <Route notfound page={NotFoundPage} />
        </Router>
    )
}

export default Routes
