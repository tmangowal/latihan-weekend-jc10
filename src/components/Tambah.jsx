import React from 'react'

class Tambah extends React.Component{
    state = {
        counter1 : 0,
        counter2 : 0,
        counter3 : 0
    }

    render(){
        return(
            <div style={{border:'1px solid red'}} className="container p-3">
                <div className="row mt-3">
                    <div className="col-4 text-center">
                        <div className="row">
                            <div className="col-4">
                                <input type="button" onClick={() => this.setState({counter1 : this.state.counter1 - 1})} value="-" className="btn btn-primary"/>
                            </div>
                            <div className="col-4">
                                {this.state.counter1}
                                <br/>
                                Counter 1
                            </div>
                            <div className="col-4">
                                <input type="button" onClick={() => this.setState({counter1 : this.state.counter1 + 1})} value="+" className="btn btn-primary"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 text-center">
                        <div className="row">
                            <div className="col-4">
                                <input type="button" onClick={() => this.setState({counter2 : this.state.counter2 - 1})} value="-" className="btn btn-secondary"/>
                            </div>
                            <div className="col-4">
                                {this.state.counter2}
                                <br/>
                                Counter 2
                            </div>
                            <div className="col-4">
                                <input type="button" onClick={() => this.setState({counter2 : this.state.counter2 + 1})} value="+" className="btn btn-secondary"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 text-center">
                        <div className="row">
                            <div className="col-4">
                                <input type="button" onClick={() => this.setState({counter3 : this.state.counter3 - 1})} value="-" className="btn btn-info"/>
                            </div>
                            <div className="col-4">
                                {this.state.counter3}
                                <br/>
                                Counter 3
                            </div>
                            <div className="col-4">
                                <input type="button" onClick={() => this.setState({counter3 : this.state.counter3 + 1})} value="+" className="btn btn-info"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6">
                        <input type="button" onClick={() => this.setState({counter1 : this.state.counter1 - 1, counter2 : this.state.counter2 - 1, counter3 : this.state.counter3 - 1})} value="- Decrement All -" className='btn btn-dark btn-block'/>
                    </div>
                    <div className="col-6">
                        <input type="button" onClick={() => this.setState({counter1 : this.state.counter1 + 1, counter2 : this.state.counter2 + 1, counter3 : this.state.counter3 + 1})} value="+ Increment All +" className='btn btn-dark btn-block'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tambah