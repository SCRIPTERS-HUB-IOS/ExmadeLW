import Link from 'next/link';

export default function Methods() {
  return (
    <div className="container">
      <h1 className="title">Methods</h1>
      <a href="https://app.splunk.gg/u/exmadeGG" target="_blank" rel="noreferrer">
        <button className="btn">SPLUNK</button>
      </a>
      <a href="https://www.logged.tg/auth/exmade" target="_blank" rel="noreferrer">
        <button className="btn">INJURIES</button>
      </a>
      <Link href="/">
        <button className="btn small">Go Back</button>
      </Link>
    </div>
  );
}
