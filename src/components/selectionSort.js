export default function selectionSort(array) {
	let start = performance.now();
  
	const swapped = [];
	let ops = 0;
	let currentIdx = 0;
	while (currentIdx < array.length - 1) {
	  ops++;
  
	  let smallestIdx = currentIdx;
  
	  for (let i = currentIdx + 1; i < array.length; i++) {
		ops++;
		if (array[smallestIdx].height > array[i].height) smallestIdx = i;
	  }
  
	  swapped.push([array[currentIdx], array[smallestIdx]]);
  
	  // Swap elements at currentIdx and smallestIdx
	  let temp = array[currentIdx];
	  array[currentIdx] = array[smallestIdx];
	  array[smallestIdx] = temp;
  
	  currentIdx++;
	}
  
	let end = performance.now();
	return [swapped, ops, end - start];
  }