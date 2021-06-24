import React from 'react';


import './collection.component.scss'
import CollectionItem from "../collection-item/collection-item.component";

const Collection = ({title, items})=>{

    return <div className= 'collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>

            {items
                    .filter((item, idx) => idx < 4)
                    .map ((item) =>(
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
}

export default Collection;