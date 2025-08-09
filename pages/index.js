import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Home</h1>
      <Link href="/methods">
        <button className="btn">Methods</button>
      </Link>
      <a href="https://discord.gg/4tvp8V9pBJ" target="_blank" rel="noreferrer">
        <button className="btn blue">Join our DISCORD</button>
      </a>
    </div>
  );
}
