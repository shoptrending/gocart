export const runtime = 'edge';

export default function LoadingPage({ searchParams }) {
  const nextUrl = searchParams?.nextUrl;

  if (nextUrl) {
    return new Response(null, {
      status: 302,
      headers: { Location: nextUrl },
    });
  }

  return <div>Loading...</div>;
}
