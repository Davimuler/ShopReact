import React, { useState } from 'react';

const FileInput=(props)=>{
    const [selectedFile, setSelectedFile] = useState(null);

    function handleFileSelect(event) {
        setSelectedFile(event.target.files[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (selectedFile) {
            const formData = new FormData();
            formData.append('image', selectedFile);
            // Call a function to handle the form data (e.g. upload the file to the server)
            props.onFileSelect(formData);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Select file:
                <input type="file" onChange={handleFileSelect} />
            </label>
            <button type="submit">Upload</button>
        </form>
    );
}

export default FileInput;