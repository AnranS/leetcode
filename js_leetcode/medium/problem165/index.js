/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let versions1 = version1.split('.');
    let versions2 = version2.split('.');

    let length = versions1.length>versions2.length ? version2.length : versions1.length;
    for(let i = 0;i<length; i++) {
        if(Number.parseInt(versions1[i]) > Number.parseInt(versions2[i])) return 1;
        if(Number.parseInt(versions1[i]) < Number.parseInt(versions2[i])) return -1;
    }
    if(versions1.length > versions2.length) {
        let i = versions2.length;
        while(i<versions1.length) {
            if(Number.parseInt(versions1[i])!== 0) return 1;
            i++;
        }
        return 0;
    };
    if(versions1.length < versions2.length) {
        let i = versions1.length;
        while(i<versions2.length) {
            if(Number.parseInt(versions2[i])!== 0) return -1;
            i++;
        }
        return 0;
    }; 
    return 0;
};

// let version1 = "0.1", version2 = "1.1";
// let version1 = "1.0.1", version2 = "1"
// let version1 = "7.5.2.4", version2 = "7.5.3";

let version1 = "10.6.5", version2 = "10.6"
// let version1 = "1.0", version2 = "1.0.0"

console.log(compareVersion(version1, version2));