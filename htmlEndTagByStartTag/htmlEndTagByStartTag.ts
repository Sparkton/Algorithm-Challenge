function htmlEndTagByStartTag(startTag: string): string {
    const splitString = startTag.split(' ');
    const splitTag = splitString[0].toString().split('');
    let endtag = '</';

    for (let i = 1; i < splitTag.length; i++) {
        endtag += splitTag[i];
    }

    endtag = endtag[endtag.length - 1] === '>' ? endtag : endtag+='>';

    return endtag;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'))