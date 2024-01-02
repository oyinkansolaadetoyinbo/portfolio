import React from 'react';
import './blog.css';
import Img1 from '../../assets/blog_images/data-books.jpg';
import Img2 from '../../assets/blog_images/03.jpg';
import Img3 from '../../assets/blog_images/kimball.jpg';

const Blog = () => {

    const blog1 = {
        date: 'JULY 10, 2020',
        title: 'My Top 5 Data Science Books',
        description: 'I began my data science journey about 4 months ago and in that time I have gained a reasonably sturdy grasp of concepts that initially sounded like gibberish to me (what in the hell does hyper-parameters, Principal Components Analysis...',
        link: 'https://www.linkedin.com/pulse/my-top-5-data-science-books-joshua-olubori'
    }

    const blog2 = {
        date: 'FEBRUARY, 2023',
        title: 'Optimization in Data Analysis',
        description: 'Lending a lesson from Linear Algebra class to solve business problems.',
        link: 'https://medium.com/@joshuaolubori/using-optimization-in-data-analysis-6b6483dd64dd'
    }

    const blog3 = {
        date: 'MARCH, 2023',
        title: 'Taking notes from Kimball’s famous book, The Data Warehouse Toolkit (Chapter 1)',
        description: 'Taking notes from the first chapter of this seminal book to improve retention',
        link: 'https://medium.com/@joshuaolubori/taking-notes-from-kimballs-famous-book-chapter-1-f67da3938a8d'
    }

    return (
        <section className="blog section" id="blog">
            <h2 className="section__title text-cs">Latest Posts</h2>
            <p className="section__subtitle">
                My <span>Articles</span>
            </p>

            <div className="blog__container container grid">
                <div className="blog__item card card-two">
                    <span className="blog__date text-cs">{blog1.date.toUpperCase()}</span>
                    <h3 className="blog__title">{blog1.title}</h3>
                    <img src={Img1} alt="" className="blog__img" />
                    <p className="blog__description">
                        {blog1.description}
                    </p>

                    <a href={blog1.link} className="link">
                        Read more <i className="bx bx-right-arrow-alt work__button-icon"></i>
                    </a>
                </div>

                <div className="blog__item card card-two">
                    <span className="blog__date text-cs">{blog2.date.toUpperCase()}</span>
                    <h3 className="blog__title">{blog2.title}</h3>
                    <img src={Img2} alt="" className="blog__img" />
                    <p className="blog__description">
                        {blog2.description}
                    </p>

                    <a href={blog2.link} className="link">
                        Read more <i className="bx bx-right-arrow-alt work__button-icon"></i>
                    </a>
                </div>

                <div className="blog__item card card-two">
                    <span className="blog__date text-cs">{blog3.date.toUpperCase()}</span>
                    <h3 className="blog__title">{blog3.title}</h3>
                    <img src={Img3} alt="" className="blog__img" />
                    <p className="blog__description">
                        {blog3.description}
                    </p>

                    <a href={blog3.link} className="link">
                        Read more <i className="bx bx-right-arrow-alt work__button-icon"></i>
                    </a>
                </div>


            </div>
        </section>
    )
}

export default Blog;