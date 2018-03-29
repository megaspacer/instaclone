const posts = document.querySelector('.posts');

export default (arr) => {
    if (arr && Array.isArray(arr)) {
        posts.innerHTML = '';
        arr.forEach(post => {
            const section = document.createElement('section');
            section.classList.add('post');
            section.innerHTML = `
                <div class="user" id="${post.id}">
                    <img class="user-image" src="assets/images/user.svg" alt="user">
                    <div class="user-name">username</div>
                </div>
                <img class="photo" src="${post.imageURL}" alt="post photo">
                <div class="post-footer">
                    <img class="icon-like" src="assets/images/like.svg" alt="like" >
                    <img class="icon-comment" src="assets/images/comment.svg" alt="comment" >
                    <div class="comment">
                        <span class="user-acc">username</span>
                        <span class="text">${post.description}</span>
                    </div>
                    <div class="add-comment">
                        <input class="input-comment" type="text" placeholder="Добавьте комментарий...">
                    </div>
                </div>
            `;
            posts.appendChild(section);
        });
    }
};
