import "./index.scss";

import CardPlain from "../../wrappers/cardPlain";
import Image from "next/image";

const testimonials = [
  {
    content: `If I’m going to be staring at a screen for <span class="highlighted">8-10 hours a day</span>, I want it to be as <span class="highlighted">painless as possible</span>. Dracula PRO allows me to be more productive by having a consistent interface with <span class="highlighted">all of my applications</span> open. Also, the theme <span class="highlighted">just looks badass</span>.`,
    author: {
      avatar: "hannah.jpeg",
      name: "Hannah Burzynski",
      title: "Data Scientist",
      location: "Austin, Texas",
    },
  },
  {
    content: `<span class="highlighted">Before Dracula PRO</span> my life was meaningless, colorless and sad. Now it is vibrant, electric and full of the <span class="highlighted">best code I've ever written</span>.`,
    author: {
      avatar: "kenny.png",
      name: "Kenny Meyers",
      title: "iOS Developer",
      location: "Seattle, Washington",
    },
  },
];

const FixedTestimonial = () => {
  const random = Math.floor(Math.random() * Math.floor(testimonials.length));

  return (
    <article className="fixed-testimonial">
      <CardPlain>
        <div className="text">
          <div
            dangerouslySetInnerHTML={{ __html: testimonials[random].content }}
          />
        </div>
        <div className="author">
          <div className="pic">
            {testimonials[random].author.avatar && (
              <Image
                src={`/images/pro/${testimonials[random].author.avatar}`}
                width={100}
                height={100}
                alt={testimonials[random].author.name}
              />
            )}
          </div>
          <div className="info">
            <div className="author-name">
              <span>{testimonials[random].author.name}</span>
            </div>
            <div className="author-title">
              <span>{testimonials[random].author.title}</span>
            </div>
            <div className="author-location">
              <span>{testimonials[random].author.location}</span>
            </div>
          </div>
        </div>
      </CardPlain>
    </article>
  );
};

export default FixedTestimonial;
