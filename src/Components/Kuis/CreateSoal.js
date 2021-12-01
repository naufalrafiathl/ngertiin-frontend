import {React, Component} from 'react'
import './Kuis.css'
import { Icon } from '@iconify/react';

class CreateSoal extends Component{
    constructor(){
        super()
        this.state = {
            soalData:[],
            act: 0,
            index : '',
            popup : false,
            delete: false,
            empty : false,
        }
    }

    toggleModal = ()=>{
        this.setState({
            popup : !this.state.popup,
        })
        
    }

    toggleDeleteModal = ()=>{
        this.setState({
            delete : !this.state.delete,
        })
        
    }

    toggleBuatModal = ()=>{
        this.setState({
            empty : !this.state.empty,
            popup : !this.state.popup
        })
        
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

        if(pertanyaan==='' || A==='' || B==='' || C===''|| D===''|| jawaban_benar===''){
            this.setState({
                empty : !this.state.empty
            })
        }else{
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
                act :0,
                popup : !this.state.popup
            })
        }


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
            soalData : soalData,
            delete : !this.state.delete
        })

    }

    render(){
        let soalData = this.state.soalData;
        if(this.state.popup){
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }
        return(
            <div className="create-soal-baru">
                <div className="button-card">
                    <div className="kembali">
                        <button 
                        onClick={() => this.toggleModal()}>
                        Buat Soal
                        </button>
                    </div>
            </div>
            {this.state.popup && (
            <div className="popup">
                <div className="overlay">
                    <div className="popup-content">
                        <div class="form-buatsoal">
                            <form>
                                <div className="title-card">
                                    <h2>Detail Soal</h2>        
                                    <label>Soal</label>
                                    <div className="pertanyaan">
                                        <textarea 
                                        ref="txtPertanyaan" 
                                        placeholder="Isi Pertanyaan"/><br/>
                                    </div>
                                    <label>Opsi<br/></label>
                                    <div className="opsi">
                                        <textarea ref="txtA" placeholder="Opsi A"/><br/>
                                        <textarea ref="txtB" placeholder="Opsi B"/><br/>
                                        <textarea ref="txtC" placeholder="Opsi C"/><br/>
                                        <textarea ref="txtD" placeholder="Opsi D"/><br/>
                                    </div>
                                    <label>Jawaban Benar</label>
                                    <div className="jawaban_benar">
                                        <select ref="txtJawabanBenar"> 
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                        </select>
                                    </div>
                                    <br/>
                                </div>
                            </form>
                            </div>
                            <div className="popo">
                                <div className="button-card">
                                    <div className="kembali"> 
                                        <button 
                                        onClick={() => this.toggleModal()}
                                        style={{background: "gray"}}>
                                        Batal
                                        </button>
                                    </div>
                                    <button 
                                        onClick={e => this.handleSubmit(e)}
                                        >Simpan
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div> 
            )}

            {this.state.empty && (
                <div className="popup">
                    <div className="overlay">
                        <div className="popup-content">
                            <h2>Pembuatan Soal Batal</h2>
                            <Icon icon="gridicons:cross-circle" color="#dc3545" height="100" />
                            <p>
                            Harap isi detail soal yang diminta secara lengkap
                            </p>
                            <div className="popo">
                                <div className="button-card">
                                    <div className="kembali" style={{margin: "auto"}}> 
                                        <button 
                                        onClick={() => this.toggleBuatModal()}
                                        style={{background: "gray"}}>
                                        Ok
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            )}

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
                            onClick={(i) => 
                                this.toggleModal()
                            }
                        >
                        Update Soal
                        {/* onClick={() => this.handleEdit(i)} */}
                        </button>
                    </div>
                    <div className="cancel">
                        <button 
                        onClick={() => this.toggleDeleteModal()}>
                        Hapus Soal
                        </button>
                        {this.state.delete && (
                            <div className="popup">
                                <div className="overlay">
                                    <div className="popup-content">
                                        <h2>Apakah anda Yakin?</h2>
                                        <p>
                                        Dengan menekan tombol Hapus, anda akan menghapus soal ini.
                                        </p>
                                        <div className="popo">
                                            <div className="button-card">
                                                <div className="kembali"> 
                                                    <button 
                                                    onClick={() => this.toggleDeleteModal()}
                                                    style={{background: "gray"}}>
                                                    Batal
                                                    </button>
                                                </div>
                                                <button 
                                                    onClick={() => this.handleDelete(i)}
                                                    >Hapus
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        )}
                    </div>
                </div>
            </div> 
            )}

        </div>


        )
    }
}

export default CreateSoal
