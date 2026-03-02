export async function onRequest(context) {
  return new Response("Hello World! API is working!", {
    headers: { 'Content-Type': 'text/plain' }
  });
}