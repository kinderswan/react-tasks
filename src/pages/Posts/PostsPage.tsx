import { useCallback, useRef, useState } from "react";
import { PostCard } from "./components/Post";
import { usePosts } from "./usePosts";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

const postsUrl = `https://jsonplaceholder.typicode.com/posts`;

export function PostsPage() {
  const [amount, setAmount] = useState(0);
  const [inputValue, setInputValue] = useState(null);

  const {
    data: postsByAmount,
    error: postsError,
    loading: postsLoading,
  } = usePosts(postsUrl, amount);

  const onClick = useCallback(() => {
    setAmount(inputValue);
  }, [inputValue]);

  const onChange = useCallback((val: string) => setInputValue(+val || 0), []);

  console.log(postsByAmount);

  return (
    <>
      <Input onChange={onChange} type="number"></Input>
      <Button onClick={onClick} type={"button"}>
        Load Posts
      </Button>
      {postsLoading && <span>Loading</span>}
      {postsByAmount?.length > 0 && (
        <ul>
          {postsByAmount?.map((post) => (
            <PostCard key={post.id} post={post}></PostCard>
          ))}
        </ul>
      )}
      {postsError && <span>{postsError.message}</span>}
    </>
  );
}
