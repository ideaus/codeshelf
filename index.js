// Select the root element
const root = document.getElementById( "root" );

// Create content dynamically
const content = `
    <h1>Welcome to CodeShelf 🚀</h1>
    <p>A library of prebuilt UI widgets with raw code, ready to use.</p>
    <button onclick="alert('Explore CodeShelf!')">Get Started</button>
`;

// Inject content into the page
root.innerHTML = content;
