/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(str) {
    let res = 0 
    let bitArray = 0 // 前缀区间的bitArray
    let vowel = { w: 1, b: 2, j: 4, r: 8 } // 对照表
    let map = { 0: -1 } // map存放各个前缀区间的bitArray
    for (let i = 0; i < str.length; i++) { // 遍历str串
        let c = str[i] // 获取当前遍历的字符
        if (vowel[c] !== undefined) { // 当前遍历的字符是元音
            bitArray ^= vowel[c] // 求出当前前缀区间的bitArray
            if (map[bitArray] === undefined) { // 当前bitArray没存过
                map[bitArray] = i // 存入该bitArray，和对应的位置
            }
        }
        let distance = i - map[bitArray] //求距离，即满足条件的子串长度
        res = Math.max(res, distance) // 试图刷新最长记录
    }
    return res
};

// iezedktbkrsgomiryarucexkwb
// console.log('gqumtrmglczxgfdfwmyduambftpwcifmasuvueercxlyupdktkgupndnarsktbbrjxfsnmwqmcrkvtgumvssdjbppxsggohvlpumzwfpmkkressqljknueprhkqgocwebkjhinrhqoftjjykxrymqkpfcaahnqlvetzapsmpigrdrqygnwqpbeeghpvnxdsvemdvznwutazcviorgdjphwtdbgwlfowmdywywvoerqjdwcbmbqicilmxeskhbvlpumpslpbehmeixixfidddnymnitltcajgqdlupwgvhcggiqlvjvrqzvymoobxpyubthxirqonfzzjsnqkdfmydwhfyokppcwiauuguitmjvxnsnjnnqapzsyxekxagvejmwtdbbfxvwvbwlitjodgxiosebcyzzburevbuwpuuvumcwwrzettxgkuepmdihnfrgutgaubincebteptyklzgksobsjspefgfmkxmhgsknlcvcgoqoy'.length);
console.log(findTheLongestSubstring('cgsbeqtntfeavzugeoaajtwvczysbzpvxdvmcpheziipqgzoubrzuitrbtcwexeebbgmacmfdblubiwbdcyqkfaeatwvdmpfyixkjaaxbtdiydkvtvtjlapuozngrqcrnwwjlcdntllvxmqrvqydsrhkrrddqdygdftyonjteawcxryqlavztlqgnpxsevudfrkfeasbipfkhzkrsmeyjckxvucxsskjhxanxklbogirsfqludfdxylcgfbqddbtyruqixdxkknouspgqztexahlngoubiiachgnstafvcjjfeofcfmintblfdvqxulnpafvtpnavwiwhenqtwlpighuttxpcmsymxeyjbujmbjlsroyvqmjrnqdutqptssejizhdqzxvroschzmhupdzjnelpoxilhihlaqnwbtuluysxzvmznvfboidysqkdtexigcfkpqamtgsnsyezbwmckbvuhdewkmzjfzcsnejvslaftpwnffmvfkveftdwguvktiyxntncqstnibnpfqgxsebefuccltyryretsivyqmuwfonhktmrwlmfcjuhyoooaqqclrxacwyxrwmlnedfotwtnpcdvsghhnwdptwitfqaitdbwvpnnzvrhjjisibosqtythlzfcorlpppuqdfwfwvruyunmpbblbienjcgvsdgblrajzezmuibfksbjmiahyfvmkamqwktdjxktykashflkzxthanoxaxsuuzzsxjoegnbhjerylidvvwureqnavdxetipqqpzwxmddwwhaqzyllwoalznkdwhcqnglgktwbxzyhxsysdjnwicqrrfrnnlwxkloyyacpnaedplujsneezdgroytkntouxpckczcvismhsqrtjqhtwmwpfyuthgykcsotgudjajchxtdzrgayziopyzetxgbsjkpoefjzoayexlkvqpbgwvtmpmxztfpussmzfiruspzjjbaxdmcqrxklabgljzx'))

let testStrs = ''

for(let i = 0;i < 1000; i++) {
    let character = String.fromCharCode(Math.floor(Math.random()*26)+"a".charCodeAt(0)); 
    testStrs += character;
}

console.log(testStrs);
   