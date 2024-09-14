function mincost(arr)
{ 
    let sum = 0
	arr.sort((a,b) => a - b)
	while(arr.length >1){
       let first = arr.shift()
		let second = arr.shift()
		let cost = first + second
		sum += cost
		
		arr.push(cost)
		arr.sort((a,b) => a - b)
		

		
	}
  return sum
}

module.exports=mincost;
