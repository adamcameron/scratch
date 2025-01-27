<cfscript>
numbers = queryNew("id,en,mi", "integer,varchar,varchar", [
	[1,"one","tahi"],
	[2,"two","rua"],
	[3,"three","toru"],
	[4,"four","wha"],
	[5,"five","rima"],
	[6,"six","ono"],
	[7,"seven","whitu"],
	[8,"eight","waru"],
	[9,"nine","iwa"],
	[10,"ten","tekau"]
]);
remapTemplate = queryNew("value,english,maori"); 

reMapped = numbers.map(function(row){
	return {value=row.id, english=row.en, maori=row.mi};
}, remapTemplate);

writeDump({
	reMapped=reMapped,
	numbers=numbers,
	remapTemplate=remapTemplate
});

reMapped = queryMap(
	numbers,
	function(row){
		return {value=row.id, english=row.en, maori=row.mi};
	},
	remapTemplate
);

writeDump({
	reMapped=reMapped,
	numbers=numbers,
	remapTemplate=remapTemplate
});
</cfscript>