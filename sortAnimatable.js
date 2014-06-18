// JavaScript Document

function SortAnimatable()
{
	this.toCall;
	this.delay = 100;
}

SortAnimatable.prototype.setToCall = function(toCall)
{
	this.toCall = toCall;
}

SortAnimatable.prototype.setDelay = function(delay)
{
	this.delay = delay;	
}

SortAnimatable.prototype.startTimeout = function()
{
	_this = this;
	setTimeout(function(){ _this.toCall() }, this.delay);	
}

SortAnimatable.prototype.startTimeout = function(toCall)
{
	this.setToCall(toCall);
	var _this = this;
	setTimeout(function(){ _this.toCall() }, this.delay);	
}

SortAnimatable.prototype.startTimeout = function(toCall, args)
{
	this.setToCall(toCall);
	var _this = this;
	setTimeout(function(){ _this.toCall(args) }, this.delay);	
}