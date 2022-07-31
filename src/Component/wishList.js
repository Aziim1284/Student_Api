import React from "react";


function Wishlist({colleges, remove}){
    return(
        <div className="wishList">
            <h3 className="whistlistHead">Wishlist</h3>
            {
                colleges.map((college, key) => {
                    return(
                        <div className="box" key={key}>
                            <h5>{college.name}</h5>
                            <p>{college.country}</p>
                            <button className="removeBtn" type="button" onClick={() => remove(college.id)}>Remove</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Wishlist;