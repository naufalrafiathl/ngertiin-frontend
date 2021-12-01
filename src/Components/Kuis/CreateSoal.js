import {React, Component} from 'react'
import './Kuis.css'

class CreateSoal extends Component{
    constructor(){
        super()
        this.state = {
            soalData:[],
            act: 0,
            index : ''
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        let soalData = this.state.soalData;
        let pertanyaan = this.refs.txtPertanyaan.value;
        let A = this.refs.txtA.value;
        let B = this.refs.txtB.value;
        let C = this.refs.txtC.value;
        let D = this.refs.txtD.value;
        let jawaban_benar = this.refs.txtJawabanBenar.value;

        if(this.state.act === 0){
            let newSoal = {
                "pertanyaan" : pertanyaan,
                "jawaban" : {
                    "A" : A,
                    "B" : B,
                    "C" : C,
                    "D" : D
                },
                "jawaban_benar" : jawaban_benar,
            }
            soalData.push(newSoal);
        }else{
            let index = this.state.index;
            soalData[index].pertanyaan = pertanyaan;
            soalData[index].jawaban.A = A;
            soalData[index].jawaban.B = B;
            soalData[index].jawaban.C = C;
            soalData[index].jawaban.D = D;
            soalData[index].jawaban_benar = jawaban_benar;
        }

        this.setState({
            soalData : soalData,
            act :0
        })
    }

    handleEdit = (i) => {
        let soalData = this.state.soalData[i];
        this.refs.txtPertanyaan.value = soalData.pertanyaan;
        this.refs.txtA.value = soalData.jawaban.A;
        this.refs.txtB.value = soalData.jawaban.B;
        this.refs.txtC.value = soalData.jawaban.C;
        this.refs.txtD.value = soalData.jawaban.D;
        this.refs.txtJawabanBenar.value = soalData.jawaban_benar;

        this.setState({
            act : 1,
            index : i
        })
    }

    handleDelete=(i)=>{
        console.log(i.i)
        let soalData = this.state.soalData;
        soalData.splice(i,1);
        this.setState({
            soalData : soalData
        })
    }


    render(){
        let soalData = this.state.soalData;
        return(
            <div>
                <form ref="myForm">
                <div className="title-card">        
                    <label>Soal  </label><input type="text" ref="txtPertanyaan" placeholder="Isi Pertanyaan"/><br/>
                    <label>A  </label><input type="text" ref="txtA" placeholder="Opsi A"/><br/>
                    <label>B  </label><input type="text" ref="txtB" placeholder="Opsi B"/><br/>
                    <label>C  </label><input type="text" ref="txtC" placeholder="Opsi C"/><br/>
                    <label>D  </label><input type="text" ref="txtD" placeholder="Opsi D"/><br/>
                    <label>Jawaban Benar  </label><input type="text" ref="txtJawabanBenar" placeholder="Isi Jawaban Benar"/><br/>
                </div>
                <div className="button-card">
                    <div className="kembali">
                        <button 
                        onClick={e => this.handleSubmit(e)}
                        >Save</button>
                    </div>
                </div>
                </form>
                {
                soalData.map((data,i) =>
                <div className="question-card" key ={i} style={{border: '1px solid #E8E8E8'}}>
                    <div className="soal-card">
                        <h3>Question</h3>
                        <hr/>
                        <p>{data.pertanyaan}</p>
                        <div> 
                            <input 
                                type="radio"
                                value = {data.jawaban.A}
                                name="opsi"
                            />
                            {data.jawaban.A}
                        </div>
                        <div> 
                            <input 
                                type="radio"
                                value = {data.jawaban.B}
                                name="opsi"
                            />
                            {data.jawaban.B}
                        </div>
                        <div> 
                            <input 
                                type="radio"
                                value = {data.jawaban.C}
                                name="opsi"
                            />
                            {data.jawaban.C}
                        </div>
                        <div> 
                            <input 
                                type="radio"
                                value = {data.jawaban.D}
                                name="opsi"
                            />
                            {data.jawaban.D}
                        </div>
                        <p>Jawaban benar: {data.jawaban_benar}</p>
                    </div>
                    <div className="create-soal">
                        <div className="update">
                            <button 
                            onClick={() => this.handleEdit(i)}>
                            Update
                            </button>
                        </div>
                        <div className="cancel">
                            <button 
                            onClick={() => this.handleDelete(i)}>
                            Delete
                            </button>
                        </div>
                    </div>
                </div> 
                )}
            </div>


        )
    }
}

export default CreateSoal
