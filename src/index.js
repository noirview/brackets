module.exports = function check(str, bracketsConfig) {
    let stack = [];

    for (let bracket of str) {
        for (let arr_bracket of bracketsConfig) {
            
            if (!arr_bracket.includes(bracket)) continue;

            switch (bracket) {
                case arr_bracket[0]:
                    if (stack[stack.length - 1] == bracket && arr_bracket[0] == arr_bracket[1]) stack.pop();
                    else stack.push(bracket);
                    break;

                case arr_bracket[1]:
                    if (stack.length == 0) return false;
                    if (arr_bracket[0] != stack.pop()) return false;
            
                default:
                    break;
            }
        }
        // console.log(stack);
    }

    return stack.length == 0 ? true : false;
}
