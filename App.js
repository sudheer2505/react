import React from 'react';
import ReactDOM from 'react-dom/client';

const header = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading" }, "I am h1 Tag"),
        React.createElement("h2", { id: "heading" }, "I am h2 Tag")
        ]
    )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header);