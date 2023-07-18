import uniqueId from '@form-create/utils/lib/unique';
import { makeRequiredRule } from '../../../utils/index';
const label = '单行文本';
const name = 'extraInput';

export default {
    icon: 'icon-input',
    label,
    name,
    rule() {
        return {
            type: 'input',
            field: uniqueId(),
            title: label,
            props: {type: "text"}
        };
    },
    props() {
        return [
            makeRequiredRule(),
            { type: 'inputNumber', field: 'maxlength', title: '文本长度' },
            {
                type: 'select',
                field: 'type',
                title: '文本类型',
                value: 'text',
            },
        ];
    }
};