import React from 'react';
import './Blog.css';

const posts = [
  {
    id: 1,
    titre: 'Pourquoi tu stagnes malgré des heures de jeu ?',
    contenu: "Découvre les pièges courants qui freinent ta progression et comment les éviter pour enfin évoluer.",
  },
  {
    id: 2,
    titre: '3 erreurs que font 99% des joueurs compétitifs',
    contenu: "Ces erreurs simples coûtent cher en performance. Apprends à les reconnaître et à les corriger rapidement.",
  },
  {
    id: 3,
    titre: 'Comment passer de joueur solo à joueur d\'équipe impactant ?',
    contenu: "Travaille ta communication et ta vision de jeu pour devenir indispensable à n\'importe quelle équipe.",
  },
];

const Blog = () => (
  <section id="blog" className="blog-section">
    <div className="container">
      <h2>Blog &amp; Conseils Gratuits</h2>
      <div className="posts">
        {posts.map((post) => (
          <article key={post.id} className="post">
            <h3>{post.titre}</h3>
            <p>{post.contenu}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;