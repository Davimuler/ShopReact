import React from 'react';
import S from './OneItem.module.css'


const OneItem = (props) => {
    return (
        <div  className={S.Item}>
            <div>
               Name of item:{props.name}
            </div>
          <div>
              Price:{props.price}
          </div>

        </div>
    );
};

export default OneItem;