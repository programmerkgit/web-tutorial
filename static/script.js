window.onload = () => {
  const el = document.getElementById('count-up');
  el.addEventListener('click', () => {
    const countEl = document.getElementById('count');
    let count = Number(countEl.textContent);
    count += 1;
    countEl.textContent = count.toString();
  });

  const getBlogBtn = document.getElementById('getBlogBtn');
  getBlogBtn.addEventListener('click', () => {
    axios.get('http://localhost:3000/api/blogs').then(response => {
      const blogs = response.data;
      const blogsDiv = document.getElementById('blogs');
      blogsDiv.textContent = '';
      blogs.forEach(blog => {
        const title = blog.title;
        const div = document.createElement('div');
        div.textContent = 'Title:' + title;
        blogsDiv.appendChild(div);
      });
    });
  });
};
