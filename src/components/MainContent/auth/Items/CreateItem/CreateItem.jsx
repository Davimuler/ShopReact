import React, {useState, useEffect} from 'react';
import S from './CreateItem.module.css'
import axios, {apiCreateItem} from "../../../../../api/api.js";
import FileInput from "./FileInput/FileInput";
import ShowImage from "./ShowImage/ShowImage";
import SectionSelector from "./SectionSelector/SectionSelector";


const CreateItem = () => {
    const [section,setSection]=useState('')

    const [fullName, setFullName] = useState('')
    const [fullNameDirty, setFullNameDirty] = useState(false);
    const [fullNameError, setFullNameError] = useState('Name of item can not be empty');

    const [description,setDescription]=useState('')

    const [price, setPrice] = useState('')
    const [priceDirty, setPriceDirty] = useState(false);
    const [priceError, setPriceError] = useState('Price is required!');

    const [message, setMessage] = useState('')

    const [formValid, setFormValid] = useState(false)
    const [features,setFeatures]=useState([])

    const [featureName,setFeatureName]=useState('')
    const [featureNameError,setFeatureNameError]=useState('')

    const [featureDescription,setFeatureDescription]=useState('')
    const [featureDescriptionError,setFeatureDescriptionError]=useState('')

    const [imageData, setImageData] = useState(null);

    const [featureValid,setFeatureValid]=useState(false)

    useEffect(() => {
        if (fullNameError || priceError) {
            setFormValid(false);
        }
        else {
            setFormValid(true);
        }
    }, [fullNameError, priceError])

    useEffect(() => {
        if (featureNameError || featureDescriptionError) {
            setFeatureValid(false);
        } else if (featureName.length === 0 || featureDescription.length === 0) {
            setFeatureValid(false);
        } else {
            setFeatureValid(true);
        }


    }, [featureNameError, featureDescriptionError])

    const nameHandler = (e) => {
        setFullName(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 12) {
            setFullNameError('Incorrect length of item`s name')
            if (e.target.value === '') {
                setFullNameError('Name of item can not be empty')
            }
        } else {
            setFullNameError('')
        }
    }

    const priceHandler = (e) => {
        const value = e.target.value
        e.target.value = value.replace(/\D/g, '')
        setPrice(e.target.value)
        if (e.target.value.length < 1) {
            setPriceError('Price is required!')
        } else {
            setPriceError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name': {
                setFullNameDirty(true)
            }
                break;
            case 'price': {
                setPriceDirty(true)
            }
        }
    }

    const featureNameHandler=(e)=>{
        setFeatureName(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 50) {
            setFeatureNameError('Incorrect length of feature`s name')
            if (e.target.value === '') {
                setFeatureNameError('Name of feature can not be empty')
            }
        } else {
            setFeatureNameError('')
        }
        if(featureDescription.length===0){
            setFeatureDescriptionError('Description can not be empty')
        }
    }

    const featureDescriptionHandler=(e)=>{
        setFeatureDescription(e.target.value)
        if (e.target.value === '') {
            setFeatureDescriptionError('Description can not be empty')
        }
        else {
            setFeatureDescriptionError('')
        }
    }
    const addFeatureHandle=()=>{
        const newData = [...features, {
            featureName,featureDescription
        }];
        setFeatures(newData)
        setFeatureName('')
        setFeatureDescription('')
        setFeatureValid(false)
    }

    const fieldsEraser=()=>{
        setMessage('Added one item!')
        setFeatures([])
        setPrice('')
        setFullName('')
        setDescription('')
    }


    const onFileSelect=(data)=>{
        data.append('fullName', fullName);
        data.append('price', price);
        data.append('description', description);
        data.append('characteristics', JSON.stringify(features));
        data.append('image', imageData);
        data.append('section',section);
        setImageData(data)
        axios.post('/newItem',data).then(res=>{
            fieldsEraser()
        })
    }
    const getSection=(value)=>{
        setSection(value)
    }
    return (
            <div >
                <div>
                    {(fullNameError && fullNameDirty) && <div >{fullNameError}</div>}
                    <input value={fullName} onBlur={blurHandler} name='name' onChange={nameHandler} placeholder='Name'/>
                </div>
                <div>
                    {(priceError && priceDirty) && <div >{priceError}</div>}
                   <input value={price} onBlur={blurHandler} name='price' onChange={priceHandler} placeholder='Price'/>
                </div>
                <div>
                    {/*<input  onBlur={blurHandler} name='section'  placeholder='Section'/>*/}
                </div>
                <div>
                    <input value={description}  name='description' onChange={(e)=>{
                        setDescription(e.target.value)
                    }} placeholder='Description'/>
                </div>

                <div>
                    <input value={featureName} onChange={featureNameHandler} placeholder='Name of feature'/>{' : '}
                    <input value={featureDescription} onChange={featureDescriptionHandler} placeholder='Feature description'/>
                    <div>
                        <button disabled={!featureValid} onClick={addFeatureHandle}>Add feature</button>
                        <p>
                            {' '+featureNameError}  <br />   {' '+featureDescriptionError}
                        </p>
                    </div>
                </div>
                <div>Features:</div>
                <div>
                    {features.map((obj, index) => (
                        <div key={index}>
                            <p>{obj.featureName} : {obj.featureDescription} </p>
                        </div>
                    ))}
                </div>
                <SectionSelector getSection={getSection}/>
                <div>
                    <FileInput isAble={formValid} onFileSelect={onFileSelect}/>
                </div>
                <div style={{color: 'green'}}>{message}</div>

            </div>
    );
};

export default CreateItem;