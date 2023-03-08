/**
 * 1.处理 字典赋值、group-table 、group 的支持
 * 
 * @param {array} rules 
 * @param {*} dictionary 
 */
export function initRules(rules, dictionary) {
    if (rules && Array.isArray(rules)) {
        rules.forEach((ruleItem) => {

            if (ruleItem.dataSourceType === 'dictionary') {
                // 对标准的字典列表处理
                if (dictionary) {
                    const { code, label, value } = ruleItem.typeCodes
                    ruleItem.options = dictionary[code].map(item => {
                        return {
                            label: item[label],
                            value: item[value],
                        }
                    })
                }
                ruleItem.effect = null;
            } else if (ruleItem.dataSourceType === 'fetch') {
                // 对api方式的处理
                ruleItem.options = [];
                ruleItem.typeCodes = null;
            } else if (ruleItem.dataSourceType === 'options') {
                // 直接options处理
                ruleItem.typeCodes = null;
                ruleItem.effect = null;
            }


            if (ruleItem.children && ruleItem.children.length) {
                initRules(ruleItem.children, dictionary)
            }

            //对真实的类型进行处理
            if (ruleItem.realType) {
                ruleItem.type = ruleItem.realType

                if (ruleItem.realType === 'group-table') {
                    if (!ruleItem.props) {
                        ruleItem.props = {}
                    }
                    ruleItem.props.rule = [...ruleItem.children];
                    delete ruleItem.children
                } else if (ruleItem.realType === 'group') {
                    if (!ruleItem.props) {
                        ruleItem.props = {}
                    }
                    ruleItem.props.rule = [...ruleItem.children];
                    delete ruleItem.children
                }
                
                delete ruleItem.realType
            }
        })
    }
}