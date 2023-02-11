import './Card.css'
const Card = (props) => {
	return (
		<div id="ctn-card">
			<p>{props.name}</p>
			<img src={props.imgurl}></img>
			<progress id='bar' value={props.val} max='1'></progress>
			<br></br>
			<div id='button'>
				<a id='visit' href={props.produrl}>Visit</a>
			</div>
		</div>
	)
}

export default Card;