<cfset invokeArgs = {
	method = "f",
	component = "C",
	param1 = "arg1",
	returnVariable = "result"
}>
<cfinvoke attributeCollection="#invokeArgs#">

<cfdump var="#result#">
