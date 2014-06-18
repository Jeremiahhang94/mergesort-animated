// JavaScript Document

window.onload = function()
{
	var m = new Mergifier();
	m.start();

}

function Mergifier(delay)
{
	SortAnimatable.call(this);
	
	this.delay = delay;
	this.prefix = "merge";
	
	var maxNumber = 100, minNumber = 0, quantity = 20;
	this.array = RandomGenerator.generate(maxNumber, minNumber, quantity);
	this.animator = new SortBarAnimator_mergesort(this.prefix, quantity);
	this.animator.buildBars(this.array);
	
	this.complete;
}

Mergifier.prototype = new SortAnimatable();
Mergifier.prototype.constructor = Mergifier;

Mergifier.prototype.start = function()
{
	var array = this.array;
	array.pop();
		
	array = this.mergesort(array, 0);
	console.log(array);	
}

Mergifier.prototype.mergesort = function(array, start)
{	
	var end = array.length;
	
	if(end <= 1)
	{
		//singular item in the array
		return array;	
	}
	else
	{
		var arrays = this.splitLeftRight(array, start, end);
		
		arrays.left = this.mergesort(arrays.left, start);
		arrays.right = this.mergesort(arrays.right, Math.ceil(end/2) + 1);
		
		var result = this.merge(arrays.left, arrays.right);
		
		return result;
			
	}
}


Mergifier.prototype.splitLeftRight = function(array, start, end)
{
	var arrays = {
			left: new Array(),
			right: new Array()
		}
	var middle =  Math.ceil(end/2);

	for(var i = 0; i<middle; i++)
	{
		arrays.left.push(array[i]);
	}
	for(var j = middle; j<end; j++)
	{
		arrays.right.push(array[j]);
	}
	
	return arrays;
	
}

Mergifier.prototype.merge = function(left, right)
{	
	var result = new Array();
	var l, r;
	
	if(left[left.length-1] >= right[0])
	{
		result = left.concat(right);
	}
	else
	{
		while(left.length > 0 && right.length > 0)
		{
			l = left[0];
			r = right[0];
			
			if(l >= r)
				result.push(left.shift());
			else
				result.push(right.shift());
				
		}
	
		if(left.length > 0)
			result = result.concat(left);
		else if(right.length > 0)
			result = result.concat(right);
	}
	
	return result;
}

Mergifier.prototype.swap = function(l, r, indexs)
{
}