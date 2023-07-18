import uniqueId from '@form-create/utils/lib/unique';
import { makeRequiredRule } from '../../../utils/index';
const label = '日期选择器';
const name = 'extraDatePicker';

export default {
    icon: 'icon-date',
    label,
    name,
    rule() {
        return {
            type: 'datePicker',
            field: uniqueId(),
            title: label,
            props: {
                valueFormat: 'YYYY-MM-DD'
            },
            style: 'width:100%'
        };
    },
    props() {
        return [
            makeRequiredRule(),
            { type: 'input', field: 'placeholder', title: '输入框提示文字' },
            { type: 'switch', field: 'allowClear', title: '是否显示清除按钮', value: true },
            { type: 'switch', field: 'autofocus', title: '自动获取焦点', value: false },
            { type: 'switch', field: 'bordered', title: '是否有边框', value: true },
            { type: 'switch', field: 'disabled', title: '禁用' },
            { type: 'input', field: 'dropdownClassName', title: '额外的弹出日历 className' },
            { type: 'switch', field: 'inputReadOnly', title: '设置输入框为只读', info: '避免在移动设备上打开虚拟键盘' },
            {
                type: 'select',
                field: 'mode',
                title: '日期面板的状态',
                options: [
                    { label: 'date', value: 'date' },
                    { label: 'year', value: 'year' },
                    { label: 'month', value: 'month' },
                    { label: 'time', value: 'time' },
                    { label: 'decade', value: 'decade' },
                ]
            },
            {
                type: 'select',
                field: 'picker',
                title: '设置选择器类型',
                value: 'date',
                options: [
                    { label: 'date', value: 'date' },
                    { label: 'year', value: 'year' },
                    { label: 'month', value: 'month' },
                    { label: 'week', value: 'week' },
                    { label: 'quarter', value: 'quarter' },
                ]
            },
            {
                type: 'select',
                field: 'size',
                title: '尺寸',
                props: {
                    allowClear: true
                },
                options: [
                    { label: 'large', value: 'large' },
                    { label: 'small', value: 'small' },
                    { label: 'middle', value: 'middle' },
                ]
            },
            {
                type: 'input',
                field: 'valueFormat',
                info: "YYYY-MM-DD HH:mm:ss",
                title: '显示在输入框中的格式默认dayjs',
                value: 'YYYY-MM-DD'
            },
            {
                type: 'struct', field: 'disabledDate', title: '不可选择的日期', props: {
                    title: `不可选择的日期`,
                    defaultValue: (currentDate) => false
                }
            },
            {
                type: 'struct', field: 'getPopupContainer', title: '定义浮层的容器，默认为 body', props: {
                    title: `定义浮层的容器`,
                    defaultValue: (trigger) => document.body
                }
            },
        ];
    }
};