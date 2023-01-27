import React from 'react'
import '../styles/blog.css'
import videoImg from '../../images/video.png'
import articleImg from '../../images/article.png'
import caseStudy from '../../images/case-study.png'

const blogData = [
    {
        imgUrl: videoImg,
        title: 'Video',
        desc: 'To know about work . Watch some video f...',
        linkUrl: '#',
    },
    {
        imgUrl: articleImg,
        title: 'Articles',
        desc: 'Do you want to improve the way your brand interects with customer? Lets talk ...',
        linkUrl: '#',
    },
    {
        imgUrl: caseStudy,
        title: 'Case Study',
        desc: 'Boots your canversation rate with us ...',
        linkUrl: '#',
    },
]


const Blog = () => {
  return (
    <section>
        <div className="container">
            <div className="blog__top-content">
                <h6 className="subtitle">Our Blog</h6>
                <h2>Let's have a look from our <span className='highlight'>recent blog</span></h2>
            </div>

            <div className="blog__wrapper">
                {
                    blogData.map((item,index)=>(
                        <div className="blog__item" key={index}>
                            <h2>{item.title}</h2>
                            <div className="blog__img">
                                <img src={item.imgUrl} alt="" />
                            </div>
                            <p className="description blog__desc">
                                {item.desc}
                            </p>
                            <div>
                                <a href={item.linkUrl} className='learn__more'>
                                    <i className='ri-arrow-right-line'></i>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Blog