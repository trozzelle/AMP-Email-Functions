export default async (request) => {
    console.log(request);
    return new Response("Hello, World!", {
      headers: { "content-type": "text/html" },
    });
  };
  

export const config = { path: "/test" }
