import React, { Component } from 'react';
import App from './App.css';


class Properties extends Component{
        state ={
            
            properties : [],
            visible :3

        }
        async componentDidMount() {
            const url ="https://api.myjson.com/bins/uqvny";
            const response = await fetch(url);
            const data=await response.json();
            
            this.setState({properties : data.results});
        }
        loadmore = () => {
             this.setState({visible:this.state.visible+4})
           
        }
       
    render(){
       
        if(!this.state.properties.length)
        return(<div> loading....</div>)

        return(
          
          
            <div className="container" >
                <div class="row">
                <div className="col-lg-8 col-md-12">
                <div class="option-bar">
            <h1 style={{fontSize:20 , textAlign:'center'}}> Properties List</h1>
                

          </div>
         {this.state.properties.slice(0,this.state.visible).map((property,i) => (
             <div class="property-box-5">
                 <div class="row">
                    
             <div  key ={`some-property -${i}`}>
             <div class="col-lg-5 col-md-5 col-pad">
                  <div className="property-thumbnail">
                      
                       <  img style={{height:150}}src={property.picture.large}/></div> 
                           </div>
            <div class="col-lg-7 col-md-7 align-self-center col-pad">
                          <div class="detail">
                              <div class="id">property name</div>
                 <div class="title">{property.Areatype}</div>
                 <div class="location fa fa-map-marker">
                  <i id="address" class="fa fa-map-marker">
                  {property.location.street.number}, {property.location.street.name}, {property.location.city},
                {property.location.state},
                {property.location.country},-
                {property.location.postcode}
                </i>
                </div>
                <div class="owner">
                <i class="flaticon-bed">
                            
                            </i> Contact</div> 
                <div class="totalsize">
                <i class="flaticon-bed">
                    </i>sq feet 50</div> 
                    <div class="price">
                        1000000</div> 
                <ul class="facilities-list clearfix">
                    <li>
                         
                        <i class="flaticon-bed">
                            
                        </i>
                        2 beds
                    </li>
                    <li>
                         
                        <i class="flaticon-bed">
                            
                        </i>
                        3 bathrooms
                    </li>
                    <li>
                         
                         <i class="flaticon-bed">
                             
                         </i>
                         3 Balconies
                        </li>
                    
                     <li>
                         
                         <i class="flaticon-bed">
                             
                         </i>
                         Furnished
                     </li>
                     
                 </ul>
                 <ul class="facilities-list clearfix"> 
                 <li>
                
                    Distance to nearest Gym:
                     </li>
                     <li>
                
                    Distance to nearest School:
                     </li>
                     <li>
               
                    Distance to nearest Hospital:
                     </li>
                     </ul>


                </div>
                </div>
                </div>
                        </div>    
              </div>
              
              
              
              
            
             
         ))
        }
         
        
         
         <button primary style={{size:20,backgroundColor:'tranparent' ,textAlign:'center'}}  onClick={this.loadmore}>load more </button>
         </div>
         </div>
         </div>
         
         
        );
    }

    }

export default Properties

