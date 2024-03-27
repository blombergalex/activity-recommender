const ParticipantsButton = ({participantNumber, updateFunction}) => {
    const handleClick = () => {
        updateFunction(participantNumber)
    }
    return(
        <button onClick={handleClick}>{participantNumber} </button>
    )
}

export default ParticipantsButton;