<h1>Dataart Winter IT Camp 2025 App</h1>

<p>This is my app for the Dataart Winter IT Camp 2025.</p>
<p>Backend is developed using <b>NestJS</b>, frontend - <b>ReactJS</b>.</p>

<h2>Backend</h2>
<ul>
    <li><code>GET /api/joke</code>: get random joke. 50% probability that this is a joke that somebody has seen before, so it has been stored in the DB with reactions. 50% probability that the joke is fetched from Teehee Joke API.</li>
    <li><code>PATCH /api/joke/:id</code>: pass an emoji in body to vote for it.</li>
</ul>

<h2>Frontend</h2>
<ul>
    <li>Showing a joke, reacting to a joke, continuing to the next joke.</li>
</ul>