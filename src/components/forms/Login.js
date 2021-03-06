import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import logo from '../../images/logo.png'
import NormalUser from './normalUserLogin/NormalUser'
import NGO from './ngoLogin/NGO'
import ReactDOM from 'react-dom'
import '../../css/form.css'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.loginForm=React.createRef();
        this.state={
            userType:'',
            showForm:false,
            expandDropdown:false
        }
    }

    handleClose=()=>{
        this.props.showModal();
        this.setState({
            showForm:false
        });
    }
    expandDropdown=()=>{
        this.setState({
            expandDropdown:!this.state.expandDropdown
        });
    }
    renderForm(type){
        if(type==='Normal'){
            ReactDOM.render(<NormalUser hideModal={this.handleClose}/>,this.loginForm.current);
        }
        else if(type==='NGO') {
            ReactDOM.render(<NGO hideModal={this.handleClose}/>,this.loginForm.current);
        }
    }
    handleUserType=(type)=>{
        this.setState({
            showForm:true,
            userType:type
        })
        this.renderForm(type);
    }


    render() {
        return (
            <>
                <Modal show={this.props.toggleModal} onHide={this.handleClose}>
                    <Modal.Header style={{backgroundColor:'white' ,color:'black'}}>
                        <img src={logo} alt="" width="40" height="40"/>
                        <Modal.Title style={{color:"#4d4d4d"}}> Eco-Action </Modal.Title>
                        <button type="button" className="btn mt-2 fw-bold btn-sm closeBtn" style={{backgroundColor:'white' , color:'black' }}
                        onClick={this.handleClose}
                        >
                            X
                        </button>
                    </Modal.Header>
                    <Modal.Body style={{backgroundColor:'white' ,color:'black'}}>
                        <div className={this.state.showForm?"d-none":""}>
                            <p className="ms-5 mt-2">Select the User-Type from Below</p>
                        
                            <div className="dropdown dropdownBtn mt-1">
                                <a className="btn btn-secondary  dropdown-toggle ms-5 mb-0" href="#" role="button" id="dropdownMenuLink" onClick={this.expandDropdown} style={{backgroundColor:'#00adef',color:'white'}}>
                                    Select User
                                </a>
                                <ul className={this.state.expandDropdown?"dropdown-menu dropdown-menu-light dropdown-menu-end d-block mt-1 ms-5":"dropdown-menu dropdown-menu-light ms-5"} >
                                    <li><a className="dropdown-item" href="#" onClick={this.handleUserType.bind(this,'Normal')}>Individual User</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={this.handleUserType.bind(this,'NGO')}>NGO</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <br/>

                        <div className="loginForm" ref={this.loginForm}></div>
                        
                        
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}
