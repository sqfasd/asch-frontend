angular.module('asch').service('apiService', function ($http, $rootScope, $location) {

	function json2url(json) {
		var arr = [];
		var str = '';
		for (var i in json) {
			str = i + '=' + json[i];
			arr.push(str);
		}
		return arr.join('&');
	};
	function fetch(url, data, method, headers) {
		method = method.toLowerCase();
		if (method == 'get') {
			var params = json2url(data);
			return $http.get(url + '?' + params);
		} else {
			return $http.post(url, data);
		}
	}
	this.login = function (params) {
		return fetch('{{loginApi}}', params, 'post');
	};
	//账户请求
	this.account = function (params) {
		return fetch('{{accountApi}}', params, 'get');
	};
	//交易请求
	this.transactions = function (params) {
		return fetch('{{transactionsApi}}', params, 'get');
	};
	//获取投票列表
	this.myvotes = function (params) {
		return fetch('{{myvotesApi}}', params, 'get');
	};
	//获取最新区块
	this.blocks = function (params) {
		return fetch('{{blocksApi}}', params, 'get');
	};
	//获取全网所有资产
	this.assets = function (params) {
		return fetch('{{assetsApi}}', params, 'get');
	};
	//受托人模块
	this.blockforging = function (params) {
		return fetch('{{blockforgingApi}}', params, 'get');
	};
	// 入围候选人
	this.delegates = function (params) {
	   return fetch('{{delegatesApi}}', params, 'get');
	}
	// 投我的票
	this.votetome = function (params) {
		return fetch('{{votetomeApi}}', params, 'get');
	}
	// 节点列表
	this.peer = function (params) {
		return fetch('{{peerApi}}', params, 'get');
	}
	// 区块详情
	this.blockDetail = function (params) {
		return fetch('{{blocksDetailApi}}', params, 'get');
	}
	// 账户详情
	this.accountdetail = function (params) {
		return fetch('{{accountdetailApi}}', params, 'get');
	};
	// 应用列表
	this.appList = function (params) {
		return fetch('{{appListApi}}', params, 'get');
	}
	// 已安装应用列表
	this.appInstalled = function (params) {
		return fetch('{{appInstalledApi}}', params, 'get');
	}
	this.forgingStatus = function (params) {
		return fetch('{{forgingStatusApi}}', params, 'get');
	}
});
