// Application.cfc
component {
	this.name				= "testapp01";
	this.mappings			= {
		"/testbox"		= expandPath("/frameworks/testbox/"),
		"/mxunit"		= expandPath("/frameworks/testbox/system/testing/compat"),
		"/unittests"	= expandPath("/shared/git/blogExamples/unittests")
	};

}