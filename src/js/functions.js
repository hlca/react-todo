const showHumanDate = aDate => {
  let d = new Date(aDate);
  return d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + (d.getMinutes()<10?'0':'') + d.getMinutes() + ':' + (d.getSeconds()<10?'0':'') + d.getSeconds();
}

export { showHumanDate }