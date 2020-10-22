function domainType(domains: string[]): string[] {
    var values = {
        "org" : "organisation",
        "com" : "commercial",
        "net" : "network",
        "info" : "information"
    };
    let i = 0;
    var output: string[] = [];
    var newStr: string ="";
    domains.forEach(element => {
        newStr = element.substr(element.lastIndexOf('.')+1);
        output.push(values[newStr]);
    });
    return output;
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));