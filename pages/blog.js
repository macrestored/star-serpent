import Link from 'next/link'
import Layout from '../comps/layout/layout'
import {getAllPosts} from '../lib/posts'
import PostList from '../comps/blog/list'

export default function Blog({allPosts}) {
  return (
    <Layout title="Blog" description="Blog page">
      <PostList posts={allPosts}/>
    </Layout>
)}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'id',
    'title',
    'image',
    'slug',
    'author',
    'excerpt'
  ])
  return {
    props: {allPosts}
}}