/* -----------------------------
   Blog System: Load Blog Data & Open Details
-------------------------------*/

const blogs = [
    {
        id: 1,
        title: 'Blog 1 Title',
        shortDesc: 'This is a short description of blog 1.',
        content: '<p>Full content of Blog 1 goes here. You can also add <img src="path/to/image1.jpg" alt="image1">.</p>',
        date: '2025-12-27'
    },
    {
        id: 2,
        title: 'Blog 2 Title',
        shortDesc: 'This is a short description of blog 2.',
        content: '<p>Full content of Blog 2 goes here. You can also add images here.</p>',
        date: '2025-12-26'
    },
    {
        id: 3,
        title: 'Blog 3 Title',
        shortDesc: 'This is a short description of blog 3.',
        content: '<p>Full content of Blog 3 goes here. You can also add images here.</p>',
        date: '2025-12-25'
    }
];

// Render Blog List
function renderBlogs() {
    const blogContainer = document.getElementById('blogList');
    if(!blogContainer) return;

    blogContainer.innerHTML = '';
    blogs.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('card', 'slide-up');
        blogCard.innerHTML = `
            <h3 class="text-2xl font-semibold mb-2">${blog.title}</h3>
            <p class="mb-4">${blog.shortDesc}</p>
            <button class="btn btn-read-more" data-id="${blog.id}">Read More</button>
        `;
        blogContainer.appendChild(blogCard);
    });
}

// Open Blog Detail
function openBlogDetail(id){
    const blog = blogs.find(b => b.id === parseInt(id));
    if(!blog) return;

    const detailContainer = document.getElementById('blogDetail');
    if(!detailContainer) return;

    detailContainer.innerHTML = `
        <h2 class="text-3xl font-bold mb-4">${blog.title}</h2>
        <p class="text-sm text-gray-600 mb-4">Published on: ${blog.date}</p>
        <div>${blog.content}</div>
        <button id="closeBlog" class="btn mt-4">Back to Blogs</button>
    `;

    document.getElementById('blogList').style.display = 'none';
    detailContainer.style.display = 'block';

    document.getElementById('closeBlog').addEventListener('click', () => {
        detailContainer.style.display = 'none';
        document.getElementById('blogList').style.display = 'grid';
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderBlogs();

    document.addEventListener('click', function(e){
        if(e.target.classList.contains('btn-read-more')){
            const id = e.target.getAttribute('data-id');
            openBlogDetail(id);
        }
    });
});
