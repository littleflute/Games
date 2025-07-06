// ghClient.js
// ghClient.js
let ghClientWindow = null;
let isDragging = false;
let dragOffset = { x: 0, y: 0 };

function createWindow() {
    if (ghClientWindow) return;
    
    // Create window container
    ghClientWindow = document.createElement('div');
    ghClientWindow.id = 'ghClientWindow';
    Object.assign(ghClientWindow.style, {
        position: 'fixed',
        width: '400px',
        height: '300px',
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        zIndex: '1000',
        display: 'none',
        flexDirection: 'column'
    });

    // Create title bar
    const titleBar = document.createElement('div');
    titleBar.textContent = 'GitHub Client';
    titleBar.style.padding = '8px';
    titleBar.style.cursor = 'move';
    titleBar.style.backgroundColor = '#e0e0e0';
    titleBar.style.borderBottom = '1px solid #ccc';
    titleBar.style.userSelect = 'none';
    titleBar.style.borderRadius = '5px 5px 0 0';

    // Create content area
    const content = document.createElement('div');
    content.style.padding = '15px';
    content.style.flexGrow = '1';
    content.style.overflowY = 'auto';
    content.innerHTML = '<p>Window content goes here...</p>';

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'X';
    closeBtn.style.cssText = 'position: absolute; top: 5px; right: 5px; cursor: pointer;';
    closeBtn.onclick = () => toggle_gh_Client_Wnd();

    // Assemble window
    titleBar.appendChild(closeBtn);
    ghClientWindow.appendChild(titleBar);
    ghClientWindow.appendChild(content);
    document.body.appendChild(ghClientWindow);

    // Setup dragging
    titleBar.addEventListener('mousedown', startDrag);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('mousemove', dragWindow);
}

function startDrag(e) {
    if (e.target.tagName === 'BUTTON') return;
    isDragging = true;
    dragOffset = {
        x: e.clientX - ghClientWindow.offsetLeft,
        y: e.clientY - ghClientWindow.offsetTop
    };
    ghClientWindow.style.cursor = 'grabbing';
}

function stopDrag() {
    isDragging = false;
    if (ghClientWindow) ghClientWindow.style.cursor = 'default';
}

function dragWindow(e) {
    if (!isDragging || !ghClientWindow) return;
    
    ghClientWindow.style.left = (e.clientX - dragOffset.x) + 'px';
    ghClientWindow.style.top = (e.clientY - dragOffset.y) + 'px';
}

function toggle_gh_Client_Wnd() {
    if (!ghClientWindow) createWindow();
    
    if (ghClientWindow.style.display === 'none') {
        // Center window when showing
        ghClientWindow.style.left = `calc(50% - 200px)`;
        ghClientWindow.style.top = `calc(50% - 150px)`;
        ghClientWindow.style.display = 'flex';
    } else {
        ghClientWindow.style.display = 'none';
    }
}
/*
code toggle_gh_Client_Wnd to toggle a movable window
*/
