const newPost = (
  post: { id: number; author: string },
  addedAt = Date(),
): { id: number; author: string; addedAt: string } => ({
  ...post,
  addedAt,
})

const firstPost = {
  id: 1,
  author: 'Vera',
}

console.log(newPost(firstPost))
