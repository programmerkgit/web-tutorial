window.onload = () => {

  /* GET COUNT UP BUTTON */
  const btn = document.getElementById('count-up-btn');
  const countEl = document.getElementById('counter');
  btn.addEventListener('click', () => {
    const count = Number(countEl.textContent) + 1;
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
