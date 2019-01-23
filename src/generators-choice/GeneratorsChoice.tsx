import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './ducks/actions'

export function GeneratorsChoice(){
	return (
		<div>
			<h3>Make your choice</h3>
			<button>Local</button>
			<button>Online</button>
		</div>
	);
}



// container part
function mapStateToProps(state:any) {
    return {...state};
}

function mapDispatchToProps(dispatch:any) {
    return bindActionCreators({
        ...actions,
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(GeneratorsChoice);