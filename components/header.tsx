import Link from "next/link";
import Container from "./common/container";

export default function Header() {
  return (
    <header className="py-6">
      <Container>
        <nav className="flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/archive">Archive</Link>
          <Link href="/tags">Tags</Link>
          <Link href="/g">G</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/links">Links</Link>
        </nav>
        <nav className="">
          <Link href="/posts">Posts</Link>
          <Link href="/tags">Tags</Link>
        </nav>
      </Container>
    </header>
  );
}
