
import React from 'react';
// import PropTypes from 'prop-types';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = [ 'One Punch', 'Samurai X', 'Dragol Ball']
    const [categories, setCategories] = useState(  [ 'One Punch'] )
    // const handleAdd = ( ) => {
    //     // setCategories( [...categories, 'HunterxHunter'] );
    //     // cats estado anterior, [ ...cats, 'HunterXHunter'], nuevo estado
    //     setCategories( cats => [ ...cats, 'HunterXHunter'] );
    // }



    return (
        <> 
            <h2>GifExperApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            
            <ol>
                {
                    categories.map( category =>(
                        <GifGrid 
                        key={ category }
                        category={category}/>
                    ))
                }
            </ol>
        </>
    )
}


GifExpertApp.propTypes = {

}

GifExpertApp.defaultProps = {

}

export default GifExpertApp;