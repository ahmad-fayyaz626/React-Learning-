const DeleteFromCard = (id) =>{
    return {
        type: "DELETE_FROM_CART",
        payload: id,
    }
}

export default DeleteFromCard;