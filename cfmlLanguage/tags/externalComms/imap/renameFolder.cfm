<cftry>
	Trying to open IMAP connection&hellip;
	<cfset stCreds = {
		server		= "imap.gmail.com",
		secure		= "true",
		port		= "993",
		username	= "adam.cameron.junkmail@googlemail.com",
		password	= "temp.pwd"
	
	}>
	
	<cfimap	action				= "open"
			connection			= "myImapCon"
			attributecollection	= "#stCreds#"	<!--- these are set further up, and are all valid --->
	>
	Opened<br />

	Trying to rename folder within folder&hellip;
	<cfimap connection="myImapCon" action="renamefolder" folder="Munk.New One" newfolder="Munk.Renamed One">
	Renamed<br />
	<cfcatch>
		<cfoutput>Error: [#cfcatch.message#] [#cfcatch.detail#]<br /></cfoutput>
		<cftry>
			Attempting to close connection&hellip;
			<cfimap action="close" connection="myImapCon">
			Closed<br />
			<cfcatch>
				<cfoutput>Error: [#cfcatch.message#] [#cfcatch.detail#]<br /></cfoutput>
			</cfcatch>
		</cftry>		
	</cfcatch>
	<cffinally>
		<cftry>
			Attempting to close connection&hellip;
			<cfimap action="close" connection="myImapCon">
			Closed<br />
			<cfcatch>
				<cfoutput>Error: [#cfcatch.message#] [#cfcatch.detail#]<br /></cfoutput>
			</cfcatch>
		</cftry>		
	</cffinally>
</cftry>



