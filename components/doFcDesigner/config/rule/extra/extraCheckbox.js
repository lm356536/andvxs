import uniqueId from '@form-create/utils/lib/unique';
import { makeOptionsRule } from '../../../utils/index';

const label = '多项选择';
const name = 'extraCheckbox';

export default {
    icon: 'icon-checkbox',
    label,
    name,
    rule() {
        return {
            type: 'checkbox',
            field: uniqueId(),
            title: label,
            options: [
                { value: '1', label: '选项1' },
                { value: '2', label: '选项2' },
            ]
        };
    },
    props() {
        return [
            makeOptionsRule('options'),
            { type: 'switch', field: 'disabled', title: '是否禁用' },
        ];
    }
};