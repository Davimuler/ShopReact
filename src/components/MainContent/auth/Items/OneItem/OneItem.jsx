import React from 'react';
import S from './OneItem.module.css'
import ShowImage from "../CreateItem/ShowImage/ShowImage";


const OneItem = (props) => {
    console.log(props)
    return (
        <div  className={S.Item}>
            <div>
                <ShowImage image={props.image}/>
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