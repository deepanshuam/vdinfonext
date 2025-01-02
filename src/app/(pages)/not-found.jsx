import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '150px', color:"white", position:"relative", zIndex:"9", mixBlendMode:"difference"}}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we could not find the page you&#39;re looking for.</p>
      <Link href="/" style={{ fontWeight:"bold", color: 'red', textDecoration: 'underline' }}>
        Go back home
      </Link>
    </div>
  );
}
