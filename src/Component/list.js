import React,{useState, useEffect} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import './style.css';
import Wishlist from './wishList'

// getting the values of local storage
const getDataFromLS = () => {
    const data = localStorage.getItem('colleges');
    if(data){
        return JSON.parse(data);
    }else{
        return []
    }
}


function List(props){
    const[colleges, setColleges] = useState(getDataFromLS());
    
    const handleAddWishlist = (uniArr, id) => {
        let collegeObject = uniArr;
        let collegeId = id;

        let college = {
            name: collegeObject.name,
            country: collegeObject.country,
            id: collegeId
        }
        console.log(college)

        setColleges([...colleges, college]);
    }

    // Remove from wishlist
    const remove = (id) => {
        const filteredColleges = colleges.filter((element, index) => {
            return element.id !== id;
        }) 
        setColleges(filteredColleges);
        // console.log(id)
    }

    // Saving the data to local storage
    useEffect(() => {
        localStorage.setItem('colleges', JSON.stringify(colleges));
    },[colleges])

    return(
        <div>
            <div className="container">
                <div className="container2">
                 <h3 className="title">Universities</h3>
                {
                    props.unis.map((uni, key) => {
                        return(
                            <div className="main" key={key}>
                                <div className="cardBody">
                                    <h5>{uni.name}</h5>
                                    <p>{uni.country}</p>
                                    <p>{uni.domains}</p>
                                </div>

                                <button onClick={() => handleAddWishlist(uni,key)} className="addWish">+Wishlist</button>    

                            </div>
                        )
                    })
                }
                </div>
                <Wishlist colleges={colleges} remove ={remove}/>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        unis: state
    }
};

const mapDispatchToProp = (dispatch) => {
    return bindActionCreators({},dispatch);
};

export default connect(mapStateToProps, mapDispatchToProp)(List);