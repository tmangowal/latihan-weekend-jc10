import React from 'react'
import { InputResult } from './InputResult';

class InputForm extends React.Component{
    state = {
        data : [
            {name : 'Seto', job : 'Coder', dob : '04/03/93', id : 1},
            {name : 'Andi', job : 'CEO', dob : '21/07/87', id : 2},
            {name : 'Budi', job : 'Manager', dob : '13/11/95', id : 3},
        ],
        nameInput : '',
        jobInput : '',
        dobInput : ''
    }

    renderData = () => {
        var jsx = this.state.data.map((val) => {
            return(
                <li key={val.id} className="list-group-item"><InputResult name={val.name} job={val.job} dob={val.dob} id={val.id}/></li>
            )
        })

        return jsx
    }

    onChangeName = (e) => {
        this.setState({nameInput : e.target.value})
    }

    onChangeJob = (e) => {
        this.setState({jobInput : e.target.value})
    }

    onChangeDOB = (e) => {
        this.setState({dobInput : e.target.value})
    }

    onBtnSubmit = () => {
        var {nameInput, jobInput, dobInput} = this.state
        var tempData = this.state.data
        var newData = {
            name : nameInput,
            job : jobInput,
            dob : dobInput,
            id : this.state.data[this.state.data.length - 1].id + 1
        }

        tempData.push(newData)
        this.setState({data : tempData})
    }

    render(){
        return(
            <div style={{border:'1px solid red'}} className="mt-5 p-3">
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="row">
                            <div className="col-6">
                                <input type="text" onChange={this.onChangeName} className="form-control" placeholder="Input name"/>
                            </div>
                            <div className="col-6">
                                <input type="button" onClick={this.onBtnSubmit} value="SUBMIT" className="btn btn-info btn-block"/>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12">
                                <input type="text" onChange={this.onChangeJob} className="form-control" placeholder="Input job"/>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12">
                                <input type="text" onChange={this.onChangeDOB} className="form-control" placeholder="Input birth date DD/MM/YY"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 d-flex justify-content-center">
                    {/* <ul className="list-group"> */}
                        {this.renderData()}
                    {/* </ul> */}
                </div>
            </div>
        )
    }
}

export default InputForm