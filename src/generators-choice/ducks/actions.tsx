import * as types from './types'

export function toogleGenerator(generator:string){
	return {
		type: types.TOGGLE_GENERATOR,
		generator,
	}
}