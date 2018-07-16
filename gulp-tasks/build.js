({
	appDir : "../fe-source/js",
	baseUrl : ".",
	dir : "../build/js",
	mainConfigFile : "../fe-source/js/global.js",
	modules : [
	{
		name : "global",
		include : [ 'jquery' ]
	}/*,{
		name : "pages/homepage",
		exclude : [ 'global' ]
	}*/],
	findNestedDependencies : true,
	removeCombined : true
});