import './Card.css'
const Card = (props) => {
	console.log("cards", props)
	return (
		<div id="ctn-card">
			<p className='truncate'>{props.props.prodname}</p>
			<img src={props.props.imgurl}></img>
			<progress id='bar' value={parseInt((props.props.ecoval))} max='1'></progress>
			<br></br>
			<div id='button'>
				<a id='visit' href={props.props.produrl}>Visit</a>
			</div>
		</div>
	)
}

export default Card;