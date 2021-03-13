const { parse } = require('@typescript-eslint/typescript-estree');


module.exports = {
        genAst:  (source, options) => {
                return parse(source, options)
        } 
}
