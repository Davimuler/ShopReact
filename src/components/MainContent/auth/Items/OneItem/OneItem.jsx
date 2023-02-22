import React from 'react';
import S from './OneItem.module.css'
import ShowImage from "../CreateItem/ShowImage/ShowImage";
import Button from '@mui/material/Button';


const OneItem = (props) => {
    return (
        <div  className={S.Item}>
            <div>

            </div>
            <div>
                <ShowImage image={props.image}/>
            </div>
            <div>
                <Button onClick={()=>{
                    props.deleteItemHandler(props.id)
                }} size="small" variant="contained"  color="primary">
                    Delete
                </Button>
            </div>
            <div>
               Name of item:{props.name}
            </div>
          <div>
              Price:{props.price}
          </div>
            <div>
                Description:{props.description}
            </div>
            <div>
                Section:{props.section}
            </div>
            <div>
                Features:
                {props.features === 0 ? <></> : props.features.map(i=><div>
                    {i.featureName}:{i.featureDescription}
                    </div>
                )}
            </div>


        </div>
    );
};

export default OneItem;