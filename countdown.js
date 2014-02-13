function CountDown(end) {

	var d = new Date()
	var days = 0
	while (d<=end) { 
		if (d.getDay()>0 && d.getDay()<6) { 
			days++;
		}
		d.setDate(d.getDate()+1)
	}

	this.end = new Date(end.getTime());
	this.days = days;
}

angular.module("countdown", [])
	.controller("CountDownCtrl", function ($scope) {
		$scope.cd = new CountDown(new Date(2014, 2, 31));
	})
;


