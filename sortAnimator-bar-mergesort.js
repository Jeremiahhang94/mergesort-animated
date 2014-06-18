// JavaScript Document

function SortBarAnimator_mergesort(prefix, length)
{
	SortBarAnimator.call(this);
	
	this.BAR_INACTIVE_CLASS = "bar inactive";
	this.BAR_CLASS = "bar";
	
	this.BAR_STATUS_ACTIVE = 0;
	this.BAR_STATUS_INACTIVE = 1;
	
	this.init(prefix, length);
}

SortBarAnimator_mergesort.prototype = new SortBarAnimator();
SortBarAnimator_mergesort.prototype.constructor = SortBarAnimator_mergesort;

SortBarAnimator_mergesort.prototype.setBarInactive = function(index)
{
	var bar = this.bars[index];
	bar.className = this.BAR_INACTIVE_CLASS;
}

SortBarAnimator_mergesort.prototype.setBarActive = function(index)
{
	var bar = this.bars[index];
	bar.className = this.BAR_CLASS;
}