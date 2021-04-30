grade ? (
	<svg className="quiz-box__check">
		<use href={sprite + '#check'}></use>
	</svg>
) : !grade ? (
	<svg className="quiz-box__cross">
		<use href={sprite + '#cross'}></use>
	</svg>
) : null;
