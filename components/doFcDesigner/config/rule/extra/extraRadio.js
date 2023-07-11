import uniqueId from '@form-create/utils/lib/unique';
import { makeOptionsRule, makeRequiredRule } from '../../../utils/index';
const label = '单项选择';
const name = 'extraRadio';

export default {
    icon: 'icon-radio',
    label,
    name,
    rule() {
        return {
            type: 'radio',
            field: uniqueId(),
            title: label,
            info: '',
            options: [
                { value: '1', label: '选项1' },
                { value: '2', label: '选项2' },
            ]
        };
    },
    props() {
        return [
            makeRequiredRule(),
            makeOptionsRule('options'),
            { type: 'switch', field: 'disabled', title: '禁用' },
        ];
    }
};