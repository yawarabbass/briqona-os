import "./Blog.css";


const posts = [

  {
    title:"The Future of Business Automation",
    text:"Discover how intelligent automation is changing modern business operations.",
    date:"July 2026",
  },

  {
    title:"Why Businesses Need One Operating System",
    text:"Learn why companies are moving towards unified business platforms.",
    date:"July 2026",
  },

  {
    title:"AI Transformation For Companies",
    text:"How artificial intelligence helps teams work smarter and faster.",
    date:"June 2026",
  },

];


function Blog(){

return (

<main className="blog-page">


<section className="blog-hero">

<span>
BRIQONA OS BLOG
</span>


<h1>
Insights For
<em> Modern Businesses</em>
</h1>


<p>
Read the latest updates, strategies and ideas
about business technology and automation.
</p>


</section>




<section className="blog-grid">


{posts.map((post)=>(

<article
className="blog-card"
key={post.title}
>


<small>
{post.date}
</small>


<h2>
{post.title}
</h2>


<p>
{post.text}
</p>


<a href="#">
Read More →
</a>


</article>

))}


</section>




<section className="blog-cta">

<h2>
Stay Updated With Briqona OS
</h2>


<p>
Follow the latest trends in business technology.
</p>


<a href="/contact">
Subscribe →
</a>


</section>



</main>

);

}


export default Blog;
