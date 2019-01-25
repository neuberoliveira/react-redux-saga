import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {generatorOperations} from './ducks'



export function CommitGenerator(props:any){
	const renderOnline = ()=>(
		<div>
			{props.isLoading ? 
				'calling the dragon.....' : 
				<pre style={{textAlign:'left'}}>{props.selected}</pre>
			}
		</div>
	)
	const renderOffline = ()=>(
		<div>
			{props.selected}
		</div>
	)
	
	return (
		<div>
			<h2>Commit generator</h2>
			<h3>Make your choice</h3>
			<button onClick={()=>generatorOperations.pickLocal()}>Local</button>
			<button onClick={()=>generatorOperations.pickOnline()}>Online</button>
			
			<br /><br />
			
			<div style={{margin:'0 auto', width:320}}>
				{props.source=='online' ? renderOnline() : renderOffline()}
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