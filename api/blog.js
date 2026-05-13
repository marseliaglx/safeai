export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=60');

  const HOST = 'blog.safeai.ie';
  const API  = 'https://gql.hashnode.com/';
  const slug = req.query.slug || null;

  const query = slug
    ? 'query($host:String!,$slug:String!){publication(host:$host){post(slug:$slug){title publishedAt readTimeInMinutes coverImage{url} tags{name} content{html} author{name}}}}'
    : 'query($host:String!){publication(host:$host){posts(first:20){edges{node{title slug brief publishedAt readTimeInMinutes coverImage{url} tags{name}}}}}}';

  const variables = slug ? { host: HOST, slug } : { host: HOST };

  try {
    const upstream = await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });
    const data = await upstream.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(502).json({ error: 'upstream_failed' });
  }
}
