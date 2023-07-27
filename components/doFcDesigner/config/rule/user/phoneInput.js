import uniqueId from '@form-create/utils/lib/unique';

const label = '手机号码';
const name = 'phoneInput';

export default {
    icon: 'icon-input',
    label,
    name,
    rule() {
        return {
            type: 'input',
            field: uniqueId(),
            title: label,
            props: {type: "text"},
            temple_code: 'phoneInput',
            validate: [
                {
                  "trigger": "change",
                  "mode": "pattern",
                  "message": "请输入正确的手机号码",
                  "pattern": "^(?:(?:\\+|00)86)?1[3-9]\\d{9}$",
                  "type": "string"
                }
              ],
              "$required": "手机号码不能为空"
          
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