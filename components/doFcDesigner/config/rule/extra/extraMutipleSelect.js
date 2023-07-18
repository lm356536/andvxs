import uniqueId from '@form-create/utils/lib/unique';
import { makeOptionsRule, makeRequiredRule} from '../../../utils/index';

const label = '多项下拉';
const name = 'extraMutipleSelect';

export default {
    icon: 'icon-select',
    label,
    name,
    rule() {
        return {
            type: 'select',
            field: uniqueId(),
            title: label,
            effect: {
                fetch: {}
            },
            props: {
                multiple: false
            },
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
            { type: 'input', field: 'placeholder', title: '占位符' },
            { type: 'switch', field: 'allowClear', title: '支持清除' },
            // { type: 'switch', field: 'autoClearSearchValue', title: '是否在选中项后清空搜索框', info: '只在 mode 为 multiple 或 tags 时有效', value: true },
            { type: 'switch', field: 'autofocus', title: '获取焦点' },
            { type: 'switch', field: 'bordered', title: '是否有边框', value: true },
            { type: 'switch', field: 'defaultActiveFirstOption', title: '是否默认高亮第一个选项', value: true },
            { type: 'switch', field: 'disabled', title: '是否禁用' },
            { type: 'input', field: 'dropdownClassName', title: '下拉菜单的 className 属性' },
            { type: 'switch', field: 'filterOption', title: '是否根据输入项进行筛选', value: true },
            { type: 'inputNumber', field: 'maxTagCount', title: '最多显示多少个 tag' },
            { type: 'inputNumber', field: 'maxTagTextLength', title: '最大显示的 tag 文本长度' },
        ];
    }
};