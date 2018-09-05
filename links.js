(()=>{
	const namespaces = ['Help','Portal','Special','Talk','Wikipedia','Category'];
	const a = {};
	const links = document.getElementsByTagName('a');
	for(let i=0;i<links.length;++i) {
		let href=links[i].href;
		if(href.startsWith('https://en.wikipedia.org/wiki/')) {
			if(href.indexOf('#')!=-1) {
				href=href.substr(0,href.indexOf('#'));
			}
			let ignore=false;
			for(let j=0;j<namespaces.length;++j) {
				if(href.startsWith('https://en.wikipedia.org/wiki/'+namespaces[j]+':')) {
					ignore=true;
					break;
				}
			}
			if(!ignore) {
				a[href]=true;
			}
		}
	}
	const b = [];
	for(k in a) {
		b.push(k);
	}
	b.sort();
	let str="";
	for(let i=0;i<b.length;++i) {
		str=str+"\n"+b[i];
	}
	const ta = document.createElement('textarea');
	document.body.appendChild(ta);
	ta.value=str;
})()
