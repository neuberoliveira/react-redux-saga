import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {generatorOperations} from './ducks'

export function CommitGenerator(props:any){
	return (
		<div>
			<h2>Commit generator</h2>
			<h3>Make your choice</h3>
			<button onClick={()=>generatorOperations.pickLocal()}>Local</button>
			<button>Online</button>
			
			<br /><br />
			
			<div>
				{props.selected ? props.selected : 'choose an option'}
			</div>
		</div>
	);
}



// container part
function mapStateToProps(state:any) {
	// console.log('map state to props', state)
    return {...state.generator.commits};
}

function mapDispatchToProps(dispatch:any) {
    return bindActionCreators({
        ...generatorOperations,
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CommitGenerator);