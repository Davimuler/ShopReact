import React, {useEffect, useState} from 'react';
import axios from '../../../../../../api/api.js';
import OneItem from "../../OneItem/OneItem";

const SectionSelector = (props) => {
const [sections,setSections]=useState([])
    const [selectedSection, setSelectedSection] = useState("");
    useEffect(() => {
       axios.get('/sections').then((res)=>{setSections(res.data)
       })
    }, [])

    const handleSectionChange = (event) => {
        setSelectedSection(event.target.value);
        props.getSection(event.target.value)
    };

    return (
        <div>
            Section: <select onChange={handleSectionChange} value={selectedSection}>
                {!sections.length? <></>:sections.map(
                    s=><option  key={s._id} >{s.sectionName}</option>)}}
            </select>
        </div>
    );
};

export default SectionSelector;