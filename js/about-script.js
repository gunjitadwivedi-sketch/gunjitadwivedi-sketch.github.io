// Externalized React Code for about.html (Assignment Requirement: No in-document scripts)
// This file renders the H1, image, and bio using React functions.

// 1. FILL THE USER OBJECT (Assignment Requirement)
const user = {
    name: 'Gunjita Dwivedi',
    // Path uses the confirmed optimized file name (cat.jpg)
    imageUrl: 'images/cat.jpg', 
    bio: 'Hello! I am Gunjita Dwivedi, a student in Web Development II. I have a deep love for nature and everything outdoors. My greatest passion, however, is for my cats! I enjoy learning new web technologies and focusing on creating beautiful and functional user interfaces.'
};

// 2. CREATE REACT ELEMENTS (Assignment Requirement)
const headingElement = React.createElement(
    'h1', 
    null, 
    user.name 
);

const imageElement = React.createElement(
    'img', 
    { 
        src: user.imageUrl,
        alt: `Profile picture of ${user.name} with a cat`, 
        // Inline styles ensure the image displays as intended
        style: { width: '200px', height: '200px', objectFit: 'cover', maxWidth: '100%', display: 'block' } 
    }, 
    null 
);

const bioElement = React.createElement(
    'p', 
    null, 
    user.bio 
);


// 3. RENDER REACT ELEMENTS (Assignment Requirement)
ReactDOM.render(
    headingElement,
    document.getElementById('h1') 
);

ReactDOM.render(
    imageElement,
    document.getElementById('img') 
);

ReactDOM.render(
    bioElement,
    document.getElementById('content') 
);