document.addEventListener('DOMContentLoaded', function() {
    // Populate followed users
    const followedUsers = [
        { name: 'Jane Smith', profileLink: '#'},
        { name: 'Mike Johnson', profileLink: '#'},
    ];
    const followedList = document.getElementById('followed-list');
    followedUsers.forEach(user => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${user.profileLink}">${user.name}</a>`;
        followedList.appendChild(listItem);
    });

    // Populate uploaded content
    const uploadedContent = [
        { title: 'My Vintage Car', date: '2024-06-15', likes: 10 },
        { title: 'Custom Bike Review', date: '2024-07-01', likes: 25 },
    ];
    const uploadedList = document.getElementById('uploaded-list');
    uploadedContent.forEach(content => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${content.title}</strong> - Uploaded on ${content.date} - ${content.likes} likes`;
        uploadedList.appendChild(listItem);
    });

    // Populate liked content
    const likedContent = [
        { title: 'Awesome Car Photo', creator: 'Jane Smith'},
        { title: 'Bike Maintenance Tips', creator: 'Mike Johnson'},
    ];
    const likedList = document.getElementById('liked-list');
    likedContent.forEach(content => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${content.title}</strong> by ${content.creator}`;
        likedList.appendChild(listItem);
    });

    // Populate saved content
    const savedContent = [
        { title: 'Road Trip Guide', category: 'Travel'},
        { title: 'Best Garages', category: 'Recommendations'},
    ];
    const savedList = document.getElementById('saved-list');
    savedContent.forEach(content => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${content.title}</strong> - ${content.category}`;
        savedList.appendChild(listItem);
    });

    // Handle edit profile form submission
    const editProfileForm = document.getElementById('edit-profile-form');
    editProfileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Profile updated successfully!');
    });
});
