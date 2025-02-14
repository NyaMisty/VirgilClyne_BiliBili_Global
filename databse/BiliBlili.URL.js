switch (url.host) {
	case "www.bilibili.com":
	case "m.bilibili.com":
		if (url.path.includes("bangumi/play/")) {// web版番剧
		};
		break;
	case "grpc.biliapi.net": // HTTP/2
	case "app.bilibili.com": // HTTP/1.1
		url.paths = url.path.split("/");
		switch (url.paths[0]) {
			case "bilibili.app.playurl.v1.PlayURL": // 普通视频
				switch (url.paths?.[1]) {
					case "PlayView": // 播放地址
						break;
					case "PlayConf": // 播放配置
						break;
				};
				break;
			case "bilibili.pgc.gateway.player.v2.PlayURL": // 番剧;
				switch (url.paths?.[1]) {
					case "PlayView": // 播放地址
						break;
					case "PlayConf": // 播放配置
						break;
				};
				break;
			case "bilibili.app.nativeact.v1.NativeAct": // 活动-节目、动画、韩综（港澳台）
				switch (url.paths?.[1]) {
					case "Index": // 首页
						break;
				};
				break;
			case "bilibili.app.interface.v1.Search": // 搜索框
				switch (url.paths?.[1]) {
					case "Suggest3": // 搜索建议
						break;
				};
				break;
			case "bilibili.polymer.app.search.v1.Search": // 搜索结果
				switch (url.paths?.[1]) {
					case "SearchAll": // 全部结果（综合）
						break;
					case "SearchByType": // 按分类搜索（番剧、用户、影视、专栏）
						break;
				};
				break;
		};
		break;
	case "app.bilibili.com":
	case "app.biliapi.net":
		switch (url.path) {
			case "x/v2/search/type": // 搜索
			case "x/web-interface/search/type": // 搜索
				break;
			case "x/v2/space": // 用户空间
				switch (url.params.vmid || url.params.mid) {
					case "11783021": // 哔哩哔哩番剧出差
					case "2042149112": // b站_綜藝咖
						break;
					default:
						break;
				};
				break;
			case "x/resource/show/tab/v2": // 首页-Tab
				break;
			case "x/resource/show/tab/bubble": // 首页-Tab-?
				break;
			case "x/v2/feed/index":
				break;
			case "x/resource/ip":
				break;
			case "x/resource/fingerprint":
				break;
			case "x/resource/show/skin":
				break;
			case "x/v2/splash/show":
				break;
			case "x/v2/splash/list":
				break;
			case "x/v2/splash/brand/list":
				break;
			case "x/v2/splash/event/list2":
				break;
			case "x/resource/abtest/abserver":
				break;
			case "x/v2/param":
				break;
			case "x/resource/domain":
				break;
			case "x/v2/account/mine":
				break;
			case "x/v2/account/myinfo":
				break;
			case "x/resource/peak/download":
				break;
			case "x/v2/channel/region/list":
				break;
		};
		break;
	case "api.bilibili.com":
	case "api.biliapi.net":
		switch (url.path) {
			case "pgc/player/api/playurl": // 番剧-播放地址
			case "pgc/player/web/playurl": // 番剧-播放地址
				break;
			case "x/player/wbi/playurl": // UGC-用户生产内容-播放地址
				break;
			case "x/space/wbi/acc/info": // 用户空间-账号信息
				switch (url.params.vmid || url.params.mid) {
					case "11783021": // 哔哩哔哩番剧出差
					case "2042149112": // b站_綜藝咖
						break;
					default:
						break;
				};
				break;
			case "pgc/page/bangumi": // 追番
				break;
			case "pgc/page/module/mine": // 追番-正在追
				break;
			case "pgc/bangumi/index": // 追番-全部内容
				break;
			case "pgc/app/timeline": // 追番-时间表
			case "pgc/web/timeline": // 追番-时间表
				break;
			case "pgc/view/web/season": // 番剧页面
			case "pgc/view/v2/app/season": // 番剧页面
				break;
			case "pgc/app/follow/v2/bangumi": // 我的收藏-追番
				break;
			case "pgc/app/follow/v2/cinema": // 我的收藏-追剧
                break;
			case "pgc/app/related/recommend":
				break;
			case "pgc/web/playlist":
				break;
			case "pgc/web/season/cards":
				break;
		};
		break;
	case "app.biliintl.com":
	case "api.global.bilibili.com":
		switch (url.path) {
			case "intl/gateway/v2/ogv/playurl":
				break;
			case "intl/gateway/v2/app/search/type":
			case "intl/gateway/v2/app/search/v2":
				break;
			case "intl/gateway/v2/ogv/view/app/season":
				break;
			case "intl/gateway/v2/ogv/view/app/season/section":
			case "intl/gateway/v2/ogv/view/app/season/user/status":
			case "intl/gateway/v2/ogv/view/app/season2":
			case "intl/gateway/v2/ogv/view/app/episode":
				break;
			case "intl/gateway/v2/app/subtitle":
				break;
			case "x/intl/passport-login/oauth2/refresh_token":
				break;
		};
		break;
};
