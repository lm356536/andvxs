import uniqueId from '@form-create/utils/lib/unique';

const label = '邮箱';
const name = 'mailInput';

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
            temple_code: 'mailInput',
            validate: [
                {
                  "trigger": "change",
                  "mode": "pattern",
                  "message": "请输入正确的邮箱信息",
                  "pattern": "^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$",
                  "type": "string"
                }
              ],
              "$required": "邮箱信息不能为空"
          
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