if (window.location.pathname.includes('penmaenmawr.html')) {
    fetch('photos.json')
        .then(response => response.json())
        .then(data => {
            const photos = data.photos;
            const columns = [
                document.getElementById('column1'),
                document.getElementById('column2'), 
                document.getElementById('column3')
            ];

            photos.forEach((photo, index) => {
                // Only load photos with 'penmaenmawr' category
                if (photo.categories && photo.categories.includes('penmaenmawr')) {
                    const img = document.createElement('img');
                    img.src = photo.url;
                    img.width = photo.width;
                    img.height = photo.height;
                    img.alt = 'Penmaenmawr photo';
                    
                    // Distribute images evenly across columns
                    const columnIndex = index % columns.length;
                    columns[columnIndex].appendChild(img);
                }
            });
        })
        .catch(error => console.error('Error loading photos:', error));
}
