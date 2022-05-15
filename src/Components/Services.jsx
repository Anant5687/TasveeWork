// import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import Card from './Card';
import './services.css'
import contents from './contenstsApi'


const Services = () => {
    console.log(contents)
    return (
        <div className="tsv_category section_padding" id="blog">
            <div className="tsv__category-container_groupB">
                {
                    contents.map((ele) => {
                        const { Category, images } = ele;
                        return (
                            <>
                                <Card imgUrl={images} text={Category} />
                            </>
                        )
                    })
                }


            </div>


        </div>
    )
}

export default Services;