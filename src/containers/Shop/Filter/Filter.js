import React from 'react';
import styles from './Filter.module.scss';
import FilterByPrice from './FilterByPrice/FilterByPrice';
import FilterByColor from './FilterByColor/FilterByColor';
import FilterBySize from './FilterBySize/FilterBySize';

const Filter = (props) => {

     return (
         <div className={styles.filter}>
            <h2 className={styles.title}>Filter by</h2>

            <FilterByPrice minMaxPrice={props.minMaxPrice} setPriceFilter={props.setPriceFilter} />
            <FilterByColor items={props.items} setColorFilter={props.setColorFilter}/>
            <FilterBySize items={props.items} setSizeFilter={props.setSizeFilter} />

         </div>
     )

}

export default Filter;