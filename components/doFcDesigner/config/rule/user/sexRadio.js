import uniqueId from '@form-create/utils/lib/unique';

const label = '性别';
const name = 'sexRadio';

export default {
    icon: 'icon-radio',
    label,
    name,
    rule() {
        return {
            type: 'radio',
            field: uniqueId(),
            title: label,
            props: {type: "text"},
            temple_code: 'sexRadio',
            $required: "性别不能为空",
            options: [
                { value: '1', label: '男' },
                { value: '2', label: '女' },
            ]
          
        };
    },
    props() {
        return [
            { type: 'inputNumber', field: 'maxlength', title: '文本长度' },
            {
                type: 'select',
                field: 'type',
                title: '文本类型',
                value: 'text',
            },
            {
              type: 'radio', field: 'required', title: '是否必填',  value: '0', options: [
                    {label: '是', value: '1'},
                    {label: '否', value: '0'}
                ]
            }
        ];
    }
};