let mutations = {
	updatenav:(state,payload)=> state.vnav=payload,
	updateheader:(state,payload)=> state.vheader=payload,
	updateheaderbottom:(state,payload)=> state.vheaderbottom=payload,
	updateright:(state,payload)=> state.vright=payload,
	updatefooter:(state,payload)=> state.vfooter=payload,
	updateloading:(state,payload)=> state.vloading=payload
}
export default mutations