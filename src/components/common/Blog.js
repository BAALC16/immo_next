"use client";
//import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from 'react';
import {parseISO, format} from 'date-fns';

const Blog = (props) => {

    const [blogs, setBlogs] = useState([]);
    const [month, setMonth] = useState();
    const [day, setDay] = useState();

    useEffect(() => {
        setBlogs(props.blogs);
        console.log("dldod",props.blogs);
        /* if(props.blogs){
            setMonth(format(parseISO(props.blogs.created_at), 'yyy'));
            setDay(format(parseISO(props.blogs.created_at), 'yyy'));
        } */
    }, [])

    return (
        <>
        {blogs.map((blog) => (
            <div className="col-sm-6 col-lg-4" key={blog.id}>
            <div className="blog-style1">
                <div className="blog-img">
                <Image
                    width={386}
                    height={271}
                    className="w-100 h-100 cover"
                    src={process.env.appUrl+'storage/' + blog.image}
                    alt="blog"
                />
                </div>
                <div className="blog-content">
                <div className="date">
                    <span className="month">{ month }</span>
                    <span className="day">{ day }</span>
                </div>
                <a className="tag" href="#">
                    {blog.tag}
                </a>
                <h6 className="title mt-1">
                    <Link href="#">{blog.title}</Link>
                </h6>
                </div>
            </div>
            </div>
        ))}
        </>
    );
};

export default Blog;
