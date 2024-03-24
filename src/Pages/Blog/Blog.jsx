import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Tips for Finding Your Dream Apartment",
      author: "Alice Johnson",
      date: "March 5, 2024",
      image: "https://source.unsplash.com/800x600/?apartment",
      content: "Here are five practical tips to help you find your dream apartment and make the process easier practical tips to help you find."
    },
    {
      id: 2,
      title: "Exploring Hidden Gems: Off-the-Beaten-Path ",
      author: "David Lee",
      date: "March 10, 2024",
      image: "https://source.unsplash.com/800x600/?travel",
      content: "Discover lesser-known destinations that offer unique experiences and are off the beaten path."
    },
    {
      id: 3,
      title: "The Ultimate Packing Guide for Your Next Vacation",
      author: "Sophia Lee",
      date: "March 15, 2024",
      image: "https://source.unsplash.com/800x600/?suitcase",
      content: "Make packing for your next vacation stress-free with our ultimate packing guide, covering everything you need."
    },
    {
      id: 4,
      title: "Top 10 Family-Friendly Destinations for Summer",
      author: "Michael Adams",
      date: "March 20, 2024",
      image: "https://source.unsplash.com/800x600/?family",
      content: "Explore our list of top family-friendly for a memorable summer vacation with your loved ones."
    },
    {
      id: 5,
      title: "How to Budget for Your Next Vacation",
      author: "Emma Wilson",
      date: "March 25, 2024",
      image: "https://source.unsplash.com/800x600/?budget",
      content: "Learn effective practical tips to help you find budgeting strategies and tips to make the most of your travel funds for your next vacation."
    },
    {
      id: 6,
      title: "The Best Destinations Around the World",
      author: "James Brown",
      date: "March 30, 2024",
      image: "https://source.unsplash.com/800x600/?food",
      content: "Embark on a culinary journey and discover the best foodie destinations around the world for an unforgettable  experience."
    },
    
  ];




  const featuredCategories = [
    { id: 1, name: "Travel Tips", slug: "travel-tips" },
    { id: 2, name: "Apartment Hunting", slug: "apartment-hunting" },
    { id: 3, name: "Budget Travel", slug: "budget-travel" },
    // Add more featured categories here
  ];



  return (
    <div className="  min-h-screen py-12">
<Helmet><title>New Home || Blog</title></Helmet>

    <div className="w-[1440px] mx-auto px-4">
        
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <div key={post.id} className="p-6 bg-white rounded-lg shadow-md transition duration-300 transform hover:scale-105">
            <img src={post.image} alt={post.title} className="mb-4 rounded-lg" />
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-2">By {post.author} - {post.date}</p>
            <p className="text-gray-700">{post.content}</p>
            <Link to={`/blog/${post.id}`} className="block mt-4 text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Blog;
