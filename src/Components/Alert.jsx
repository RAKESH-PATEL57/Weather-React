import alertImage from "/public/assets/rainingAlert.gif"

function Alert()
{
    return (
        <div className="alertMessage">
           <h2>Please Enter Place Name to Know The Weather</h2>
           <img src={alertImage} alt="" />
        </div>
    )
}

export default Alert