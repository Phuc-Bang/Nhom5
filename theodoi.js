document.addEventListener('DOMContentLoaded', function() {
    const followButton = document.getElementById('followButton');
    const chatButton = document.getElementById('chatButton');
    const chatPopup = document.getElementById('chatPopup');
    const closeChat = document.getElementById('closeChat');
    
    followButton.addEventListener('click', function() {
        if (followButton.innerText === 'Theo Dõi') {
            followButton.innerText = 'Đang Theo Dõi';
            followButton.classList.add('following');
        } else {
            followButton.innerText = 'Theo Dõi';
            followButton.classList.remove('following');
        }
    });

    chatButton.addEventListener('click', function() {
        chatPopup.style.display = 'block';
    });

    closeChat.addEventListener('click', function() {
        chatPopup.style.display = 'none';
    });
});
