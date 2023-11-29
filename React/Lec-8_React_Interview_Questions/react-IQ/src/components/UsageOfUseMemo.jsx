import { useState, useMemo } from "react";

const UsageOfUseMemo = ({items}) => {

    const [selectedItems , setSelectedItems] = useState([]);

    const calculateTotalPrice = (items) => {
       return items.reduce((total, item)=>total + item.price , 0);
    }

    const handleSelectedItem = (item) => {
        setSelectedItems((prevItems)=>[...prevItems, item]);
    }

    const totalPrice = useMemo(()=> calculateTotalPrice(selectedItems), [selectedItems]);


    return(
        <>
          <h2>List of Items</h2>
           <ul>
              {
                items && items.map((item)=>{

                    return(
                        <li key={item.id}>
                                {item.name} - {item.price}
                                <button onClick={()=>{handleSelectedItem(item)}}>Select</button>
                        </li>
                    )
                })
              }
           </ul>
           <h2>Total Price: {totalPrice}</h2>
        </>
    )
}

export default React.memo(UsageOfUseMemo);