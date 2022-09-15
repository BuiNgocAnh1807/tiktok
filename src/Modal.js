
 const Modal = ({showmodal,setShowModal}) => {  
    return (
        <>{ showmodal ? (
            <div className='container'>
                <h3 className="modal-title">bạn có muốn xóa</h3>
                <button className="btn btn" onClick = {()=> setShowModal(!showmodal)} >Có</button>
                <button className="btn btn" onClick = {()=> setShowModal(false)}>Không</button>
            </div>
        ) : null}</> 
    )
}
export default Modal
