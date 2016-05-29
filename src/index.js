import Blog from './blog';

if (__DEV__) {
    console.warn('Dev Mode');
}

if (__PRERELEASE__) {
    console.warn('Pre Release Mode');
}

export default Blog;
