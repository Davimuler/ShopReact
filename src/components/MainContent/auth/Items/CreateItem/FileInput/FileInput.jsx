import React, { useState } from 'react';

const FileInput=(props)=>{
    const [selectedFile, setSelectedFile] = useState(null);
    const [isValid,setIsValid]=useState(false)

    function handleFileSelect(event) {
        setSelectedFile(event.target.files[0]);
        setIsValid(true)
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (selectedFile) {
            const formData = new FormData();
            formData.append('image', selectedFile);
            props.onFileSelect(formData);
            setIsValid(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Select file:
                <input type="file" onChange={handleFileSelect} />
            </label>
            <div>
                <button disabled={!(props.isAble&&isValid)} type="submit">Create</button>
            </div>

        </form>
    );
}

export default FileInput;