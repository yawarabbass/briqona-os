import "./Blog.css";

function Blog() {

  const articles = [
    {
      title: "How AI Is Transforming Modern Businesses",
      text: "Discover how artificial intelligence helps companies automate tasks, improve decisions, and increase productivity.",
      category: "AI & Technology"
    },
    {
      title: "The Future Of Business Automation",
      text: "Learn why automation is becoming essential for businesses that want faster and smarter operations.",
      category: "Automation"
    },
    {
      title: "Building Secure Digital Workflows",
      text: "Explore best practices for creating secure and efficient business processes.",
      category: "Security"
    },
    {
      title: "Why Businesses Need Intelligent Platforms",
      text: "Understand how connected business platforms help organizations scale successfully.",
      category: "Business Growth"
    }
  ];


  return (

    <main className="blog-page">


      <section className="blog-hero">

        <span>
          BRIQONA OS BLOG
        </span>

        <h1>
          Insights For
          <br />
          <strong>Smarter Business Decisions</strong>
        </h1>

        <p>
          Explore the latest insights about AI, automation,
          technology, and strategies to help businesses grow.
        </p>

      </section>




      <section className="blog-section">

        <h2>
          Latest Articles
        </h2>


        <div className="blog-grid">

          {
            articles.map((article,index)=>(

              <article
              className="blog-card"
              key={index}
              >

                <span>
                  {article.category}
                </span>

                <h3>
                  {article.title}
                </h3>

                <p>
                  {article.text}
                </p>


                <button>
                  Read More
                </button>


              </article>

            ))
          }

        </div>


      </section>




      <section className="blog-categories">

        <h2>
          Explore Topics
        </h2>

        <div className="category-list">

          <div>AI & Technology</div>
          <div>Business Automation</div>
          <div>Security</div>
          <div>Digital Transformation</div>

        </div>


      </section>




      <section className="blog-cta">

        <h2>
          Stay Updated With Briqona OS
        </h2>

        <p>
          Get the latest business technology insights and updates.
        </p>


        <button>
          Subscribe
        </button>

      </section>



    </main>

  );

}


export default Blog;
