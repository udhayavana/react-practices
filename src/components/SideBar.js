import React, { useState } from "react";
import ProfilePic from './images/profilepic';

const ToggleSidebar = () => {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <>
            <div className="">
                
                    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                        <div className="container-fluid p-2">
                            
                            <div className="form-inline col-md-2">
                                <div className="btn btn-primary" onClick={ToggleSidebar} >
                                    <i className="fa fa-arrow-right"></i>
                                    
                                </div>
                            </div>
                            <a className="navbar-brand text-primary mr-0" style={{'cursor':'pointer'}} onClick={ToggleSidebar}>About Me</a>
                        </div>
                    </nav>
                    <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <h4 className="mb-0"><ProfilePic /></h4>
                            <div className="btn btn-primary" style={{'display':'none'}}onClick={ToggleSidebar}><i className="fa fa-times"></i></div>
                        </div>
                        <div className="sd-body">
                            <ul>
                                <li><a className="sd-link">Menu Item 1</a></li>
                                <li><a className="sd-link">Menu Item 2</a></li>
                                <li><a className="sd-link">Menu Item 3</a></li>
                                <li><a className="sd-link">Menu Item 4</a></li>
                                <li><a className="sd-link">Menu Item 5</a></li>
                                <li><a className="sd-link">Menu Item 6</a></li>
                                <li><a className="sd-link">Menu Item 7</a></li>
                                <li><a className="sd-link">Menu Item 8</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
           </div>
           
        </>
    )
}

export default ToggleSidebar;