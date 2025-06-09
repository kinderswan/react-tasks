export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function PostCard({ post }: { post: Post }) {
  return (
    <li>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </li>
  );
}
