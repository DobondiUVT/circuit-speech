type Post = {
  _rev: string;
  _id: string;
  _type: string;
  _updatedAt: string;
  _createdAt: string;
  title: string;
  slug: string;
  author: string;
  text: string;
}
type Posts = Post[];