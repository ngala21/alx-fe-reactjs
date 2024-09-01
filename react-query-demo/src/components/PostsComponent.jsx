import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    return data;
};

const PostsComponent = () => {
    
    const { data: posts, isLoading, isError, error, } = useQuery('fetchPosts', fetchPosts);
    ["cacheTime:300000", "staleTime:60000", "refetchOnWindowFocus:true", "keepPreviousData:true"]

    if (isLoading) return <div>Loading...</div>;
    
    if (error) return <div>Error loading posts</div>
    return (
        <div>
            <button onClick={() => refetch()}>Refetch Posts</button>
            {posts.map(posts => (
                <div key={posts.id}>{posts.name}</div>
            ))}
        </div>
    );
};

export default PostsComponent;
